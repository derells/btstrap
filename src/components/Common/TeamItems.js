import React, { Component } from "react";

class TeamItems extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={this.props.image}
            alt="..."
          />
          <h4>{this.props.namee}</h4>
          <p className="text-muted">{this.props.post}</p>
          <a
            className={this.props.twlink}
            href="#!"
            aria-label="Parveen Anand Twitter Profile"
          >
            <i className={`fab ${this.props.ticon} fa-twitter`}></i>
          </a>
          <a
            className={this.props.fblink}
            href="#!"
            aria-label="Parveen Anand Facebook Profile"
          >
            <i className={`fab ${this.props.ficon} fa-facebook-f`}></i>
          </a>
          <a
            className={this.props.linkd}
            href="#!"
            aria-label="Parveen Anand LinkedIn Profile"
          >
            <i class={`fab ${this.props.licon} fa-linkedin-in`}></i>
          </a>
        </div>
      </div>
    );
  }
}
export default TeamItems;
