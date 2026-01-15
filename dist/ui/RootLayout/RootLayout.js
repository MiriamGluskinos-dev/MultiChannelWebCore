import { jsx as _jsx } from "react/jsx-runtime";
import './RootLayout.scss';
const RootLayout = (props) => {
    return (_jsx("div", { className: 'rootLayout', children: props.children }));
};
export default RootLayout;
