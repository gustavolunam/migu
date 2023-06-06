import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { CuponContext } from "../context/CuponContext";
import { Link } from "react-router-dom";

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 90;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 200;

function BirdGame(){

    const [birdPosition, setBirdPosition] = useState(250);
    const [gameHasStarted, setGameHasStarted] = useState(false);    
    const [obstacleHeight, setObstacleHeight] = useState(200);
    const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
    const [score, setScore] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const { addToCupon } = useContext(CuponContext);
    const guide = "¡Llega a 10 puntos para ganar!";

    const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;

    useEffect(() => {
        let timeId;
        if(gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE){
            timeId = setInterval(() => {
                setBirdPosition((birdPosition) => birdPosition + GRAVITY)
            }, 24);
        }

        return () => {
            clearInterval(timeId);
        };
    }, [birdPosition, gameHasStarted]);

    useEffect(() => {
        let obstacleId;
        if(gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH){
            obstacleId = setInterval(() => {
                setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
            }, 24);

            return() => {
                clearInterval(obstacleId);
            };
        } else{
            setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
            setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
            );
            setScore(score => score + 1);
        }
    }, [gameHasStarted, obstacleLeft]);

    useEffect(() => {
        const hasCollidedWithTopObstacle = birdPosition >= 0 && birdPosition <= obstacleHeight;
        const hasCollidedWithBottomObstacle = birdPosition <= 500 && birdPosition >= 500 - bottomObstacleHeight;

        if(obstacleLeft >= 0 && obstacleLeft <= OBSTACLE_WIDTH && (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)){
            setScore(score => score - 2);
            setGameHasStarted(false);
            
        }
    }, [birdPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft])


    const handleClick = () => {
        let newBirdPosition = birdPosition - JUMP_HEIGHT;
        if(!gameHasStarted){
            setGameHasStarted(true);
            setScore(score => 0);
            setGameWon(false);
        }
        else if(newBirdPosition < 0){
            setBirdPosition(0);
        } else{
            setBirdPosition(newBirdPosition);
        }
    };

    
    useEffect(() => {

        if(score > 9){
            setGameWon(true);
            //setScore(score => score);
            setGameHasStarted(false);           
        }

    }, [score]);
    

    return(
        
        <Div onClick={handleClick}>
            
            <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
                <Obstacle 
                    top={0}
                    width={OBSTACLE_WIDTH}
                    height={obstacleHeight}
                    left={obstacleLeft}/>
                <Obstacle 
                    top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
                    width={OBSTACLE_WIDTH}
                    height={bottomObstacleHeight}
                    left={obstacleLeft}/>
                <Bird size = {BIRD_SIZE} top = {birdPosition}/>
            </GameBox>
            {gameWon && (
            <div className="popup">
            <h2 className ="winMsg">FELICIDADES</h2>
          <Link to = "/cupons">
            <button type="button" onClick={addToCupon} className = "returnButton">Regresar</button>
          </Link>
        </div>
      )}
            <span>{score}</span>
            <h1> {guide} </h1>
            
            
        </Div>

    );

    

    /*
    return (
    <div className="Bird"> 
        <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
            <Bird size = {BIRD_SIZE} top = {birdPosition}/>
        </GameBox>
    </div>
    );
    */
}

export default BirdGame;

const Bird = styled.div`
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`

const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    & span{
        color: black;
        font-size: 24px;
        position: absolute;
    }
    & h1{
        color: black;
        font-size: 24px;
        position: absolute;
        margin-top: 450px;
    }
`

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: white;
    overflow: hidden;
    border-style: solid;
`

const Obstacle = styled.div`
    position: relative;
    top: ${(props) => props.top}px;
    background-color: green;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    left: ${(props) => props.left}px;
`;

