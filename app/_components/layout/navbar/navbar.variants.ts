export const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

export const childrenVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100,
      },
    },
  },
};

export const firstLine = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const secondLine = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1.5,
      delay: 1.8,
    },
  },
};

export const thirdLine = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
      delay: 4.8,
    },
  },
};

export const borderLeft = {
  hidden: {
    height: "0px",
  },
  show: {
    height: "100%",
    transition: {
      duration: 0.5,
      delay: 3.3,
    },
  },
};

export const growWidth = {
  hidden: {
    width: "0px",
  },
  show: {
    width: "100%",
    transition: {
      duration: 0.5,
      delay: 3.8,
    },
  },
};

export const borderRight = {
  hidden: {
    height: "0px",
  },
  show: {
    height: "100%",
    transition: {
      duration: 0.5,
      delay: 4.3,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 4.3,
    },
  },
};
