import { type FC } from "react";
import styles from "./link.module.scss";

interface LinkProps {
    text: string;
    onClick?: () => void;
}

const Link: FC<LinkProps> = ({ text, onClick }) => {
    return <h2 className={styles.link} onClick={onClick}>{text}</h2>
}

export default Link;
