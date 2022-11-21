import React from 'react';
import { motion } from 'framer-motion';
import { createUseStyles } from 'react-jss';

import { defaultVariants, textContVariants, titleRightVariants } from 'assets/animations';
import { flexRow, flexColumn } from 'assets/flexer';
import colors from 'assets/colors';
import prod5 from 'assets/img/prod5.png';

const useStyles = createUseStyles({
  health: {
    ...flexRow('nowrap', 'flex-end', 'center'),
    position: 'relative',
  },
  wideCont: {
    ...flexRow('nowrap', 'center', 'center'),
    position: 'relative',
    width: '100%',
    height: 400,
    padding: 40,
    marginTop: 75,
    // backgroundColor: '#D4B0BF',
    background: 'linear-gradient(90deg, rgba(199,148,160,1) 0%, rgba(187,126,140,1) 48%)',
    boxShadow: '4px 4px 5px 0px rgba(0,0,0,0.25)',
    borderRadius: '1rem',

    '& *': {
      color: colors.white,
    },
  },
  img: {
    position: 'absolute',
    width: 200,
    left: 0,
    zIndex: 1,

  },
  metrics: {
    ...flexColumn('nowrap', 'space-around', 'center'),
    minWidth: 400,
    width: '40%',
    height: '100%',
    padding: 40,
    paddingBottom: 120,
    paddingLeft: 75,
    backgroundColor: colors.white,
    borderRadius: '1rem',
    boxShadow: '4px 4px 5px 0px rgba(0,0,0,0.25)',
    // background: 'linear-gradient(167deg, rgba(187,126,140,1) 10%, rgba(199,148,160,1) 71%)',
    position: 'relative',
    '& *': {
      color: colors.black,
      zIndex: 2,
    },
  },
  rangeCont: {
    ...flexRow('nowrap', 'flex-end', 'center'),
    marginBottom: 20,

    '& p': {
      padding: '0 5px',
    },
  },
  svgCont: {
    ...flexRow('nowrap', 'space-around', 'center'),
    width: '100%',

    '& svg': {
      overflow: 'visible',
      width: 25,
      height: 100,
    },
  },
  upsideDown: {
    transform: 'rotateZ(360deg)',
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
    ...flexRow('nowrap', 'center', 'center'),
    height: 50,
    display: 'block',
    fontSize: '1.15rem',
    fontWeight: 700,

    '& a': {
      height: '30px',
    },

    '& p': {
      verticalAlign: 'middle',
      display: 'inline-block',
      marginRight: 10,
    },

    '& svg': {
      height: 20,
      marginBottom: 0,
      display: 'inline-block',
    },
  },
});

const imgVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: -90,
    y: [-70, -73, -70],
    rotate: 32,
    transition: {
      type: 'spring',
      damping: 10,
      mass: 0.4,
      y: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 4,
        repeat: Infinity,
      },
    },
  },
};

const metricVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const lineDelay = 0.6;
const lineUpFull = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      type: 'spring',
      originX: 0,
      delay: lineDelay,
    },
  },
};

const lineUpMed = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 0.4,
    transition: {
      type: 'spring',
      originX: 0,
      delay: lineDelay,
    },
  },
};

const lineUpSmall = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 0.2,
    transition: {
      type: 'spring',
      originX: 0,
      delay: lineDelay,
    },
  },
};

const lineUpLarge = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 0.8,
    transition: {
      type: 'spring',
      originX: 0,
      damping: 15,
      delay: lineDelay,
    },
  },
};

const lineDownSmall = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    y: 100,
    rotateZ: 180,
  },
  visible: {
    opacity: 1,
    y: 100,
    pathLength: 0.2,
    rotateZ: 180,
    transition: {
      type: 'spring',
      originX: 0,
      delay: lineDelay,
    },
  },
};

const lineDownMed = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    y: 100,
    rotateZ: 180,
  },
  visible: {
    opacity: 1,
    y: 100,
    pathLength: 0.4,
    rotateZ: 180,
    transition: {
      type: 'spring',
      originX: 0,
      delay: lineDelay,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      type: 'spring',
      delay: 2,
    },
  },
};

function Health() {
  const classes = useStyles();
  return (
    <motion.section
      className={classes.health}
      variants={defaultVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.6 }}
    >

      <motion.div
        className={classes.wideCont}
        variants={defaultVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className={classes.metrics}
          variants={metricVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6, margin: '0px 200px -50px 0px' }}
        >
          <motion.img variants={imgVariants} className={classes.img} src={prod5} alt="pink watch" />
          <motion.h2 variants={defaultVariants}>Skin temperature</motion.h2>
          <motion.p variants={defaultVariants}>Degrees F*</motion.p>
          <motion.div className={classes.rangeCont} variants={defaultVariants}>
            <motion.p>Above below</motion.p>
            <motion.p>In personal range</motion.p>
          </motion.div>
          <motion.div className={classes.svgCont}>
            <motion.svg viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.green}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineUpMed}
              />
            </motion.svg>
            <motion.svg className={classes.upsideDown} viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.red}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineDownMed}
              />
            </motion.svg>
            <motion.svg className={classes.upsideDown} viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.red}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineDownSmall}
              />
            </motion.svg>
            <motion.svg viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.green}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineUpSmall}
              />
            </motion.svg>
            <motion.svg className={classes.upsideDown} viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.red}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineDownMed}
              />
            </motion.svg>
            <motion.svg viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.green}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineUpFull}
              />
            </motion.svg>
            <motion.svg viewBox="0 0 25 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line
                x1="12.5"
                y1="87.5"
                x2="12.5"
                y2="12.5"
                stroke={colors.green}
                strokeWidth="25"
                strokeLinecap="round"
                variants={lineUpLarge}
              />
            </motion.svg>

          </motion.div>
        </motion.div>

        <motion.div
          className={classes.textCont}
          variants={textContVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.h2 className={classes.title} variants={titleRightVariants}>
            Keep a closer eye on your health metrics
          </motion.h2>
          <motion.p className={classes.text} variants={defaultVariants}>
            Uncover important changes that impact your well-being—from skin temperature to SpO2.*
          </motion.p>
          <motion.div className={classes.link} variants={defaultVariants}>
            <p>Get started</p>
            <svg viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line variants={lineVariants} x1="3" y1="20" x2="47" y2="20" stroke={colors.white} stroke-width="6" stroke-linecap="round" />
              <motion.line variants={lineVariants} x1="36.2426" y1="3" x2="53.2132" y2="19.9706" stroke={colors.white} stroke-width="6" stroke-linecap="round" />
              <motion.line variants={lineVariants} x1="36" y1="37.5061" x2="52.9706" y2="20.5356" stroke={colors.white} stroke-width="6" stroke-linecap="round" />
            </svg>

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Health;
