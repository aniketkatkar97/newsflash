import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  apiKey = "27a9a4d9bfed4c7b80476cd6515e9e91";

  render() {
    document.getElementById("body").style.backgroundColor = "#f5f5f5";
    return (
      <div className="container">
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                category="business"
                key="business"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                category="entertainment"
                key="entertainment"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                category="health"
                key="health"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                category="science"
                key="science"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                category="sports"
                key="sports"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                category="technology"
                key="technology"
                apiKey={this.apiKey}
              />
            </Route>
            <Route path="/">
              <News
                setProgress={this.setProgress}
                category="general"
                key="general1"
                apiKey={this.apiKey}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
