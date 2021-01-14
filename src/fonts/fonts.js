import { createGlobalStyle } from 'styled-components';

import davidLibreWoff from './david-libre-woff';
import davidLibreWoff2 from './david-libre-woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'DavidLibre';
        src: local('davidLibre'), local('davidLibre'),
        url(${davidLibreWoff2}) format('woff2'),
        url(${davidLibreWoff}) format('woff');
        font-weight: 400;
        font-style: normal
    };
`;
