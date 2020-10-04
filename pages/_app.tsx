import { createGlobalStyle } from "styled-components";
import App from "next/app";
import { Fragment } from "react";

const GlobalStyle = createGlobalStyle`


*{
    margin:0;
    padding:0;
}

`;

class MyApp extends App {
  render() {
    const { Component, ...pageProps } = this.props;

    return (
      <Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default MyApp;
