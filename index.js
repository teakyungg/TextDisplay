import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function TextDisplay({
  className,
  title,
  contents
}) {
  let Title = [];
  let Contents = [];
  Title.push(DataArraySet(title).map(item => /*#__PURE__*/_jsx("h2", {
    style: {
      margin: '0'
    },
    children: item
  })));
  Contents.push(DataArraySet(contents).map(item => /*#__PURE__*/_jsx("p", {
    style: {
      margin: '0'
    },
    children: item
  })));
  return /*#__PURE__*/_jsxs("div", {
    className: className,
    style: {
      padding: '20px'
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: "display_title",
      children: Title
    }), /*#__PURE__*/_jsx("div", {
      className: "display_contents",
      style: {
        marginTop: '20px'
      },
      children: Contents
    })]
  });
}
function DataArraySet(data) {
  // 데이터 배열 형태로 전환
  let arr = [];
  if (Array.isArray(data)) arr = [...data];else arr.push(data);
  return arr;
}
export default TextDisplay;