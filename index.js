import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

function TextDisplay({
    className,
    title,
    contnets
}) {
    return /*#__PURE__*/_jsxs("div", {
        className: className,
        style: {
            width: '250px',
            height: '250px',
            backgroundColor: 'lightgray'
        },
        children: [/*#__PURE__*/_jsx("h2", {
            children: title
        }), /*#__PURE__*/_jsx("p", {
            children: contnets
        })]
    });
}

export default TextDisplay;