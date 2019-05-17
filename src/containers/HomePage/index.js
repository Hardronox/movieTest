import React, {Component} from "react";
import {withRouter} from "react-router";

import {connected} from "./connect";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";
import {Header} from "../../components/Header";


class HomePageBase extends Component {

	componentDidMount() {
		this.props.getMoviesData();
	};

	renderMoviesList = () => {
		const {movies} = this.props;

		if (Array.isArray(movies) && movies.length > 0) {
			return this.props.movies.map((item, i) => {
				return (
					<div key={item.id} className={styles.movieContainer}>
						<div>
							<img src={item.movie_image} alt=""/>
						</div>

						<div className={styles.movieDescription}>
							<h2 className={styles.title}>
								{item.movie_title}
							</h2>

							<div>
								{item.movie_description}
							</div>

							<div className={styles.viewButton}>
								<Link to={`/movie/${item.id}`}>
									<button>
										View
									</button>
								</Link>
							</div>
						</div>
					</div>
				);
			});
		} else {
			return (
				<h2>
					No movies found :(
				</h2>
			)
		}
	};

	render() {

		return (
			<>
				<Header
					showBackButton={false}
					showSearchBar={true}
				/>

				<div className={styles.homepageContainer}>
					{this.renderMoviesList()}
				</div>
			</>
		);
	}
}

const HomePageConnected = connected(HomePageBase);

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export const HomePage = withRouter(HomePageConnected);
