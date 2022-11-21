import React from 'react';
import { createUseStyles } from 'react-jss';

import { flexRow } from 'assets/flexer';

const useStyles = createUseStyles({
  convenience: {
    ...flexRow('wrap', 'center', 'center'),
  },
  title: {
    width: '100%',
    fontSize: '2rem',
    textAlign: 'center',
  },
  horizontalScroll: {
    ...flexRow('nowrap', 'space-around', 'center'),
    width: '100%',
    '& div': {
      width: 200,
      height: 200,
      border: '1px solid black',
    },
  },
});

function Convenience() {
  const classes = useStyles();
  return (
    <section className={classes.convenience}>
      <h1 className={classes.title}>Tap into convenience on your wrist</h1>
      <div className={classes.horizontalScroll}>
        <div>TESTSCROLL</div>
        <div>TESTSCROLL</div>
        <div>TESTSCROLL</div>
        <div>TESTSCROLL</div>
        <div>TESTSCROLL</div>
      </div>
    </section>
  );
}

export default Convenience;
