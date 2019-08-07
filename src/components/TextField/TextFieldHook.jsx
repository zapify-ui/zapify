import React, {useState} from 'react';
import "./inputStyles.scss";

function TextFieldHook(){
         const [input, setInput] = useState("");
    
        const handleChange = (e) => {
          e.preventDefault();
          setInput(e.target.value);
        }
    return(
        <div>
            <label>Input</label>
            <input 
              className="input"
              type="text" 
              name="text" 
              onChange={handleChange} 
              value={input} 
              placeholder="hook input" />
        </div>
    )
}

export default TextFieldHook;