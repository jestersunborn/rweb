import React, { Component } from 'react';

import styles from './app.pcss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <h2 className={styles.title}>RWEB</h2>
        <p className={styles.copyright}>by Serhiy Boreyko 2018 &#xa9;</p>
      </div>
    );
  }
}

export default App;
