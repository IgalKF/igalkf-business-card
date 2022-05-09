import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedText from "react-animated-text-content";

type PersonalTitlesProps = {
    personalTitles: string[];
}

const PersonalTitles = ({ personalTitles }: PersonalTitlesProps) => {
    const [title, setTitle] = useState(personalTitles[0]);
    useEffect(() => {
        const currentTitleIndex = personalTitles.lastIndexOf(title) == personalTitles.length - 1
            ? 0
            : personalTitles.lastIndexOf(title) + 1;

        setTimeout(() => {
            setTitle(() => personalTitles[currentTitleIndex]);
        }, 4987)

    }, [title])

    return (
        <div className="personalTitles dark:text-slate-400">
            <motion.div
                animate={{ opacity: [1, 0, 1], height: 0, }}
                transition={{ 
                    ease: "easeInOut",
                    duration: 1.013,
                    delay: 4,
                    times: [0, 0.99, 1],
                    repeat: 100,
                    repeatDelay: 4 }}

            >
                <AnimatedText
                    type='words'
                    interval={0.14}
                    duration={1}
                    animation={{
                        y: '100px',
                        ease: 'ease-in-out',
                    }}
                >
                    {title}
                </AnimatedText>
            </motion.div>
        </div>
    )
}

export default PersonalTitles;