import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
    console.log('111');
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=3dceeb3f3c8342d1ba8e10bbb8a9be2d";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({ articles: parsedData.articles });
    console.log('333');

  }

  render() {
    const { articles } = this.state;
    console.log('222');

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
                  title={title || ""}
                  description={description || ""}
                  imageUrl={urlToImage}
                  news={url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
