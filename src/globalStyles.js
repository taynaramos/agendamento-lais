import { createGlobalStyle } from 'styled-components'

import PoppinsBlack from 'assets/fonts/Poppins-Black.ttf'
import PoppinsBold from 'assets/fonts/Poppins-Bold.ttf'
import PoppinsLight from 'assets/fonts/Poppins-Light.ttf'
import PoppinsMedium from 'assets/fonts/Poppins-Medium.ttf'
import PoppinsRegular from 'assets/fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from 'assets/fonts/Poppins-SemiBold.ttf'
import PoppinsThin from 'assets/fonts/Poppins-Thin.ttf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'PoppinsBlack';
    src: url(${PoppinsBlack}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsLight';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsMedium';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsRegular';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsSemiBold';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PoppinsThin';
    src: url(${PoppinsThin}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    line-height: 1.6;
    max-width:100vw;
    height: 100%;
    padding: 0;
    margin: 0;
    color: #4A4A4A;
    font-family: 'PoppinsLight';
  }

  a {
    text-decoration: none;
    color: #4A4A4A;
  }

`