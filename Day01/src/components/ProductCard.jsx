import React, { Component } from "react";

/*eslint-disable*/
export default class ProductCard extends Component {
  title = "Card Title";

  handlerClick = () => {
    this.title = "New Title";
    console.log(this.title);
  }

  render() {
    return (
      <>
        <div className="card">
          <img src="./images/car-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button onClick={this.handlerClick} className="btn btn-primary">Add</button>
          </div>
        </div>
      </>
    );
  }
}
