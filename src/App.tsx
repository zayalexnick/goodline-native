import * as React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import RootStore from '~/mobx/RootStore';
import Navigation from '~/Navigation';

import theme from '~/theme';

export default () => (
    <Provider { ...RootStore }>
        <ThemeProvider theme={theme}>
            <Navigation />
        </ThemeProvider>
    </Provider>
);