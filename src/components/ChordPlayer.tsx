import { useState } from "react";
import { generateChord } from "../data/harmonies";

const ChordPlayer = () => {
  const [chord, setChord] = useState<string>(generateChord());

  return (
    <div>
      <h1>{chord}</h1>
      <button onClick={setChord.bind(null, generateChord())}>refresh</button>
    </div>
  );
};

export default ChordPlayer;
