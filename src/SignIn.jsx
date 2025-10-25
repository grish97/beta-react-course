import { useState } from "react";

export const SignIn = () => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);

    const [password, setPassword] = useState('');

    const handleUserNameChange = (event) => {
        const value = event.target.value;

        setUsername(value);

        const isNotValidUsername = value.length < 3;
        setUsernameError(isNotValidUsername);
    };

    console.log(usernameError);

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={handleUserNameChange}
                    />
                </div>
                {usernameError && (
                    <span style={{ fontSize: '10px', color: 'red' }}>Username field is required</span>
                )}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
        </div>
    )
};