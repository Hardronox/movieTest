import React, {Component} from "react";
import {withRouter} from "react-router";

import {propTypes, defaultProps} from "./types";
import {connected} from "./connect";
import styles from "./styles.module.scss";

import {
	// getCartProgressBarStepsStatuses,
	// getCartStepName,
	// getCartStepsDirections,
} from "./helpers";
import {Link} from "react-router-dom";
import {Header} from "../../components/Header";


class HomePageBase extends Component {

	constructor(props) {
		super(props);

		this.input = React.createRef();
	}

	state = {
		isInitValiditySet: false,
		isTermsOfService: false,
	};

	componentDidMount() {
		// this.setStepsDataOnInit();

	};

	addTodo = () => {
		// this.props.addTodo();

		console.log(this.myRef.current);
	};

	removeTodo = () => {
		// this.props.removeTodo();

	};

	renderMoviesList = () => {
console.log(styles);
console.log(styles.movieDescription);
		// return this.props.map((item, i) => {
		return (
			<div key={'a'} className={styles.movieContainer}>
				<div>
					<img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
				</div>

				<div className={styles.movieDescription}>
					<h2 className={styles.title}>
						Title
					</h2>

					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, asperiores beatae blanditiis deserunt earum eius ex id inventore necessitatibus nisi,
						numquam odio, quos reiciendis reprehenderit saepe sequi tempora voluptates voluptatum.
					</div>

					<div className={styles.viewButton}>
						<Link to={`/movie/${'i'}`}>
							<button>
								View
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
		// });
	};

	render() {
		console.log('kek');

		return (
			<div className={styles.homepageContainer}>
				<Header
					showBackButton={true}
					showSearchBar={false}
				/>

				{this.renderMoviesList()}
			</div>
		);
	}
}

const HomePageConnected = connected(HomePageBase);
HomePageConnected.propTypes = propTypes;
HomePageConnected.defaultProps = defaultProps;

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export const HomePage = withRouter(HomePageConnected);
