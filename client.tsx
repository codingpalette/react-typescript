import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './components/App'
import GuGuDan from "./components/GuGuDan";
import WordRelay from "./components/WordRelay";
import NumberBaseball from "./components/NumberBaseball";
import ResponseCheck from "./components/ResponseCheck";
import RSP from "./components/RSP";

const Hot = hot(RSP); // HOC

ReactDOM.render(<Hot /> , document.querySelector('#root'));
