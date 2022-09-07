import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked!"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("Lowercase was clicked!"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    } 

    const handleClearClick = () => {
        setText("");
    } 

    const handleOnChange = (event) => {
        // console.log("handleOnChange!");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn-btn-primary mx-1' onClick={handleUpClick}> Convert to Uppercase </button>
                <button className='btn-btn-primary mx-1' onClick={handleLowClick}> Convert to Lowercase </button>
                <button className='btn-btn-primary mx-1' onClick={handleClearClick}> Clear Text </button>
            </div>
            <div className='container my-3'>
                <h2> Your text summary</h2>
                <p> {text ? text.split(" ").length: 0} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length } Minutes read </p>
            </div>
        </>
    )
}
