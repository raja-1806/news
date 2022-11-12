import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor(){

    super();
   this.state = {
    articles : [],
    loading : false
   }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3dceeb3f3c8342d1ba8e10bbb8a9be2d";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({articles : parsedData.articles});
  }
  render() {
    return (
      <div className='container my-3' >
      <h1>Top Headlines</h1>
     
      <div className="row">
      {this.state.articles.map((element)=>{

      return <div className="col-md-4" key={element.url}>
      <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl ={element.urlToImage} news={element.url}/>
      </div>
      })}
      
      </div>

      </div>
    )
  }
}

export default News
