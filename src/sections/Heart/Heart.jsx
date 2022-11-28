import React from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import {
  defaultVariants, textContVariants, titleLeftVariants, titleRightVariants,
} from 'assets/animations';
import { flexRow, flexColumn } from 'assets/flexer';
import colors from 'assets/colors';
import phoneWatch from 'assets/img/phone_watch.png';

const useStyles = createUseStyles({
  heart: {
    ...flexRow('wrap', 'flex-start', 'center'),
  },
  textCont: {
    width: '50%',
    paddingLeft: 50,
    zIndex: 3,
    '& *': {
      marginBottom: 20,
    },
  },
  title: {
    fontSize: '2.2rem',
  },
  text: {
    fontSize: '1.15rem',
  },
  link: {
    display: 'block',
    fontSize: '1.15rem',
    fontWeight: 700,
  },
  wideCont: {
    ...flexRow('nowrap', 'center', 'center'),
    position: 'relative',
    width: '100%',
    height: 400,
    padding: 40,
    marginTop: 75,
    background: 'linear-gradient(24deg, rgba(78,94,126,1) 5%, rgba(65,79,106,1) 65%)',
    boxShadow: '4px 4px 5px 0px rgba(0,0,0,0.25)',
    borderRadius: '1rem',
    zIndex: 10,
  },
  img: {
    position: 'absolute',
    height: '300px',
    top: -300,
    right: 100,
    zIndex: 1,
  },
  scoreCont: {
    ...flexRow('nowrap', 'center', 'center'),
    width: '40%',
    minWidth: 350,
    height: '100%',
    backgroundColor: colors.white,
    boxShadow: '4px 4px 5px 0px rgba(0,0,0,0.25)',
    borderRadius: '1rem',
  },
  leftCont: {
    ...flexColumn('nowrap', 'space-around', 'center'),
    width: '45%',
    height: '100%',

    '& span': {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      fontWeight: 700,
    },
  },
  circle: {
    ...flexRow('nowrap', 'center', 'center'),
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: colors.white,

    '& svg': {
      width: '100px',
      height: '100px',
      overflow: 'visible',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    },
  },

  rightCont: {
    ...flexColumn('nowrap', 'center', 'center'),
    width: '55%',
    height: '100%',
    '& div': {
      ...flexColumn('nowrap', 'center', 'center'),
    },
    '& span': {
      display: 'block',
      textAlign: 'center',
      marginBottom: 10,
    },
    '& button': {
      backgroundColor: colors.yellow,
      borderRadius: '1rem',
      border: 'none',
      padding: '10px 15px',
    },
  },
  white: {
    color: colors.white,
  },
  bold: {
    fontWeight: 700,
  },
});

const svgCircleVariants = {
  hidden: {
    pathLength: 0,
    rotate: -90,
  },
  visible: {
    pathLength: 0.71,
    rotate: -90,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const svgCircleFillerVariants = {
  hidden: {
    pathLength: 0,
    rotate: -90,
  },
  visible: {
    pathLength: 1,
    rotate: -90,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

function Heart() {
  const classes = useStyles();
  return (
    <motion.section
      id="heart"
      className={classes.heart}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={classes.textCont}
        variants={textContVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h2 className={classes.title} variants={titleLeftVariants}>
          Get to know your heart on another level
        </motion.h2>
        <motion.p className={classes.text} variants={defaultVariants}>
          Your heart is a key indicator of your overall health and
          well-being—discover tools designed to help you understand it.*
        </motion.p>
        <motion.a href="/" className={classes.link} variants={defaultVariants}>Check out the ECG app --</motion.a>
        <motion.a href="/" className={classes.link} variants={defaultVariants}>Explore heart rate tools --</motion.a>
      </motion.div>
      <motion.div
        className={classes.wideCont}
        variants={defaultVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.img
          className={classes.img}
          src={phoneWatch}
          alt="phone and watch"
          variants={defaultVariants}
          viewport={{ once: true, amount: 0.2 }}
        />
        <div className={classes.scoreCont}>
          <div className={classes.leftCont}>
            <span>Today&apos;s score</span>
            <div className={classes.circle}>
              <svg viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                  cx="98"
                  cy="98"
                  r="96"
                  stroke="#E4CCE6"
                  strokeWidth="20"
                  variants={svgCircleFillerVariants}
                />
              </svg>
              <svg viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                  cx="98"
                  cy="98"
                  r="96"
                  stroke="#A355AA"
                  strokeWidth="20"
                  variants={svgCircleVariants}
                />
              </svg>

              <motion.p
                variants={defaultVariants}
                initial="hidden"
                whileInView="visibleDelayed"
                viewport={{ once: true, amount: 0 }}
              >
                71

              </motion.p>
            </div>
            <span>Reflections</span>
            <span>Calm</span>
          </div>
          <div className={classes.rightCont}>
            <div>
              <span className={classes.bold}>Full breakdown</span>
              <span>Get access to what is affecting your score</span>
              <button type="button">See details</button>
            </div>
          </div>
        </div>
        <motion.div
          className={`${classes.textCont} ${classes.white}`}
          variants={textContVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className={`${classes.title} ${classes.white}`} variants={titleRightVariants}>Manage your body&apos;s response to stress</motion.h2>
          <motion.p className={`${classes.text} ${classes.white}`} variants={defaultVariants}>Learn how an on-wrist EDA sensor and a touch of the palm on Fitbit Sense can help you understand your stress.</motion.p>
          <motion.a href="/" className={`${classes.link} ${classes.white}`} variants={defaultVariants}>See how it works --</motion.a>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}

export default Heart;
