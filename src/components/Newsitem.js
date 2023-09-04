import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card my-3">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger "
            style={{ left: "90%", zIndex: 1 }}
          >
            {this.props.source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img className="card-img-top" src={imgUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 10 ? title.substring(0, 10) + "..." : title}
            </h5>
            <p className="card-text">
              {desc.length > 50 ? desc.substring(0, 50) + "..." : desc}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {this.props.author} on {this.props.date}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}
