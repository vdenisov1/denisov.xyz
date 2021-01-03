import React from 'react';
import './App.scss';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';


export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="v-app">
          <Header />
          <Body />
          <Footer />
        </div>
      </>
    );
  }
}
