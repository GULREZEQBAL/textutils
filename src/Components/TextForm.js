import React , {useState} from 'react'

export default function TextForm(props) {
  const[text , setText] = useState('');

  const handleOnChange = (event)=>{

    setText(event.target.value)

  }

  const handleUpClick =() =>{

    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted into uppercase", "success");

  }

  const handleLoClick =() =>{

    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted into Lowercase", "success");


  }

  const handleToClear =() =>{

    let newText = ''
    setText(newText)
    props.showAlert("Text Box cleared", "success");


  }
  const handleCopy =()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied in Clipboard", "success");

  }

  const handleExtraSpaces =() =>{

    let newText = text.split(/[ ]+/); //using rajax
    setText(newText.join(" "))
    props.showAlert("Extra Spaces cleared", "success");


  }

  
  return (
    <>
   <div className="container"  style ={{color:props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value ={text} id="mybox" style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1 m" onClick={handleUpClick}>Convert To Upercase</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear Text</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

</div>

<div className="container my-2" style ={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text Summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters </p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read time</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter some text above to preview it here"}</p>



</div>


</>  
   
  )
}
