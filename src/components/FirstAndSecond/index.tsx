import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Sticky } from "../../styles";

function FirstAndSecond() {
    const { scrollYProgress } = useViewportScroll();
    const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
    const frameScale = useTransform(
        scrollYProgress,
        [0.558, 0.627],
        [0.551, 0.8],
    );
    const firstScale = useTransform(
        scrollYProgress,
        [0.198, 0.264, 0.558, 0.627],
        [1, 0.511, 0.511, 1],
    );
    return (
        <Sticky className="second">
            <Sticky className="first" style={{ scale: firstScale }} />
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100vh",
                    borderRadius: "4px",
                    border: "1px solid #fff",
                    opacity: frameOpacity,
                    scale: frameScale,
                }}
            ></motion.div>
        </Sticky>
    );
}

export default FirstAndSecond;
