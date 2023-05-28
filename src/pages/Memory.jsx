import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../apis/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth";
import Board from '../components/Memory/Board/Board';
const emojiList = [...'🍕🎮🎱💩⚽🥅'];

const Memory = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [products, setCupons] = useState([]);

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

  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const getCupon = () => {
    let random = getRandomNum(1,10);
    console.log(random);
    const db=getDatabase();
    const dbRef = ref(db, `Cupones/${random}`);
    //let fetCupons=[];

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const nombre=snapshot.child("nombre").val();
            const desc=snapshot.child("descripcion").val();
            const fechaExp=snapshot.child("fechaExp").val();
            const fechaIni=snapshot.child("fechaIni").val();
            const aplicado=snapshot.child("aplicado").val();
            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    const dbRef1 = ref(db,`Usuarios/${uid}/ListaCupones/${random}`);
                    set(dbRef1,{
                        nombre: nombre,
                        descripcion: desc,
                        fechaExp: fechaExp,
                        fechaIni: fechaIni,
                        aplicado: aplicado
                    });
                }
            });
        });
      });
}

  return (
    <>
      <Board memoBlocks={shuffledMemoBlocks} animating={animating} handleMemoClick={handleMemoClick} />
      {gameWon && (
        <div className="popup">
          <h2>FELICIDADES</h2>
          <button type="button" onClick={getCupon}>Click Me</button>
        </div>
      )}
    </>
  );

}

export default Memory;