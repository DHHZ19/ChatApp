import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp,
    };
  }

  render() {
    return (
      <div className="block bg-white my-2 mx-auto shadow-md py-2 px-5 rounded-sm clear-both">
        {this.state.message.body}
      </div>
    );
  }
}

export default Message;
