import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async update() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=933f3a0442f64e9593f2680fd21b82e3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({ articles: pdata.articles, totalSize: pdata.totalResults });
    this.setState({ loading: false });
  }
  async componentDidMount() {
    this.update();
  }
  prev = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=933f3a0442f64e9593f2680fd21b82e3&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({ articles: pdata.articles, totalSize: pdata.totalResults });
    this.setState({ loading: false });
    this.setState({ page: this.state.page - 1 });
    // this.update();
  };
  next = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=933f3a0442f64e9593f2680fd21b82e3&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({ articles: pdata.articles, totalSize: pdata.totalResults });
    this.setState({ loading: false });
    this.setState({ page: this.state.page + 1 });
    // this.update();
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 class="text-center"> News Component</h1>
          {this.state.loading && <Spinner />}
          <div className="container row">
            {!this.state.loading &&
              this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4">
                    <Newsitem
                      title={ele.title ? ele.title : " "}
                      desc={ele.description ? ele.description : " "}
                      imgUrl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://gumlet.assettype.com/bloombergquint%2F2022-09%2Fb3c38378-a076-47f0-9e55-0581c4230220%2F2017_07_11T000000Z_817957802_RC1ED66DFB00_RTRMADP_3_INDIA_NSE_TRADING.JPG?rect=0%2C170%2C4714%2C2475&w=1200&auto=format%2Ccompress&ogImage=true"
                      }
                      newsUrl={ele.url}
                      date={new Date(ele.publishedAt).toGMTString()}
                      author={ele.author ? ele.author : " Unknown "}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.prev}
            disabled={this.state.page <= 1}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.next}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalSize / this.props.pageSize)
            }
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}
