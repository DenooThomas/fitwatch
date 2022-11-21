import React from 'react';
import { createUseStyles } from 'react-jss';

import Header from 'layout/Header';
import Content from 'sections/Content';

const useStyles = createUseStyles({
  wrapper: {
    padding: '0 8%',
    margin: '0 auto',
    color: 'white',
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
