import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text has been cleared", "success");
  };
  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("text has been reversed", "success");
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSentenceCase = () => {
    let newText = text.split('. ')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
      }
      
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    })
    .join('. ');
    setText(newText);
    props.showAlert("converted to sentence case", "success");
  };

  const countSentences = () => {
    if (text.trim() === '') {
      return 0;
    }
    // Simple sentence counting by splitting on punctuation
    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
    return sentences.length;
  };

  
  const handleToggleCase = () => {
    let newText= text.split('').map((char, index) => 
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    setText(newText);
    props.showAlert("altered the text", "success");
  };

  const handleCopy = () => {
    // Copy the text to clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
      props.showAlert("text has been copied to clipboard", "success");
  }

  const handleExtraSpace=() =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space has been managed", "success");
  }
  

  const [text, setText] = useState("");


  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey'}} id="myBox" rows="8" />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>
        <button className="btn btn-primary mx-2" onClick={handleToggleCase}>AlTeRnAtInG cAsE</button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy to clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>clear</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery</h2>
        <p>Words count: {text.split(" ").length} | Characters count: {text.length} | Minutes count: {0.008 * text.split(" ").length} | Sentence count: {countSentences()}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box preview it here."}</p>
      </div>
    </>
  );
}