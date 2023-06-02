import '../styles/Cuadros.css';

const makeCuadros = () => {

    

    const renderSquares = () => {
        const squares = [];
    
        for (let i = 0; i < 16; i++) {
          if (i % 4 == 0) {
            squares.push(<button className="redSqr" />);
          } else if (i % 4 == 1) {
            squares.push(<button className="blueSqr" />);
          } else if (i % 4 == 2) {
            squares.push(<button className="greenSqr" />);
          } else {
            squares.push(<button className="yellowSqr" />);
          }
        }
        return squares;
      };
      return (
        <>
          {renderSquares()}
        </>
      );
}

export default makeCuadros;