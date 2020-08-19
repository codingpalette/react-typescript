import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './components/App'
import GuGuDan from "./components/GuGuDan";

const Hot = hot(GuGuDan);

ReactDOM.render(<Hot /> , document.querySelector('#root'));
