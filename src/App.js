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
        <h2 className={styles.title}>Thank you for using <span className={styles.bold}>RWEB</span>!</h2>
        <p className={styles.copyright}>by Serhiy Boreyko 2017 &#xa9;</p>
      </div>
    );
  }
}

export default App;
