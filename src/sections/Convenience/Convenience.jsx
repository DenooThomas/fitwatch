import React from 'react';
import { createUseStyles } from 'react-jss';

import { flexRow } from 'assets/flexer';
import colors from 'assets/colors';

const useStyles = createUseStyles({
  convenience: {
    ...flexRow('wrap', 'center', 'center'),
  },
  title: {
    width: '100%',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  horizontalScroll: {
    ...flexRow('nowrap', 'flex-start', 'center'),
    margin: '1rem',
    paddingBottom: '1.5rem',
    flex: '0 0 80%',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      width: 5,
      height: '0.6rem',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      outline: `1px solid ${colors.blue}`,
      backgroundColor: colors.blue,
      borderRadius: '1rem',
    },
  },
  item: {
    flex: '0 0 250px',
    height: 300,
    marginRight: '2rem',
    border: '1px solid black',
    backgroundColor: colors.blue,
    borderRadius: '0.3rem',
    '&:last-of-type': {
      marginRight: 0,
    },
  },
});

function Convenience() {
  const classes = useStyles();
  return (
    <section className={classes.convenience}>
      <h1 className={classes.title}>Tap into convenience on your wrist</h1>
      <div className={classes.horizontalScroll}>
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
        <div className={classes.item} />
      </div>
    </section>
  );
}

export default Convenience;
