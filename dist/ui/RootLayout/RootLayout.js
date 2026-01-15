import { jsx as _jsx } from "react/jsx-runtime";
import './RootLayout.module.scss';
const RootLayout = (props) => {
    return (_jsx("div", { className: 'root-layout', children: props.children }));
};
export default RootLayout;
