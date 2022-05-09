import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedText from "react-animated-text-content";

const IntroductionSection = () => {
    const [steadyText, setSteadyText] = useState(false);

    setTimeout(() => {
        setSteadyText(true);
    }, 5000)

    const hiText = 'Hi! I\'m Igal.';
    const introText = 'I\'m a proffesional developer, providing business solutions and end-to-end best practices.';
    const secondParagraph = `By providing an infinite amount of possibilities. In an unlimited progressive world - Software engineering takes a special place in my life and interests.`;
    return (
        <motion.div id='intro-section' transition={{ ease: 'easeInOut', duration: 3, delay: 2 }}
            className='section dark:bg-slate-700 mr-16 ml-16 rounded drop-shadow-xl mt-32 mb-32 text-left p-10'>
            {
                steadyText ? hiText : <AnimatedText
                    type='chars'
                    interval={0.04}
                    duration={0.8}
                    animation={{
                        ease: 'bounce',
                        scale: 0.97,
                    }}
                >
                    {hiText}
                </AnimatedText>
            }
            {steadyText ? <br /> : null}
            {
                steadyText ? introText : <AnimatedText
                    type='chars'
                    interval={0.04}
                    duration={0.8}
                    animation={{
                        ease: 'bounce',
                        scale: 0.97,
                    }}
                >
                    {introText}
                </AnimatedText>
            }
            {<div><br /><br /></div>}
            {
                steadyText ? <AnimatedText
                    type='chars'
                    interval={0.04}
                    duration={0.8}
                    animation={{
                        ease: 'bounce',
                        scale: 0.97,
                    }}
                >
                    {secondParagraph}
                </AnimatedText>
                    : <p className="text-transparent">{secondParagraph}</p>
            }
        </motion.div>
    )
}

export default IntroductionSection;