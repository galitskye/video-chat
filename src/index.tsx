import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '#components/App';

const HotEntry = hot(App);

ReactDOM.render(<HotEntry />, document.getElementById('root'));
