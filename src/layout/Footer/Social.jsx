/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { flexRow } from 'assets/flexer';
import colors from 'assets/colors';

const useStyles = createUseStyles({
  halfCont: {
    flexBasis: '45%',
    height: 200,
    '& h2': {
      marginBottom: '1rem',
    },
  },
  social: {
    '& div': {
      ...flexRow('nowrap', 'space-between', 'center'),
    },
  },
  icons: {
    '& a': {
      ...flexRow('nowrap', 'center', 'center'),
      width: 30,
      height: 30,
      padding: 25,
      backgroundColor: colors.blue,
      borderRadius: '50%',
      '& span': {
        display: 'inline-block',
        color: colors.white,
      },
    },
  },
});

function Social() {
  const classes = useStyles();
  return (
    <div className={`${classes.halfCont} ${classes.social}`}>
      <h2>Follow us</h2>
      <div className={classes.icons}>
        <a href="#header"><span>F</span></a>
        <a href="#header"><span>T</span></a>
        <a href="#header"><span>Tw</span></a>
        <a href="#header"><span>Yt</span></a>
      </div>
    </div>
  );
}

export default Social;
