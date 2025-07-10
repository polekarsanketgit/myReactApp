import React, { useState } from "react";

const Poll = () => {
  const question = "Which is your favorite programming language?";
  const options = ["JavaScript", "Python", "Java", "C++"];

  const [votes, setVotes] = useState(Array(options.length).fill(0));
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = () => {
    if (selectedOption === null) return;

    const newVotes = [...votes];
    newVotes[selectedOption] += 1;
    setVotes(newVotes);
    setHasVoted(true);
  };

  const getTotalVotes = () => votes.reduce((a, b) => a + b, 0);

  return (
    <div style={styles.container}>
      <h2>{question}</h2>

      {hasVoted ?
        <div>
          {options.map((option, index) => {
            const percentage = ((votes[index] / getTotalVotes()) * 100).toFixed(
              1
            );
            return (
              <div key={index} style={styles.resultBar}>
                <span>{option}</span>
                <div style={styles.barContainer}>
                  <div style={{ ...styles.bar, width: `${percentage}%` }}>
                    {percentage}%
                  </div>
                </div>
              </div>
            );
          })}
          <p>Total Votes: {getTotalVotes()}</p>
        </div>
      : <div>
          {options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="poll"
                  value={index}
                  onChange={() => setSelectedOption(index)}
                />
                {option}
              </label>
            </div>
          ))}
          <button
            onClick={handleVote}
            style={styles.button}
            disabled={selectedOption === null}
          >
            Vote
          </button>
        </div>
      }
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  resultBar: {
    margin: "10px 0",
  },
  barContainer: {
    backgroundColor: "#eee",
    borderRadius: "5px",
    overflow: "hidden",
    height: "24px",
  },
  bar: {
    backgroundColor: "#4caf50",
    height: "100%",
    textAlign: "center",
    color: "white",
    lineHeight: "24px",
  },
};

export default Poll;
