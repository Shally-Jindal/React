import {useState} from 'react';
import './OtpLog.css';

export default function OtpLogin({length = 6, onChange}){
    const [otpList, setOtpList] = useState(Array.from({length}).fill(""));

    function handleInputChange(val,index){
        const newOtps = [...otpList];
        newOtps[index] = val;
        setOtpList(newOtps);

        onChange(newOtps.join(""));

        if(val && index < length - 1){
            let ele = document.getElementById(`otp-${index+1}`);
            ele && ele.focus();
        }
    }

    function handleKeyDown(e,index){
        if(e.key === "Backspace"){
            handleBackspace(index);
        }
    }

    const handleBackspace = (index) => {
        const newOtp = [...otpList];
        newOtp[index] = "";
        setOtpList(newOtp);
    
        // Move to the previous input field
        if (index > 0) {
          const prevInput = document.getElementById(`otp-${index - 1}`);
          prevInput && prevInput.focus();
        }
      };

    return(
        <div className='otpContainer'>
            {otpList.map((digit,index)=>
            (<input
            id={`otp-${index}`}
            key={index}
            maxLength="1"
            value={digit} 
            type='text' 
            onChange={(e) => handleInputChange(e.target.value,index)}
            onKeyDown={(e) => handleKeyDown(e,index)}
            >
            </input>)
            )
            }

        </div>
    )
}