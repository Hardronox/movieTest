import React, {Component} from "react";
import {withRouter} from "react-router";
import {propTypes} from "./types";
import {connected} from "./connect";

export class HeaderBase extends Component {

	constructor(props) {
		super(props);
		this.searchInput = React.createRef();
	}

	search = () => {
		const {value} = this.searchInput.current;

		this.props.searchMovie(value);
	};

	render() {
		const {showBackButton, showSearchBar} = this.props;

		return (
			<div className="header">
				{showBackButton
					? (
						<button>
							Back
						</button>
					) : null
				}

				{showSearchBar
					? (
						<input
							type="text"
							ref={this.searchInput}
							onChange={this.search}
						/>
					) : null
				}

			</div>
		);
	}
}

const HeaderConnected = connected(HeaderBase);
HeaderConnected.propTypes = propTypes;

export const Header = withRouter(HeaderConnected);
