import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Menu = () => {
    const navigate = useNavigate();
    const [enlarge, setEnlarge] = useState(false);
    const [hover, setHover] = useState([false, false, false, false]);
    const list = {
        default: { width: 60, height: 60 },
        bigger: { width: 70, height: 70 },
        hidden: { opacity: 0 },
        shown: { opacity: 1, width: 40, height: 40 },
        hover: { width: 60, height: 60 },
        untouched: { width: 'inherit', height: 'inherit' },
    }


    const handleEnter = (buttonIndex: number, linkTo: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const states = [false, false, false, false];
        states[buttonIndex] = true;
        setHover(states);
        const section = document.getElementById(linkTo);
        window.history.replaceState('', '', `/home#${linkTo}`);
        section && section.scrollIntoView({ behavior: 'smooth' });
    }

    const animateMenuDrag = (e: MouseEvent | TouchEvent | PointerEvent, enlarge: boolean) => {
        setEnlarge(enlarge);
        if (!enlarge) {
            setHover([false, false, false, false]);
        }
        e.stopPropagation();
    }

    return (
        <div className="fixed top-0 right-0 m-10 z-50 text-xs" style={{ direction: 'rtl' }}>
            <div className="relative">
                <motion.button
                    variants={list}
                    animate={enlarge ? 'bigger' : 'default'}
                    onPanStart={(e, pointInfo) => animateMenuDrag(e, true)}
                    onPanEnd={(e, pointInfo) => animateMenuDrag(e, false)}
                    className="absolute rounded-full bg-slate-400 cursor-default z-50 justify-center"
                    style={{ backgroundImage: 'url(images/menu-button.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                ></motion.button>
                <motion.div
                    style={{ transform: 'translate(-80px, 0px)' }}
                    onMouseEnter={(event) => handleEnter(0, 'main-wrapper', event)}
                    variants={list}
                    animate={enlarge ? hover[0] ? 'hover' : 'shown' : 'hidden'}
                    className="flex absolute rounded-full bg-slate-500 items-center text-center"
                >About Me</motion.div>
                <motion.div
                    style={{ transform: 'translate(-77.94px, 45px)' }}
                    onMouseEnter={(event) => handleEnter(1, 'avatar', event)}
                    variants={list}
                    animate={enlarge ? hover[1] ? 'hover' : 'shown' : 'hidden'}
                    className="flex absolute rounded-full bg-slate-500 items-center text-center"
                >Skills & Experience</motion.div>
                <motion.div
                    style={{ transform: 'translate(-45px, 77.94px)' }}
                    onMouseEnter={(event) => handleEnter(2, 'intro-section', event)}
                    variants={list}
                    animate={enlarge ? hover[2] ? 'hover' : 'shown' : 'hidden'}
                    className="flex absolute rounded-full bg-slate-500 items-center text-center"
                >Blog</motion.div>
                <motion.div
                    style={{ transform: 'translate(0px, 80px)' }}
                    onMouseEnter={(event) => handleEnter(3, 'personal-info', event)}
                    variants={list}
                    animate={enlarge ? hover[3] ? 'hover' : 'shown' : 'hidden'}
                    className="flex absolute rounded-full bg-slate-500 items-center text-center"
                >Contact</motion.div>
            </div>
        </div>
    );
}

export default Menu;