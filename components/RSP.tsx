import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

const Computer = styled('div')`
    width: 142px;
    height: 200px;
    background-position: 0 0;
`;

const rspCoords = {
    바위 : '0',
    가위 : '-142px',
    보 : '-284px'
}

const scores = {
    가위 : 1,
    바위 : 0,
    보 : -1
}

const computerChoice = (imgCoords) => {
    return Object.keys(rspCoords).find((k) => {
        return rspCoords[k] === imgCoords;
    })
}

const RSP = () => {
    return(
        <>
            <Computer id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    )
};

export default RSP;