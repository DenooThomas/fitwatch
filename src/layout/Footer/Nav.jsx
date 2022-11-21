/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { flexRow } from 'assets/flexer';
import colors from 'assets/colors';

const useStyles = createUseStyles({
  nav: {
    ...flexRow('nowrap', 'space-between', 'flex-start'),
    width: '100%',
    marginTop: 70,
  },
  category: {
    width: 125,
    '& p, li': {
      marginBottom: '1rem',
    },
    '& p': {
      fontSize: '1.1rem',
      color: colors.grey,
    },
    '& li': {
      fontSize: '0.9rem',
    },

  },
});

function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <div className={classes.category}>
        <p>Support & community</p>
        <ul>
          <li>Product help</li>
          <li>Wear & care</li>
          <li>Community</li>
          <li>FitBish challenges</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={classes.category}>
        <p>Legal</p>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Ad Choices</li>
        </ul>
      </div>
      <div className={classes.category}>
        <p>Partners</p>
        <ul>
          <li>Retailers</li>
          <li>For Developers</li>
        </ul>
      </div>
      <div className={classes.category}>
        <p>Company</p>
        <ul>
          <li>Contact us</li>
          <li>Careers</li>
          <li>Sustainability</li>
          <li>Press relations</li>
        </ul>
      </div>
      <div className={classes.category}>
        <p>Health solutions</p>
        <ul>
          <li>Employers</li>
          <li>Health plans</li>
          <li>Workforce health</li>
          <li>Researchers</li>
          <li>Partners</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
