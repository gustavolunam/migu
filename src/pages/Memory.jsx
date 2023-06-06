import { Link} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CuponContext } from "../context/CuponContext";
import Board from "../components/Board";
const emojiList = [...'🍕🎮🎱💩⚽🥅'];

const Memory = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const { addToCupon } = useContext(CuponContext);

  useEffect( () => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
  }, []);

  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if(selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if(selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
      // Verificar si todos los bloques han sido volteados correctamente
    const allBlocksFlipped = shuffledMemoBlocksCopy.every(block => block.flipped);
    if (allBlocksFlipped) {
      setGameWon(true);
    }
  }

  return (
    <>
      <Board memoBlocks={shuffledMemoBlocks} animating={animating} handleMemoClick={handleMemoClick} />
      {gameWon && (
        <div className="popup">
          <h2 className ="winMsg">FELICIDADES</h2>
          <Link to = "/cupons">
            <button type="button" onClick={addToCupon} className = "returnButton">Regresar</button>
          </Link>
        </div>
      )}
    </>
  );

}

export default Memory;