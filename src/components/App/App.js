import React, { Component } from "react";
import "./App.css";
import { getUrls, postUrl } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urls: [],
		};
	}

	componentDidMount() {
		getUrls()
			.then((result) => {
				this.setState({
					urls: result.urls,
				});
			})
			.catch((err) => console.log(err.message));
  }
  
  componentDidUpdate() {
    getUrls()
    .then((result) => {
      this.setState({
        urls: result.urls,
      });
    })
    .catch((err) => console.log(err.message));
  }

	addUrl = (urlToShorten, title) => {
    postUrl(urlToShorten, title);
	};

	render() {
		return (
			<main className="App">
				<header>
					<h1>URL Shortener</h1>
					<UrlForm addUrl={this.addUrl} />
				</header>

				<UrlContainer urls={this.state.urls} />
			</main>
		);
	}
}

export default App;
