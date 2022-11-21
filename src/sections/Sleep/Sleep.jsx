import React from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import { flexRow } from 'assets/flexer';
import colors from 'assets/colors';
import {
  defaultVariants, textContVariants, titleLeftVariants, titleRightVariants,
} from 'assets/animations';
import phoneWatch from 'assets/img/phone_watch2.png';
import prod3 from 'assets/img/prod3.png';
import prod4 from 'assets/img/prod4.png';

const useStyles = createUseStyles({
  sleep: {
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
    ...flexRow('nowrap', 'flex-end', 'center'),
    position: 'relative',
    width: '100%',
    height: 400,
    padding: 40,
    marginTop: 75,
    // backgroundColor: '#484B54',
    background: 'linear-gradient(149deg, rgba(72,75,84,1) 26%, rgba(84,88,99,1) 79%)',
    boxShadow: '4px 4px 5px 0px rgba(0,0,0,0.25)',
    borderRadius: '1rem',
  },
  wideContImg: {
    position: 'absolute',
  },
  topRight: {
    maxHeight: '300px',
    top: -300,
    right: 100,
  },
  topLeft: {
    maxHeight: '320px',
    left: 15,
    top: -40,
  },
  bottomLeft: {
    maxHeight: '280px',
    bottom: -50,
    left: 160,
    transform: 'rotate(-15deg)',
  },
  scoreCont: {
    width: 200,
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: '1rem',
  },
  white: {
    color: colors.white,
  },
});

const watchTop = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    rotate: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: [0, 3, 0],
    rotate: 25,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.4,
      y: {
        type: 'tween',
        ease: 'easeInOut',
        delay: 0.2,
        duration: 4,
        repeat: Infinity,
      },
    },
  },
};

const watchBottom = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    y: '50vh',
    rotate: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: [0, 3, 0],
    rotate: -15,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.4,
      y: {
        type: 'tween',
        ease: 'easeInOut',
        delay: 1,
        duration: 4,
        repeat: Infinity,
      },
    },
  },
};

function Sleep() {
  const classes = useStyles();
  return (
    <section id="sleep" className={classes.sleep}>
      <motion.div
        className={classes.textCont}
        variants={textContVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h2 className={classes.title} variants={titleLeftVariants}>
          See what’s going on behind the ZZZs
        </motion.h2>
        <motion.p className={classes.text} variants={defaultVariants}>
          Make the most of your day by improving your night with these
          advanced sleep tracking tools.
        </motion.p>
        <motion.a href="/" className={classes.link} variants={defaultVariants}>Learn more --</motion.a>
      </motion.div>
      <motion.div
        className={classes.wideCont}
        variants={defaultVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.img
          className={`${classes.wideContImg} ${classes.topRight}`}
          src={phoneWatch}
          alt="phone and watch"
          variants={defaultVariants}
        />
        <motion.img
          className={`${classes.wideContImg} ${classes.topLeft}`}
          src={prod3}
          alt="watch"
          variants={watchTop}
        />
        <motion.img
          className={`${classes.wideContImg} ${classes.bottomLeft}`}
          src={prod4}
          alt="watch"
          variants={watchBottom}
        />
        <motion.div
          className={`${classes.textCont} ${classes.white}`}
          variants={textContVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className={`${classes.title} ${classes.white}`} variants={titleRightVariants}>Get even more efficient with your workouts</motion.h2>
          <motion.p className={`${classes.text} ${classes.white}`} variants={defaultVariants}>Understand the impact of your efforts and learn how to optimize every moment with Active Zone Minutes.</motion.p>
          <motion.a href="/" className={`${classes.link} ${classes.white}`} variants={defaultVariants}>Learn how --</motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sleep;
