import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');

    const onChangeHandle = (event) => {
        setText(event.target.value);

    }
    const onClickUpHandle = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted into uppercase successfully", "success");
    }
    const onClickLoHandle = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted into lowercase successfully", "success");

    }
    const onClickClearHandle = () => {
        setText('');
        props.showAlert("Text cleared successfully", "success");

    }
    const onClickCapHandle = () => {
        const newText = text.trim().split(' ').map((element) => {
            return element[0].toUpperCase() + element.slice(1);
        });
        setText(newText.join(" "));
        props.showAlert("Capitalized successfully", "success");

    }
    const onClickExtraSpaceHandle = () => {
        setText(text.replace(/[^\S\r\n]{2,}/g, ' ').replace(/[\n]{2,}/g, '\n'));

        props.showAlert("Extra space removed successfully", "success");

    }
    const onClickCopyHandle = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard successfully", "success");
    }


    return (
        <>
            <div className="container my-3" style={(props.mode === "light") ? { color: "black" } : { color: "white" }}>
                <h2 htmlFor="textInput" className="form-label">Enter text to analyze below</h2>
                <textarea className="form-control" style={(props.mode === "light") ? { backgroundColor: "white", color: "black" } : { backgroundColor: "#003b93", color: "white" }} onChange={onChangeHandle} rows="8" id="inputText" placeholder="Enter your text here" value={text}></textarea>
                <button disabled={text.length === 0} onClick={onClickUpHandle} className="btn btn-primary my-2 mx-2">Convert to Uppercase</button>
                <button disabled={text.length === 0} onClick={onClickLoHandle} className="btn btn-primary my-2 mx-2">Convert to Lowercase</button>
                <button disabled={text.length === 0} onClick={onClickClearHandle} className="btn btn-primary my-2 mx-2">Clear Text</button>
                <button disabled={text.length === 0} onClick={onClickCapHandle} className="btn btn-primary my-2 mx-2">Capitalize text</button>
                <button disabled={text.length === 0} onClick={onClickExtraSpaceHandle} className="btn btn-primary my-2 mx-2">Remove Extra Space</button>
                <button disabled={text.length === 0} onClick={onClickCopyHandle} className="btn btn-primary my-2 mx-2">Copy</button>
            </div>
            <div className="container" style={(props.mode === "light") ? { color: "black" } : { color: "white" }}>
                <h2>Your text summary</h2>
                <p>Words {text.trim().split(/\n+|\s+/).filter((element) => element !== '').length} Characters {text.trim().length}</p>
                <p>{text.trim().split(/\n+|\s+/).filter((element) => element !== '').length * 0.08} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>

        </>
    )
}

export default TextForm


