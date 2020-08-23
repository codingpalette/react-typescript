import * as React from 'react';
import {useState, useCallback, useRef} from 'react';
import styled from '@emotion/styled';

const ScreenBox = styled('div')`
    & #screen{
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    & #screen.waiting{
        background-color: aqua;
    }
    & #screen.ready{
        background-color: red;
        color: #fff;
    }
    & #screen.now{
        background-color: greenyellow;
    }

`;


const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState<number[]>([]);
    const timeout = useRef<number | null>(null);
    const startTime = useRef(0);
    const endTime = useRef(0);


    const onClickScreen = useCallback(() => {
        if (state === 'waiting') {
            timeout.current = window.setTimeout(() => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date().getTime();
            }, Math.floor(Math.random() * 1000) + 2000) ; // 2초~3초 랜덤
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
        } else if (state === 'ready') { // 성급하게 클릭
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date().getTime();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    }, [state]);

    const onClickReset = useCallback(() => {
        setResult([]);
    }, [])

    const renderAverage = () => {
        return result.length === 0
            ? null :
            <>
                <div>평균시간: {result.reduce((a , c) => a + c)/ result.length}ms</div>
                <button onClick={onClickReset}>리셋</button>
            </>
    }



    return (
        <>
            <ScreenBox>
                <div id="screen" className={state} onClick={onClickScreen}>
                    {message}
                </div>
            </ScreenBox>
            {renderAverage()}
        </>
    )
}

export default ResponseCheck;