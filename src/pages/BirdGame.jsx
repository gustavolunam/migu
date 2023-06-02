import styled from "styled-components";
import { useState, useEffect } from "react";

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;

function BirdGame(){

    let timeId;

    const [birdPosition, setBirdPosition] = useState(250);

    useEffect(() => {
        if(birdPosition < GAME_HEIGHT - BIRD_SIZE){
            timeId = setInterval(() => {
                setBirdPosition((birdPosition) => birdPosition + GRAVITY)
            }, 24)
        }

    return () => {
        clearInterval(timeId);
    
    }


    });

    return (
    <div className="Bird"> 
        <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
            <Bird size = {BIRD_SIZE} top = {birdPosition}/>
        </GameBox>
    </div>
    );
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
    background-color: blue;
`