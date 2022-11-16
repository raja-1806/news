
import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, news, author, date, sourceName} = this.props;


    return (
      <div className='my-3'>
            <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}> {sourceName}</span>
               <img src={imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png '} className="card-img-top" alt="..." />
               
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
