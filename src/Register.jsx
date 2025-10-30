
// First name
// Last name
// Age
// Gender
// Experience
// Primary Focus (select)
// Certificate
// Phone Number
// Password
// Confirm Password

import { useState } from "react";
import './Register.css';
import { JobExperience } from "./forms/JobExperience";

export const Register = (props) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        experience: '',
        primaryFocus: '',
        certificate: '',
        password: '',
        confirmPassword: '',
    });
    
    const onInputChange = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleRegister = () => {
        // ......

        const isValidForm = false;

        if (isValidForm) {
            props.onRegistred();
        }
    };

    const ageOptions = Array.from({ length: 80 }, (_, i) => 18 + i);

    return (
        <div>
            <h2>Registration Form</h2>

            <div id='form'>
                {/** First Name */}
                <div className="form-field">
                    <label htmlFor="firstName">First Name </label>
                    <input
                        id="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={(e) => onInputChange('firstName', e.target.value)}
                    />
                </div>

                {/** Last Name */}
                <div className="form-field">
                    <label htmlFor="lastName">Last Name </label>
                    <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => onInputChange('lastName', e.target.value)}
                    />
                </div>

                {/** Age */}
                <div className="form-field">
                    <label htmlFor="age">Age </label>
                    <select name="age" id="age" value={form.age}>
                        <option value=''>Select your age</option>
                        {ageOptions.map((age, index) => (
                            <option value={age} key={index}>{age}</option>
                        ))}
                    </select>
                </div>

                {/** Gender */}
                <div className="form-field">
                    <label htmlFor="gender">Gender </label>
                    <select name="gender" id="gender">
                        <option value={form.gender}>{form.gender}</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                {/** Phone Number */}
                <div className="form-field">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input
                        name='phoneNumber'
                        type="number"
                        value={form.phoneNumber}
                        onChange={(e) => onInputChange('phoneNumber', e.target.value)}
                    />
                </div>

                {/** Job Experience */}
                <JobExperience
                    jobExperience={{
                        certificate: form.certificate,
                        primaryFocus: form.primaryFocus,
                        experience: form.experience
                    }}
                    onInputChange={onInputChange}
                 />

                {/** Password */}
                <div className="form-field">
                    <label htmlFor="password">Password </label>
                    <input
                        name='password'
                        type="password"
                        value={form.password}
                        onChange={(e) => onInputChange('password', e.target.value)}
                    />

                </div>

                {/** Comfirm Passord */}
                <div className="form-field">
                    <label htmlFor="conmfirmPassword">Comfirm Password </label>
                    <input
                        name='comfirmPassword'
                        type="password"
                        value={form.comfirmPassword}
                        onChange={(e) => onInputChange('comfirmPassword', e.target.value)}
                    />
                </div>

                <div className="action">
                    <button onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    );
};