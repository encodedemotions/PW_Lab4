import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [error, setError] = useState('');
    const [userId, setUserId] = useState(0)

    let navigate = useNavigate();
    const submitHandler = (e) => {
        if (name == '' || surname == '') {
            setError('Fill the fields')
        } else {
        e.preventDefault();
        const postData = {data : {name, surname}}
        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/users', postData,  
        {headers:{
                        "X-Access-Token": process.env.REACT_APP_ACCESS_TOKEN,
                    }
                })
        .then((res) => {
            console.log(res.data.id)
            postData.data.id = res.data.id
            setUserId(res.data.id)

            localStorage.setItem("user-info", res.data.id);
            navigate('/main')
            
        })
        .catch((err)=>{
            console.log(err)
            setError('User already exists!');
            
        })
    }
    }

    return (
        <div className="main">
            <div className="login-div">
                <form className="login-form" onSubmit={submitHandler}>
                    <h1>Log in</h1>
                    <input type="text" name="name" className="name" placeholder="name" 
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="surname" className="surname" placeholder="surname" 
                        value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                    <input type="password" name="password" className="password" placeholder="password" />
                    <input type="submit" className="login-button" value="Log in" />

                </form>
            </div>
        </div>
        )
}

export default Login;