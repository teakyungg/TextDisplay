function TextDisplay({ className, title, contents }) {

    let Title = [];
    let Contents = [];

    Title.push(DataArraySet(title).map((item) => <h2 style={{ margin: '0' }}>{item}</h2>));
    Contents.push(DataArraySet(contents).map((item) => <p style={{ margin: '0' }}>{item}</p>))


    return (
        <div className={className} style={{ padding: '20px' }}>

            <div className="display_title">
                {Title}
            </div>

            <div className="display_contents" style={{ marginTop: '20px' }}>
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