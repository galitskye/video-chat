import React, { PureComponent } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '@theme';
import Input from "@atoms/input";

class App extends PureComponent {
    public render(): React.ReactNode {
        return (
            <ThemeProvider theme={ theme }>
                <Input type='text' />
            </ThemeProvider>
        );
    }
}

export default App;
