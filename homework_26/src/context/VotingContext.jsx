import { createContext, useContext, useState } from "react";

const VotingContext = createContext();

const initialEmojis = [
  { id: 1, symbol: "😃", votes: 0 },
  { id: 2, symbol: "😊", votes: 0 },
  { id: 3, symbol: "😎", votes: 0 },
  { id: 4, symbol: "🤩", votes: 0 },
  { id: 5, symbol: "😍", votes: 0 },
];

export const VotingProvider = ({ children }) => {
  const [emojiList, setEmojiList] = useState(initialEmojis);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (id) => {
    setEmojiList((prev) =>
      prev.map((emoji) =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
      )
    );
  };

  const getWinner = () => {
    return emojiList.reduce((prev, current) =>
      current.votes > prev.votes ? current : prev
    );
  };

  return (
    <VotingContext.Provider
      value={{ emojiList, handleVote, showResults, setShowResults, getWinner }}>
      {children}
    </VotingContext.Provider>
  );
};

export const useVoting = () => useContext(VotingContext);
