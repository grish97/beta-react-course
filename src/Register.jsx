
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

export const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: null,
        gender: null,
        phoneNumber: '',
        experience: null,
        primaryFocus: null,
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
                    <label htmlFor="age">Last Name </label>
                    <select name="age" id="age">
                        {ageOptions.map((age, index) => (
                            <option value={age} key={index}>{age}</option>
                        ))}
                    </select>
                </div>

                {/** Gender */}
                <div className="form-field">
                    <label htmlFor="gender">Gender </label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                {/** Phone Number */}
                <div className="form-field">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input
                        name='phoneNumber'
                        type="text"
                        value={form.phoneNumber}
                        onChange={(e) => onInputChange('phoneNumber', e.target.value)}
                    />
                </div>

                {/** Experience */}
                <div className="form-field">
                    <label htmlFor="experience">Experience </label>
                    <input
                        name='experience'
                        type="number"
                        value={form.experience}
                        onChange={(e) => onInputChange('experience', e.target.value)}
                    />
                </div>

                {/** Primary Focus */}
                <div className="form-field">
                    <label htmlFor="primaryFocus">Primary Focus </label>
                    <select name="primaryFocus" id="primaryFocus">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="both">Both</option>
                    </select>
                </div>

                {/** Certificate */}
                <div className="form-field">
                    <label htmlFor="certificate">Certificate </label>
                    <input
                        name='certificate'
                        type="text"
                        value={form.certificate}
                        onChange={(e) => onInputChange('certificate', e.target.value)}
                    />
                </div>

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
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
};