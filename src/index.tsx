import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '#components/App';

const ReactHotApp = hot(App);

ReactDOM.render(<ReactHotApp />, document.getElementById('app'));
