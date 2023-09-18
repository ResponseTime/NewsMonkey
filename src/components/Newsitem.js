import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, mode } = this.props;
    return (
      <>
        <div
          className={`card bg-${mode} text-${
            mode === "light" ? "dark" : "light"
          }`}
          style={{
            height: "550px",
            width: "450px",
            border: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger ">
              {this.props.source}
            </span>
          </div>
          <img
            className="card-img-top"
            src={imgUrl}
            alt="Card image cap"
            style={{ height: "300px", width: "300" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 10 ? title.substring(0, 10) + "..." : title}
            </h5>
            <p className="card-text">
              {desc.length > 50 ? desc.substring(0, 50) + "..." : desc}
            </p>
            <p className="card-text">
              <small className={`text-${mode === "light" ? "dark" : "light"}`}>
                By {this.props.author} on {this.props.date}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className={`btn btn-${mode == "light" ? "dark" : "light"}`}
            >
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}
