import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=3dceeb3f3c8342d1ba8e10bbb8a9be2d&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles,
      totalResults : parsedData.totalResults });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3dceeb3f3c8342d1ba8e10bbb8a9be2d&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };
  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3dceeb3f3c8342d1ba8e10bbb8a9be2d&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
  
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });

    }
  };
  render() {
    const { articles } = this.state;
    

    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>

        <div className="row">
          {articles.map((element) => {
            if (!element) {
              return null;
            }

            const { description, title, url, urlToImage } = element;

            return (
              <div className="col-md-4" key={url}>
                <NewsItem
                  description={description || ""}
                  imageUrl={urlToImage}
                  news={url}
                  title={title || ""}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
