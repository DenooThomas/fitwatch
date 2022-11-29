/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { flexColumn } from 'assets/flexer';
import colors from 'assets/colors';

const useStyles = createUseStyles({
  halfCont: {
    flexBasis: '45%',
    height: 200,
    '& h2': {
      marginBottom: '1rem',
    },
  },
  contact: {
    '& form': {
      ...flexColumn('nowrap', 'center', 'flex-start'),
      '& *': {
        marginBottom: '1rem',
      },
      '& label': {
        fontSize: '1.4rem',
      },
      '& input': {
        border: 'none',
        backgroundColor: 'inherit',
        borderBottom: `1px solid ${colors.blue}`,
        fontSize: '1rem',
        padding: 5,
        '&:focus': {
          outline: 'none',
        },
      },
      '& button': {
        border: 'none',
        padding: '1rem',
        fontSize: '1rem',
        backgroundColor: colors.blue,
        color: colors.white,
        borderRadius: '0.5rem',
        cursor: 'pointer',
      },
    },
  },
});

function Contact() {
  const classes = useStyles();
  return (
    <div className={`${classes.halfCont} ${classes.contact}`}>
      <h2>Get the inside scoop on all things FitWatch.</h2>
      <form>
        <label htmlFor="email">Enter your email address</label>
        <input type="email" id="email" />
        <button type="button">Subscribe</button>
      </form>
    </div>
  );
}

export default Contact;
