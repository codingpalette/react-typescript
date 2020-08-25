import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const BallBox = styled('span')`
    display: inline-block;
    border: 1px solid #000;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-right: 20px;
`;


const Ball: FunctionComponent<{number:number}> = ({number}) => {
    let background;
    if (number <= 10) {
        background = 'red';
    } else if (number <= 20) {
        background = 'orange';
    } else if (number <= 30) {
        background = 'yellow';
    } else if (number <= 40) {
        background = 'blue';
    } else {
        background = 'green';
    }

    return(
        <>
            <BallBox className="ball" style={{ background }}>{number}</BallBox>
        </>
    )
};

export default Ball;
