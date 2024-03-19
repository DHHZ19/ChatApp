import React, { Component } from "react";

class ChatInput extends Component {
  render() {
    return (
      <div className="w-[95%] block m-auto ">
        <input
          className="p-2 rounded-md border-1 border w-[98%] shadow-md"
          onKeyDown={this.props.send}
        />
      </div>
    );
  }
}

export default ChatInput;
