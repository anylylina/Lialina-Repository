import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    const storedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    this.state = {
      emojis: ["😃", "☺️", "😎", "🤩", "😍"],
      votes: storedVotes,
      winner: null,
    };
  }

  handleVote = (emoji) => {
    const newVotes = { ...this.state.votes };
    newVotes[emoji] = (newVotes[emoji] || 0) + 1;
    this.setState({ votes: newVotes }, () => {
      localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
    });
  };

  showResults = () => {
    const { votes } = this.state;
    let maxVotes = 0;
    let winner = null;

    Object.entries(votes).forEach(([emoji, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        winner = emoji;
      }
    });

    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({ votes: {}, winner: null });
  };

  render() {
    const { emojis, votes, winner } = this.state;

    return (
      <div className="flex flex-col items-center justify-start bg-white py-10 px-4">
        <h1 className="text-4xl font-bold font-serif italic mb-10 text-center">
          Голосування за найкращий смайлик
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {emojis.map((emoji) => (
            <div key={emoji} className="text-center flex items-center gap-4">
              <button
                className="text-5xl hover:scale-110 transition"
                onClick={() => this.handleVote(emoji)}>
                {emoji}
              </button>
              <p className="text-lg font-medium font-serif italic">
                {votes[emoji] || 0}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={this.showResults}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition mb-6">
          Show Results
        </button>

        {winner && (
          <div className="text-center">
            <h2 className="text-2xl font-serif italic font-semibold mb-2">
              Результати голосування:
            </h2>
            <p className="text-xl italic">Переможець:</p>
            <div className="text-6xl my-4">{winner}</div>
            <p className="text-lg font-serif italic">
              Кількість голосів: {votes[winner]}
            </p>
          </div>
        )}

        <button
          onClick={this.clearResults}
          className="mt-10 text-sm text-red-600 font-serif italic hover:bg-red-100">
          Очистити результати
        </button>
      </div>
    );
  }
}

export default ClassComponent;
