import { Variants, easeOut } from "framer-motion";

export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

export const fadeIn = (delay = 0, duration = 0.6): Variants => ({
    hidden: {
        opacity: 0,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        filter: "blur(0)",
        transition: {
            delay,
            duration,
            ease: easeOut, // FIXED
        },
    },
});

export const fadeInUp = (delay = 0, duration = 0.6): Variants => ({
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        transition: {
            delay,
            duration,
            ease: easeOut, // FIXED
        },
    },
});

export const fadeInDown = (delay = 0, duration = 0.6): Variants => ({
    hidden: {
        opacity: 0,
        y: -30,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        transition: {
            delay,
            duration,
            ease: easeOut,
        },
    },
});

export const fadeInLeft = (delay = 0, duration = 0.6): Variants => ({
    hidden: {
        opacity: 0,
        x: -40,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        x: 0,
        filter: "blur(0)",
        transition: {
            delay,
            duration,
            ease: easeOut,
        },
    },
});

export const fadeInRight = (delay = 0, duration = 0.6): Variants => ({
    hidden: {
        opacity: 0,
        x: 40,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        x: 0,
        filter: "blur(0)",
        transition: {
            delay,
            duration,
            ease: easeOut,
        },
    },
});

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.85,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: easeOut,
        },
    },
};
