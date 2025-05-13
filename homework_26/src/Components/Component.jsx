import React from "react";
import { useVoting } from "../context/VotingContext";

export const Emoji = ({ symbol, votes, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer flex items-center space-x-2 not-italic text-5xl">
    {symbol}
    <div className="text-black text-lg">{votes}</div>
  </div>
);

export const EmojiList = () => {
  const { emojiList, handleVote } = useVoting();

  return (
    <div className="flex justify-center space-x-6 mb-6">
      {emojiList.map((emoji) => (
        <Emoji
          key={emoji.id}
          symbol={emoji.symbol}
          votes={emoji.votes}
          onClick={() => handleVote(emoji.id)}
        />
      ))}
    </div>
  );
};

export const Result = () => {
  const { showResults, getWinner } = useVoting();

  if (!showResults) return null;

  const winner = getWinner();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Результати голосування:</h2>
      <p className="text-lg mb-2">Переможець:</p>
      <div className="text-5xl not-italic">{winner.symbol}</div>
      <p className="text-md mt-2">Кількість голосів: {winner.votes}</p>
    </div>
  );
};
