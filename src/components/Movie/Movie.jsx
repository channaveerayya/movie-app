import React, { Component } from "react";
import { API_URL, API_KEY } from "../../config";
import Navigation from "../elements/Navigations/Navigation/Navigation";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import Spinner from "../elements/Spinner/Spinner";
import FourCallGrid from "../elements/FourCallGrid/FourCallGrid";
import Actor from "../elements/Actor/Actor";
import "./Movie.scss";
class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
      const state = JSON.parse(
        localStorage.getItem(`${this.props.match.params.movieId}`)
      );
      this.setState({ ...state });
    }
    const { movieId } = this.props.match.params;

    this.setState({ loading: true });

    //fetch the movies..
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    this.fetchItems(endpoint);
  }

  fetchItems(endpoint) {
    const { movieId } = this.props.match.params;

    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        if (res.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: res }, () => {
            //fetching actors in the set state functions

            const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

            fetch(endpoint)
              .then(res => res.json())
              .then(res => {
                const directors = res.crew.filter(
                  member => member.job === "Director"
                );
                this.setState(
                  {
                    actors: res.cast,
                    directors: directors,
                    loading: false
                  },
                  () => {
                    localStorage.setItem(
                      `${this.props.match.params.movieId}`,
                      JSON.stringify(this.state)
                    );
                  }
                );
              });
          });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
          </div>
        ) : null}
        {this.state.actors ? (
          <div className="movie-grid" style={{ marginTop: "10rem" }}>
            <FourCallGrid header={"Actors"}>
              {this.state.actors.map((ele, i) => {
                return <Actor key={i} actor={ele} />;
              })}
            </FourCallGrid>
          </div>
        ) : null}
        {this.state.actors && this.state.loading ? (
          <h1>No Movie Found</h1>
        ) : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}
export default Movie;
