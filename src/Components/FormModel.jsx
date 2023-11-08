import React, { useState } from "react";

function FormModel() {
    const [information, setInformation] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        if (userName === "vasanth" && password === "123@") {
            alert("Welcome Vasanth Login Successful")
            setInformation(true);
        }
        else {
            alert("Please check your Login USER NAME and PASSWORD")
        }
    }

    function logOut() {
        setInformation(false);
        setUserName('');
        setPassword('');
    }

    return (
       <>
        {information ? (
                <div>
                    <h1> Welcome user</h1>
                    <input type='submit' onClick={logOut} value="Logout" />
                </div>
            ) : (
                <div>

                    <form >
                        <label>USER NAME</label>  <br />
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <br />
                        <label>PASSWORD</label>  <br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Login" onClick={login} />
                    </form>

                </div>

            )}
       </>
    )
}

export default FormModel;