import './TextDisplay.css';

// 모듈 만들때 여기서 style를 변경하는 것은 최종형태에 들어감
// 즉 여기서 변경한 값은 다른 프로젝트의 css에서 일반적인 형태로 변경이 불가능함 

function TextDisplay({ title, contents, basicColor}) {

    let Title = [];
    let Contents = [];

    Title.push(DataArraySet(title).map((item) => <h2>{item}</h2>));
    Contents.push(DataArraySet(contents).map((item) => <p>{item}</p>))

    return (
        <div className="text_display" style={{backgroundColor:`${basicColor}`}}>

            <div className="display_title">
                {Title}
            </div>

            <div className="display_contents">
                {Contents}
            </div>

        </div>
    )

}

function DataArraySet(data) {   // 데이터 배열 형태로 전환
    let arr = [];
    if (Array.isArray(data)) arr = [...data];
    else arr.push(data);

    return arr;
}

export default TextDisplay;