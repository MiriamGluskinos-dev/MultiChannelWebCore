import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./link.module.scss";
const Link = ({ text, onClick }) => {
    return _jsx("h2", { className: styles.link, onClick: onClick, children: text });
};
export default Link;
