import React from 'react';
import { createUseStyles } from 'react-jss';

import { flexRow, flexColumn } from 'assets/flexer';
import colors from 'assets/colors';

const useStyles = createUseStyles({
  footer: {
    ...flexRow('wrap', 'space-between', 'space-between'),
    marginTop: 150,
  },
  contact: {
    flexBasis: '50%',
    '& form': {
      ...flexColumn('nowrap', 'center', 'flex-start'),
    },
  },
  social: {
    flexBasis: '50%',
    '& div': {
      ...flexRow('nowrap', 'space-between', 'center'),
    },
  },
  nav: {
    ...flexRow('nowrap', 'space-between', 'flex-start'),
    width: '100%',
    marginTop: 40,

    '& p': {
      fontSize: '1.2rem',
      color: colors.grey,
    },
    '& p, li': {
      marginBottom: 9,
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <h2>Get the inside scoop on all things FitBish.</h2>
        <form>
          <label htmlFor="email">
            Enter your email address
            <input type="email" id="email" />
          </label>
          <button type="button">--</button>
        </form>
      </div>
      <div className={classes.social}>
        <h2>Follow us</h2>
        <div className={classes.socialNav}>
          <p>F</p>
          <p>T</p>
          <p>Tw</p>
          <p>Yt</p>
        </div>
      </div>
      <div className={classes.nav}>
        <div>
          <p>Support & community</p>
          <ul>
            <li>Product help</li>
            <li>Wear & care</li>
            <li>Community</li>
            <li>FitBish challenges</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <p>Legal</p>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Ad Choices</li>
          </ul>
        </div>
        <div>
          <p>Partners</p>
          <ul>
            <li>Retailers</li>
            <li>For Developers</li>
          </ul>
        </div>
        <div>
          <p>Company</p>
          <ul>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press relations</li>
          </ul>
        </div>
        <div>
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
    </footer>
  );
}

export default Footer;
