import React, { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsFlash`;
  }

  sourceMapping = (parsedData) => {
    return parsedData.articles.map((e) => {
      let newSource = e.source.name;
      e.source = newSource;
      return e;
    });
  };

  loadArticles = async () => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    this.props.setProgress(30);
    const parsedData = await data.json();
    let newArticles = this.sourceMapping(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: newArticles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
    this.props.setProgress(100);
  };

  loadNextArticles = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    let newArticles = this.sourceMapping(parsedData);
    this.setState({
      articles: this.state.articles.concat(newArticles),
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
  };

  componentDidMount() {
    this.loadArticles();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "70px" }}>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.loadNextArticles}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((newsElement) => {
                return (
                  <div className="col-md-4" key={newsElement.url}>
                    <Newsitem
                      title={newsElement.title ? newsElement.title : ""}
                      description={
                        newsElement.description ? newsElement.description : ""
                      }
                      url={newsElement.url}
                      urlToImage={newsElement.urlToImage}
                      source={newsElement.source}
                    ></Newsitem>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
