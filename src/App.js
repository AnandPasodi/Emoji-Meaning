import react, { useState } from "react";
import "./App.css";
const emojiLists = {
  "❤️": "Red Heart",
  "🔥": "Fire",
  "❤️‍🔥": "Heart on Fire",
  "✨": "Sparkles",
  "😂": "Face with Tears of Joy",
  "🥰": "Smiling Face with Hearts",
  "🥺": "Pleading Face",
  "🍉": "Watermelon",
  "🍍": "Pineapple",
  "🍏": "Green Apple",
  "🍓": "Strawberry",
};
const emojisWeKnow = Object.keys(emojiLists);

function App() {
  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiLists[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiLists[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="app">
      <div className="title">Find Emoji Meaning</div>
      <div className="input">
        <input onChange={onChangeHandler} />
      </div>
      <h2>{meaning}</h2>
      {emojisWeKnow.map((emoji) => (
        <span
          className="listOfEmojis"
          onClick={() => emojiClickHandler(emoji)}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default App;