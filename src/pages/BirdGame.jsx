import styled from "styled-components";
import { useState, useEffect } from "react";

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

    const bottomObstacleHeight = GAME_HEIGHT - obstacleHeight - OBSTACLE_GAP;

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
        if(gameHasStarted && obstacleLeft >= 0){
            obstacleId = setInterval(() => {
                setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
            }, 24);

            return() => {
                clearInterval(obstacleId);
            };
        }
    });

    const handleClick = () => {
        let newBirdPosition = birdPosition - JUMP_HEIGHT;
        if(!gameHasStarted){
            setGameHasStarted(true);
        }
        else if(newBirdPosition < 0){
            setBirdPosition(0);
        } else{
            setBirdPosition(newBirdPosition);
        }
    };

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
                    height={obstacleHeight}
                    left={obstacleLeft}/>
                <Bird size = {BIRD_SIZE} top = {birdPosition}/>
            </GameBox>
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
`

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: cyan;
`

const Obstacle = styled.div`
    position: relative;
    top: ${(props) => props.top}px;
    background-color: green;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;