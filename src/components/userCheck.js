import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function UserCheck(props){
    let Comp = props.Comp
    const navigate = useNavigate();
    console.log(localStorage.getItem('user-info'))
    const qId = props.qId

    useEffect(() => {
        console.log(props.qId)
        if(!localStorage.getItem('user-info'))
        {
            navigate("/login")  
        }
    }, []) 
    return(
        <div>
            <Comp qId = {qId} />
        </div>
    );
}
export default UserCheck;