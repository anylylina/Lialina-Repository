import React from "react";
import "./App.css";
import { VotingProvider, useVoting } from "./context/VotingContext";
import { EmojiList, Result } from "./Components/Component";

function VotingBlock() {
  const { setShowResults } = useVoting();

  return (
    <>
      <EmojiList />
      <button
        onClick={() => setShowResults(true)}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Show Results
      </button>
      <Result />
    </>
  );
}

function App() {
  return (
    <VotingProvider>
      <div className="text-center p-6 font-sans italic">
        <h1 className="text-2xl font-bold mb-6">
          Голосування за найкращий смайлик
        </h1>
        <VotingBlock />
      </div>
    </VotingProvider>
  );
}

export default App;
