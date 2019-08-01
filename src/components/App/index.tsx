import React, { PureComponent } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Title } from './app-styles';

class App extends PureComponent {
    public render(): React.ReactNode {
        return (
            <ThemeProvider theme={ theme }>
                <Title>Hello World!</Title>
            </ThemeProvider>
        );
    }
}

export default App;
