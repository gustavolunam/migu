import { Link} from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CuponContext } from "../context/CuponContext";
import Board from "../components/Board";
import Popup from '../components/GamePopup.jsx';
const emojiList = [...'🍕🎮🎱💩⚽🥅'];

const Memory = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [active, setActive] = useState(true);
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
          <Popup trigger={active} setTrigger={setActive} >
            <div className = "popUpBorder">
              <h1>Ganaste</h1>
              <Link to = "/cupons">
              <button className="popUpbtn" onClick = {addToCupon}>
                    <h3>Regresar</h3>
                </button>
              </Link>
            </div>
          </Popup >
      )}
    </>
  );

}

export default Memory;