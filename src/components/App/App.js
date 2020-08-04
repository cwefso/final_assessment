import React, { Component } from "react";
import "./App.css";
import { getUrls, postUrl, deleteUrl } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urls: [],
		};
	}

	componentDidMount = () => {
		this.loadUrls();
	};

	//For some reason having this not commented out makes my tests run forever without ever resolving
	//However if I don't have this method, my page does not rerender when state changes.
	//I believe if I could uncomment this out without my tests getting stalled my test for posting would pass
	//
	// componentDidUpdate = (prevState) => {
	// 	if(this.state.urls !== prevState.urls){
	// 		this.loadUrls()
	// 	}
	// 	return
	// }

	loadUrls = () => {
		getUrls()
			.then((data) => {
				this.setState({ urls: data.urls });
			})
			.catch((error) => console.error(error));
	};

	addUrl = (urlToShorten, title) => {
		postUrl(urlToShorten, title);
	};

	removeUrl = (id) => {
		deleteUrl(id);
		const urls = this.state.urls.filter((url) => id !== url.id);
		this.setState({ urls });
	};

	render() {
		return (
			<main className="App">
				<header>
					<h1>URL Shortener</h1>
					<UrlForm addUrl={this.addUrl} />
				</header>

				<UrlContainer urls={this.state.urls} removeUrl={this.removeUrl} />
			</main>
		);
	}
}

export default App;
