const Memory = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const symbols = ['🌸', '🍉', '🌺', '🍕', '🌞', '🎉'];
    const newCards = [...symbols, ...symbols].sort(() => 0.5 - Math.random());
    setCards(newCards);
  }, []);

  const flipCard = (index) => {
    if (matchedCards.includes(index)) {
      return;
    }

    if (flippedCards.length < 2) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
    }

    if (flippedCards.length === 1) {
      const card1Index = flippedCards[0];
      const card2Index = index;
      if (cards[card1Index] === cards[card2Index]) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, card1Index, card2Index]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  return (
    <div>
      <h1>Memorama</h1>
      {matchedCards.length === cards.length && <h2>¡Felicidades! Has encontrado todas las parejas.</h2>}
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) ? 'flipped' : ''} ${matchedCards.includes(index) ? 'matched' : ''}`}
            onClick={() => flipCard(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card}</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reiniciar juego</button>
    </div>
  );
};

export default Memory;