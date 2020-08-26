import * as React from 'react';
import { useMemo, FC, Dispatch } from 'react';
import styled from '@emotion/styled';
import Tr from "./Tr";

const TableTag = styled('table')`
    border-collapse: collapse;
`;



interface Props {
    tableData: string[][];
    dispatch: Dispatch<any>;
    onClick: () => void;
}
const Table: FC<Props> = ({ tableData, dispatch }) => {
    return(
        <>
            <TableTag>
                {Array(tableData.length).fill(null).map((tr, i) => (
                    useMemo(
                        () => <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />,
                        [tableData[i]],
                    )
                ))}
            </TableTag>
        </>
    )
}

export default Table;
