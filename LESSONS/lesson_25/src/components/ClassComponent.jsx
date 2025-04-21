import React, { Component } from "react";

export default class MessageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 bg-blue-400 shadow-lg rounded-xl text-white max-w-md mx-auto">
          <p className="text-lg">💌Нове повідомлення від друга!</p>

          <button
            onClick={this.handleLike}
            className="mt-3 px-4 py-2 bg-pink-600 hover:bg-pink-500 transition-colors text-white font-medium rounded cursor-pointer">
            ❤️Лайк ({this.state.likes})
          </button>
        </div>
        <div />
      </div>
    );
  }
}
