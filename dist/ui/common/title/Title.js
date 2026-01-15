import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useTranslation } from 'react-i18next';
import styles from './Title.module.scss';
const Title = ({ title, subTitle, titleSize = 32, titleMargin = 50 }) => {
    // const { t } = useTranslation();
    return _jsxs("div", { className: styles.titleContainer, children: [_jsx("h1", { className: styles.title, style: { "--title-size": `${titleSize}px`, "--title-margin": `${titleMargin}px` }, children: title }), subTitle !== '' ?
                _jsx("h2", { className: styles.subTitle, children: subTitle })
                : null] });
};
export default Title;
