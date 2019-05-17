import React, {Component} from "react";
import {withRouter} from "react-router";

import {connected} from "./connect";
import styles from "./styles.module.scss";

import {Header} from "../../components/Header";
import {isEmptyObject} from "../../servises/utils";
import {errorFindingSpecificMovieMessage} from '../../messages'
import {Link} from "react-router-dom";


class SpecificMoviePageBase extends Component {

	componentDidMount() {
		// param has String type, but we need it to be Int
		this.props.getSpecificMovieData(parseInt(this.props.match.params.id));
	};

	renderMovieBlock = () => {
		const {specificMovie} = this.props;

		if (!isEmptyObject(specificMovie)) {
			return (
				<div key={specificMovie.id} className={styles.movieContainer}>
					<div className={styles.imageTitle}>
						<div>
							<img src={specificMovie.movie_image} alt=""/>
						</div>

						<div>
							<h2 className={styles.title}>
								{specificMovie.movie_title}
							</h2>
						</div>
					</div>

					<div className={styles.movieDescription}>
						<div>
							Genre: Comedy
							<br/>
							Rating: 10
						</div>
						<div>{specificMovie.movie_description}</div>
					</div>

				</div>
			);
		} else {
			return (
				<h2>
					{errorFindingSpecificMovieMessage}
				</h2>
			)
		}
	};

	render() {

		return (
			<>
				<Header
					showBackButton={true}
					showSearchBar={false}
				/>

				<div className={styles.specificMovieContainer}>
					{this.renderMovieBlock()}
				</div>
			</>
		);
	}
}

const SpecificMovieConnected = connected(SpecificMoviePageBase);

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export const SpecificMovie = withRouter(SpecificMovieConnected);
