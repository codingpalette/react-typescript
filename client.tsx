import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './components/App'
import GuGuDan from "./components/GuGuDan";
import WordRelay from "./components/WordRelay";

const Hot = hot(WordRelay); // HOC

ReactDOM.render(<Hot /> , document.querySelector('#root'));
