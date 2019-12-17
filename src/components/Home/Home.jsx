import React, { Component } from "react";

import LandingPage from "../elements/LandingPage/LandingPage";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourCallGrid from "../elements/FourCallGrid/FourCallGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import Spinner from "../elements/Spinner/Spinner";
import Button from "../elements/Buttons/Button/Button";
import NotFound from "../elements/NotFound/NotFound";

import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from "../../config";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: true,
    currentPage: 0,
    totalPages: 0,
    searchItem: null,
    error: null
  };

  componentDidMount() {
    if (localStorage.getItem("HomeState")) {
      const state = JSON.parse(localStorage.getItem("HomeState"));
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(endPoint);
    }
  }

  searchItems = searchItem => {
    let endPoint = "";
    this.setState({
      movies: [],
      loading: !this.state.loading,
      searchItem
    });
    if (searchItem === "") {
      endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchItem}`;
    }

    this.fetchItems(endPoint);
  };

  loadMoreItems = () => {
    let endPoint = "";
    this.setState({ loading: true });
    if (this.state.searchItem === "") {
      endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchItem
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endPoint);
  };
  fetchItems = endPoint => {
    fetch(endPoint)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            movies: [...this.state.movies, ...res.results],
            heroImage: this.state.heroImage || res.results[0],
            loading: !this.state.loading,
            currentPage: res.page,
            totalPages: res.total_pages,
            error: null
          },
          () => {
            if (!this.state.searchItem)
              localStorage.setItem("HomeState", JSON.stringify(this.state));
          }
        );
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  };
  render() {
    const heroPage = this.state.heroImage ? (
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.poster_path}`}
        title={this.state.heroImage.original_title}
        text={this.state.heroImage.overview}
      />
    ) : (
      <Spinner />
    );

    const fourCallGrid =
      this.state.movies.length === 0 ? (
        <Spinner />
      ) : (
        <div id="fourCallGrid">
          <FourCallGrid
            header={this.state.searchItem ? "Search result " : "Popular Movies"}
            loading={this.state.loading}
          >
            {this.state.movies.map(ele => (
              <MovieThumb
                key={ele.id}
                clicked={true}
                image={`${IMAGE_BASE_URL}${POSTER_SIZE}${ele.poster_path}`}
                movieId={ele.id}
                movieName={ele.original_title}
                vote_average={ele.vote_average}
              />
            ))}
          </FourCallGrid>
        </div>
      );
    return (
      <React.Fragment>
        <LandingPage />
        {this.state.error ? (
          <NotFound error={this.state.error} />
        ) : (
          <div>
            {heroPage}
            <SearchBar callback={this.searchItems} />
            {fourCallGrid}
            <div style={{ margin: "auto 42%" }}>
              {this.state.currentPage <= this.state.totalPages &&
              !this.state.loading ? (
                <Button
                  btnText="Load more"
                  btnBgColor="btn--maroon"
                  onClick={this.loadMoreItems}
                />
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
