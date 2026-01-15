import { type FC } from "react";
import "./link.module.scss";

interface LinkProps {
    text: string;
    onClick?: () => void;
}

const Link: FC<LinkProps> = ({ text, onClick }) => {
    return <h2 className="link" onClick={onClick}>{text}</h2>
}

export default Link;
