import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, url, urlToImage, source } = this.props;
    return (
      <div className="my-3">
        <div
          className="card border-info"
          style={{
            width: "300px",
            height: "600px",
            backgroundColor: "#e8f2f9",
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0.5rem",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"
            }
            className="card-img-top"
            alt="..."
            style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
            }}
          />
          <div className="d-flex flex-column justify-content-between card-body">
            <h5 className="card-title">
              {title.length < 115 ? title : title.slice(0, 115) + "..."}
            </h5>
            <p className="card-text">
              {description.length < 170
                ? description
                : description.slice(0, 170) + "..."}
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-primary rounded-pill"
            >
              Full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
