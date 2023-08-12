import React,{useState} from "react";

function App(){
      const [num1,setNum1] =useState('');
      const [num2,setNum2] =useState('');
      const [error, setError] =useState('');
      const [success, setSuccess] =useState('');
      const [result, setResult] =useState('');
          // js code for calculation
      const doCalculation =(operator)=>{
        //logic for calculator
        if(!num1 || !num2 || isNaN(num1) || isNaN(num2)){
            setError('Error!');

            if(!num1){
                setResult('Please fillup num1')
            } else {
                setResult('Please fillup num2')
            }
            setSuccess('')
        }
        else{
            setSuccess('Sucsess');
            setError('');

            const n1=parseFloat(num1);
            const n2=parseFloat(num2);
            switch(operator){
                case '+':
                       setResult('Result:  '+(n1+n2));
                       break;
                case '-':
                       setResult('Result:  '+(n1-n2));
                      break;
                case '*':
                  setResult('Result:  '+(n1*n2));
                       break; 
                case '/':
                  setResult('Result:  '+(n1/n2));
                       break;
                default:
                        setResult('');   
            }
        } 
      }
      return (
    
        <div className='calculator'>
          <h1>React Calculator</h1>
          <div className='input'>
          <input type="text" placeholder="Num 1" onChange={(e)=> setNum1(e.target.value)} />
          <input type="text" placeholder="Num 2" onChange={ (e)=> setNum2(e.target.value)} /> 
          </div>
          
          <div className='button'>
             <button onClick={()=>doCalculation('+')}>+</button>
             <button onClick={()=>doCalculation('-')}>-</button>
             <button onClick={()=>doCalculation('*')}>*</button>
             <button onClick={()=>doCalculation('/')}>/</button>
          </div>
          {
            error && <p className="error">{error}</p>
          }
          {
            success && <p className='success'>{success}</p>
          }
          {
            result && <p className='result'>{result}</p>
          }
        </div>
  
     
    );
  }


export default App;