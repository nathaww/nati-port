"use client"
import { LayoutGroup, motion } from "motion/react"
import TextRotate from "./fancy/text/text-rotate"

const HeroCard = () => {
    return (
        <LayoutGroup>
            <motion.div className="flex whitespace-pre" layout>
                <TextRotate
                    texts={[
                        "Natnael Endale",
                        "Product Manager",
                        "AI & Data Systems",
                        "Team Builder",
                    ]}
                    mainClassName="text-black font-[Arial] px-2 sm:px-2 md:px-3 bg-white absolute top-1/2 -translate-y-1/2 -rotate-12 -right-1/2  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-full"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </motion.div>
        </LayoutGroup>
    )
}

export default HeroCard