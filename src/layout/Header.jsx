import React from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import { flexColumn, flexRow } from 'assets/flexer';
import colors from 'assets/colors';
import prod0 from 'assets/img/prod0_f.png';
import prod1 from 'assets/img/prod1_f.png';
import prod2 from 'assets/img/prod2_f.png';
import { defaultVariants } from 'assets/animations';

const useStyles = createUseStyles({
  header: {
    width: '100%',
    position: 'relative',
    backgroundColor: colors.white,
  },
  nav: {
    ...flexRow('nowrap', 'space-between', 'center'),
    width: '100%',
    padding: '25px 0 40px',
    position: 'absolute',
    top: 0,
    zIndex: 4,
  },
  logo: {
    fontWeight: '400',
    fontSize: '1.8rem',
    color: colors.black,
  },
  navLink: {
    color: colors.black,
    marginLeft: 20,
  },
  banner: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    color: colors.black,
  },
  content: {
    ...flexRow('wrap', 'flex-start', 'center'),
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: 100,
    left: 0,
  },
  textCont: {
    ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    width: '50%',
    '& h1, span': {
      width: '100%',
      marginBottom: 20,
    },
    '& h1': {
      fontSize: '3rem',
    },
    '& span': {
      fontSize: '1.4rem',
    },
  },
  link: {
    fontWeight: 700,
  },
  bannerImg: {
    position: 'absolute',
    maxHeight: 300,
    top: 165,
    right: 175,
  },
  imgLeft: {
    zIndex: 3,

  },
  imgMiddle: {
    zIndex: 2,
  },
  imgRight: {
    zIndex: 1,

  },
});

const bannerVariants = {
  hidden: {

  },
  visible: {

  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visibleLeft: {
    opacity: 1,
    x: -175,
    y: -20,
    transition: {
      type: 'spring',
      delay: 0.5,
      damping: 14,
      mass: 0.5,
    },
  },
  visibleMiddle: {
    opacity: 1,
    x: 0,
    y: -20,
    transition: {
      type: 'spring',
      delay: 0.75,
      damping: 10,
      mass: 0.5,
    },
  },
  visibleRight: {
    opacity: 1,
    x: 175,
    y: -20,
    transition: {
      type: 'spring',
      delay: 1,
      damping: 14,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      damping: 6,
    },
  },
};

const textContVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const bannerTitleVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 15,
    },
  },
};

const bannerSpanVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <motion.nav
        className={classes.nav}
        variants={defaultVariants}
        initial="hidden"
        animate="visibleDelayed"
      >
        <h1 className={classes.logo}>FitBish</h1>
        <div>
          <a href="#heart" className={classes.navLink}>Heart</a>
          <a href="#sleep" className={classes.navLink}>Sleep</a>
        </div>
      </motion.nav>
      <motion.div
        className={classes.banner}
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={classes.content}>
          <motion.div className={classes.textCont} variants={textContVariants}>
            <motion.h1
              className={classes.title}
              variants={bannerTitleVariants}
            >
              Smart technology to help you transform your health
            </motion.h1>
            <motion.span variants={bannerSpanVariants}>
              Our advanced sensors and intuitive experiences are
              designed to help you live a healthier, more active life.
            </motion.span>
            <motion.span
              className={classes.link}
              variants={bannerSpanVariants}
            >
              Shop now --

            </motion.span>
          </motion.div>
          <motion.img
            src={prod0}
            alt="fit watch"
            className={`${classes.bannerImg} ${classes.imgLeft}`}
            variants={imgVariants}
            initial="hidden"
            animate="visibleLeft"
            whileHover="hover"
          />
          <motion.img
            src={prod1}
            alt="fit watch"
            className={`${classes.bannerImg} ${classes.imgMiddle}`}
            variants={imgVariants}
            initial="hidden"
            animate="visibleMiddle"
            whileHover="hover"
          />
          <motion.img
            src={prod2}
            alt="fit watch"
            className={`${classes.bannerImg} ${classes.imgRight}`}
            variants={imgVariants}
            initial="hidden"
            animate="visibleRight"
            whileHover="hover"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Banner;
