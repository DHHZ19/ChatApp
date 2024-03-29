import React, { Component } from "react";
import Message from "./Message";

class ChatHistory extends Component {
  render() {
    console.log(this.props.chatHistory);
    const messages = this.props.chatHistory.map((msg) => (
      <Message message={msg.data} />
    ));

    return (
      <div className="bg-[#f7f7f7] p-5">
        <h2 className="text-xl font-semibold"> Chat History </h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
