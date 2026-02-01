import { useState } from "react"
import "./Bmi.css"
import bmi_img from "./assets/bmi.png"
import diet_img from "./assets/diet.jfif"

export const Bmi = () => {
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState("");
    const [status,setStatus]=useState("");
    const [error,setError]=useState(false);
    const [validHeight,setValidHeight]=useState(true);
    const [validWeight,setValidWeight]=useState(true);

    function calculate(){
        const isValidHeight=/^\d+$/.test(height);
        setValidHeight(isValidHeight);

        const isValidWeight=/^\d+$/.test(weight);
        setValidWeight(isValidWeight);

        
        const heightInMeter=height/100;
        const BMI_value=weight/(heightInMeter * heightInMeter);
        setBmi(BMI_value.toFixed(2))
        if(isValidHeight && isValidWeight){
            if(BMI_value<18.5){
                setStatus("Under Weight")
            }
            else if(BMI_value>=18.5 && BMI_value<24.9){
                setStatus("Normal Weight");
            }
            else if(BMI_value>=25 && BMI_value<29.9){
                setStatus("Over Weight");
            }
            else{
                setStatus("Obese");
            }
            setError(false)

        }else{
            setBmi("")
            setStatus("")
            setError(true)
        }
    }

    function clear_data(){
        setHeight("")
        setWeight("")
        setBmi("")
        setStatus("")
        setError(false)
    }

  return (
    <>
    <div className="container">
        <div className="bmi_img">
            <img src={diet_img} alt="" />
            <img src={bmi_img} alt="" />
        </div>

        <div className="bmi_data">
            <h3>bmi calculator</h3>
            <label htmlFor="height">Height (cm)  {error && !validHeight && <span className="error">please enter valid numeric value for "Height"</span>}</label>
            <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            <label htmlFor="weight">Weight (kg) {error && !validWeight && <span className="error">please enter valid numeric value for "Weight"</span>}</label>
            <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            <button onClick={calculate}>Calculate BMI</button>
            <button className="clear_btn" onClick={clear_data}>Clear</button>

           {bmi !=="" && status !=="" && !error && (
            <> 
           <p>Result</p>
            <div className="result">
                <p>Your BMI is : <span>{bmi}</span></p>
                <p>Status : <span>{status}</span></p>
            </div>
            </>
        )}

        </div>
        <p style={{textAlign:"center",color:"#666",marginTop:"20px",fontSize:"10px"}}>Designed by Ajith Kumar</p>
    </div>
    </>
  )
}































































