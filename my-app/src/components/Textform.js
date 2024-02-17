import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const [finishSpaces, setFinishSpaces] = useState(false);
    const [capitalizeFirstLetter, setCapitalizeFirstLetter] = useState(false);
    const [italicText, setItalicText] = useState(false);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleFinishSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space
        setText(newText);
        setFinishSpaces(true);
    };
    

    const handleCapitalizeFirstLetter = () => {
        let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
        setCapitalizeFirstLetter(true);
    };

    const handleItalicText = () => {
        let newText = `<em>${text}</em>`;
        setText(newText);
        setItalicText(true);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleFinishSpaces}>Finish Spaces</button>
                    <button className="btn btn-primary mx-2" onClick={handleCapitalizeFirstLetter}>Capitalize First Letter</button>
                    <button className="btn btn-primary mx-2" onClick={handleItalicText}>Italic Text</button>

                </div>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>Your {text.split(" ").length} words and {text.length} characters</p>
                <p>Your {0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                {italicText ? <p dangerouslySetInnerHTML={{ __html: text }}></p> : <p>{text}</p>}
            </div>
        </>
    )
}
