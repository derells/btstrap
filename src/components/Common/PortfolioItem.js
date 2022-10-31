import React, { Component } from "react";

class PortfolioItem extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={this.props.image} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{this.props.title}</div>
            <div className="portfolio-caption-subheading text-muted">
              {this.props.subtitle}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PortfolioItem;
