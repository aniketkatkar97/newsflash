import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "130px" }}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{ backgroundColor: "#cfebff" }}
              >
                About
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div
                className="accordion-body"
                style={{ backgroundColor: "#e7f5ff" }}
              >
                <strong>
                  Don't have much time?.. but still want to know what's going on
                  in the world?
                </strong>
                <br />
                This is the website you're looking for. You can get quick look
                on the top headlines here. You can even choose which category
                you want the news from like Sports, Business, Entertainment,
                etc. You can also view the full articles if you want to from the
                given link attached to the <strong>News FlashCards</strong>{" "}
                <br /> Reading the news just became fun. Enjoy reading...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
