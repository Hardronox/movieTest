import React, {Component} from "react";
import {withRouter} from "react-router";

export class HeaderBase extends Component {

	constructor(props) {
		super(props);
		this.searchInput = React.createRef();
	}

	search = () => {
		console.log(this.searchInput);
		if (this.searchInput) {

		}
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

export const Header = withRouter(HeaderBase);
