/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { flexRow } from 'assets/flexer';
import Contact from './Contact';
import Social from './Social';
import Nav from './Nav';

const useStyles = createUseStyles({
  footer: {
    ...flexRow('wrap', 'space-between', 'space-between'),
    marginTop: 150,
  },
  halfContWrapper: {
    ...flexRow('nowrap', 'space-between', 'center'),
    width: '100%',
  },
  halfCont: {
    flexBasis: '50%',
    height: 200,
    '& h2': {
      marginBottom: '1rem',
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <footer id="footer" className={classes.footer}>
      <div className={classes.halfContWrapper}>
        <Contact />
        <Social />
      </div>
      <Nav />
    </footer>
  );
}

export default Footer;
