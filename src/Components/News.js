import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  apiKey,
  category,
   country,
   pageSize,
   setProgress 
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - Daily News`;
    updateNews();
   
  }, [category]);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      country
    }&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px, 0" , marginTop : "90px"}}>
        Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              if (!element) {
                return null;
              }

              const {
                author,
                description,
                publishedAt,
                source,
                title,
                url,
                urlToImage,
              } = element;
              const { name } = source;

              return (
                <div className="col-md-4" key={url}>
                  <NewsItem
                    author={author || "Unknown"}
                    date={publishedAt}
                    description={description || ""}
                    imageUrl={urlToImage}
                    news={url}
                    sourceName={name}
                    title={title || ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
