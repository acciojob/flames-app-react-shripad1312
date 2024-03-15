import React, {Component, useState} from "react";
import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//             </div>
//         )
//     }
// }

const App=()=>{
    const [input1value,setInput1Value]=useState(null);
    const [input2value,setInput2Value]=useState(null);
    const [status,setStatus]=useState(null);

    const check=()=>{

        if(input1value===null&&input2value===null){
            setStatus("Please Enter valid input");
            return;
        }
    let count=removeCommonLettersAndCalculateModulus(input1value,input2value);
    if(count===0){
      setStatus("Siblings");
    }else if(count===1){
      setStatus("Friends")
    }else if(count===2){
       setStatus("Love");
    }else if(count===3){
        setStatus("Affection");
    }else if(count===4){
        setStatus("Marriage");
    }else if(count===5){
        setStatus("Enemy");
    }

    }

    function removeCommonLettersAndCalculateModulus(name1, name2) {
        const count1 = {};
        const count2 = {};
        
        // Count occurrences of letters in name1
        for (let char of name1) {
            count1[char] = (count1[char] || 0) + 1;
        }
        
        // Count occurrences of letters in name2
        for (let char of name2) {
            count2[char] = (count2[char] || 0) + 1;
        }
        
        // Remove common letters from both counts
        for (let char in count1) {
            if (count2[char]) {
                const minOccurrences = Math.min(count1[char], count2[char]);
                count1[char] -= minOccurrences;
                count2[char] -= minOccurrences;
            }
        }
        
        // Calculate the sum of lengths of remaining strings
        let sumLength = 0;
        for (let char in count1) {
            sumLength += count1[char];
        }
        for (let char in count2) {
            sumLength += count2[char];
        }
        
        // Take modulus by 6
        return sumLength % 6;
    }

    const clearAll=()=>{
        setInput1Value(null);
        setInput2Value(null);
        setStatus(null);
    }
    return(
        <>
    <input  id="id1" name="name1" data-testid="input1" placeholder="Enter first name" onChange={(e)=>setInput1Value(e.target.value)}></input>
    <input  id="id2" name="name2" data-testid="input2" placeholder="Enter second name" onChange={(e)=>setInput2Value(e.target.value)}></input>
    <button data-testid="calculate_relationship" onClick={check}>Calculate Realationship Future</button>
    <button data-testid="clear" onClick={clearAll}>Clear</button>
    {status.length>0?<h3>{status}</h3>:null}
        </>
 
    );
}
export default App;
