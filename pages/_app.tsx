import { createGlobalStyle } from "styled-components";
import App from "next/app";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./../store/index";

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
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
