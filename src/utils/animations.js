// Framer Motion animation variants

// Fade in animation
export const fadeIn = (direction = 'up', delay = 0) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

// Slide in animation
export const slideIn = (direction = 'left', delay = 0) => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.2,
                delay: delay,
            },
        },
    };
};

// Stagger container
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
};

// Scale animation
export const scaleIn = (delay = 0) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.8,
                delay: delay,
            },
        },
    };
};

// Zoom in animation
export const zoomIn = (delay = 0) => {
    return {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.6,
                delay: delay,
                ease: 'easeOut',
            },
        },
    };
};

// Text reveal animation (for typewriter effect)
export const textVariant = (delay = 0) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

// Hover animation for cards
export const hoverCard = {
    rest: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.05,
        y: -10,
        transition: {
            duration: 0.3,
            type: 'tween',
            ease: 'easeInOut',
        },
    },
};

// Floating animation
export const floatAnimation = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Pulse animation
export const pulseAnimation = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Rotate animation
export const rotateAnimation = {
    animate: {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};

// Navbar animation
export const navbarVariants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
};

// Mobile menu animation
export const mobileMenuVariants = {
    closed: {
        x: '100%',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
    open: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

// Counter animation
export const counterAnimation = (target, duration = 2) => {
    return {
        initial: { value: 0 },
        animate: { value: target },
        transition: {
            duration: duration,
            ease: 'easeOut',
        },
    };
};
