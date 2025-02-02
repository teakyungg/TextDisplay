import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './TextDisplay.css';

// 모듈 만들때 여기서 style를 변경하는 것은 최종형태에 들어감
// 즉 여기서 변경한 값은 다른 프로젝트의 css에서 일반적인 형태로 변경이 불가능함 

function TextDisplay({
  title,
  contents,
  basicColor
}) {
  let Title = [];
  let Contents = [];
  Title.push(DataArraySet(title).map(item => /*#__PURE__*/_jsx("h2", {
    children: item
  })));
  Contents.push(DataArraySet(contents).map(item => /*#__PURE__*/_jsx("p", {
    children: item
  })));
  return /*#__PURE__*/_jsxs("div", {
    className: "text_display",
    style: {
      backgroundColor: `${basicColor}`
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: "display_title",
      children: Title
    }), /*#__PURE__*/_jsx("div", {
      className: "display_contents",
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