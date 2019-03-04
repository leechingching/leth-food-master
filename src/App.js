import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cuisines from './components/Cuisines/Cuisines';
import styles from './styles/app.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Cuisines />
      </div>
    );
  }
}

export default App;
