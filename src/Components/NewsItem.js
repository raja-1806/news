
import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, news, author, date, sourceName} = this.props;


    return (
      <div className='my-3'>
            <div className="card">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}> {sourceName}</span>
               <img src={imageUrl || "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"} className="card-img-top" alt="..." />
               
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                <a rel='noreferrer' href={news} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
