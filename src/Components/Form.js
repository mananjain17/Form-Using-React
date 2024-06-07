import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};

        if (!formValues.firstName) errors.firstName = 'First Name is required';
        if (!formValues.lastName) errors.lastName = 'Last Name is required';
        if (!formValues.username) errors.username = 'Username is required';
        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formValues.password) errors.password = 'Password is required';
        if (!formValues.phoneNo) errors.phoneNo = 'Phone number is required';
        if (!formValues.country) errors.country = 'Country is required';
        if (!formValues.city) errors.city = 'City is required';
        if (!formValues.panNo) errors.panNo = 'PAN number is required';
        if (!formValues.aadharNo) errors.aadharNo = 'Aadhar number is required';

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            navigate('/success', { state: { ...formValues } });
        }
    }, [formErrors, isSubmitting, navigate, formValues]);

    return (
        <>


        <form onSubmit={handleSubmit}>
            
            <h1>Register Form</h1>
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    value={formValues.firstName}
                    onChange={handleChange}
                    
                />
                {formErrors.firstName && <p>{formErrors.firstName}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    value={formValues.lastName}
                    onChange={handleChange}
                />
                {formErrors.lastName && <p>{formErrors.lastName}</p>}
            </div>
            <div>
                <input
                    
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={formValues.username}
                    onChange={handleChange}
                />
                {formErrors.username && <p>{formErrors.username}</p>}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formValues.email}
                    onChange={handleChange}
                />
                {formErrors.email && <p>{formErrors.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={formValues.password}
                    onChange={handleChange}
                />
                {formErrors.password && <p>{formErrors.password}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="phoneNo"
                    placeholder='Phone No.'
                    value={formValues.phoneNo}
                    onChange={handleChange}
                />
                {formErrors.phoneNo && <p>{formErrors.phoneNo}</p>}
            </div>
            <div>
                <select
                    name="country"
                    value={formValues.country}
                    onChange={handleChange}
                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                </select>
                {formErrors.country && <p>{formErrors.country}</p>}
            </div>
            <div>
                <select
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select State</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="arunachal-pradesh">Arunachal Pradesh</option>
                    <option value="assam">Assam</option>
                    <option value="bihar">Bihar</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="haryana">Haryana</option>
                    <option value="himachal-pradesh">Himachal Pradesh</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="kerala">Kerala</option>
                    <option value="madhya-pradesh">Madhya Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="manipur">Manipur</option>
                    <option value="meghalaya">Meghalaya</option>
                    <option value="mizoram">Mizoram</option>
                    <option value="nagaland">Nagaland</option>
                    <option value="odisha">Odisha</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="tripura">Tripura</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="west-bengal">West Bengal</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="delhi">Delhi</option>
                    <option value="lakshadweep">Lakshadweep</option>
                    <option value="puducherry">Puducherry</option>
                </select>
                {formErrors.city && <p>{formErrors.city}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="panNo"
                    placeholder='Pan No.'
                    value={formValues.panNo}
                    onChange={handleChange}
                />
                {formErrors.panNo && <p>{formErrors.panNo}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name="aadharNo"
                    
                    placeholder='Aadhar No.'
                    value={formValues.aadharNo}
                    onChange={handleChange}
                />
                {formErrors.aadharNo && <p>{formErrors.aadharNo}</p>}
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>

        </>
    );
};

export default Form;
