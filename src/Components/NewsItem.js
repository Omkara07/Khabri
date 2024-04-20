import React from "react";

export default function NewsItem(props) {

    let { title, description, imageUrl, newsUrl, date, author,source} = props;
    return (
      <div className="my-3">
        <div className={`card bg-${props.mode==="light"? "light":"dark"}`} >
          <span  className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:'90%'}}>
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt=".../" />
          <div className={`card-body bg-${props.mode==="light"? "light":"dark"}`} style={{color: props.mode==="light"? "black" : "white" }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              By {!author ? "Unkown" : author} on{" "}
              {new Date(date).toDateString()}
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-sm btn-${props.mode==="light"? "dark":"light"}`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}
