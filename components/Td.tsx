import * as React from 'react';
import { useCallback, useEffect, useRef, memo, Dispatch, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { CLICK_CELL } from './TicTacToe';

const TdTag = styled('td')`
    border:1px solid #000;
    width: 40px;
    height: 40px;
    text-align: center;
`;


interface Props {
    rowIndex: number;
    cellIndex: number;
    dispatch: Dispatch<any>;
    cellData: string;
    children: string;
}

const Td: FunctionComponent<Props> = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    console.log('td rendered');

    const ref = useRef<[number?, number?, Dispatch<any>?, string?]>([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
        console.log(cellData, ref.current[3]);
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData]);

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        if (cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return (
        <TdTag onClick={onClickTd}>{cellData}</TdTag>
    )
};

export default memo(Td);
