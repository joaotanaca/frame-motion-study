import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
    height: 1610vh;
    padding: 0 30px;
`;

export const Section = styled(motion.section)`
    .first {
        background-color: red;
        overflow: hidden;
        .offset {
            width: 100%;
            height: 100%;
        }
        .a {
            background: #f5f1ea;
            height: 100%;
            display: flex;
            align-items: flex-end;
            .left-side {
                width: 50%;
                height: 100%;
                background-color: #7dbb91;
            }
            .right-side {
                width: 50%;
                height: 100%;
                .right-image {
                    width: 100%;
                    height: 100%;
                    background-color: #7dbb91;
                }
            }
        }
        .b {
            background: #582534;
            width: 100%;
            height: 100%;
        }
        .c {
            background: #0a7397;
            width: 100%;
            height: 100%;
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
