import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
    height: 1610vh;
`;

export const Section = styled(motion.section)`
    .first {
        background-color: red;
        overflow: hidden;
        .offset {
        }
        .a {
            background: #f5f1ea;
        }
        .b {
            background: #582534;
        }
        .c {
            background: #0a7397;
        }
    }
    .second {
        background-color: green;
    }
    .third {
        background-color: yellow;
    }
    .fourth {
        background-color: blue;
    }
`;

export const Sticky = styled(motion.div)`
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
`;
