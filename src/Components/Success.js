import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const {
        firstName,
        lastName,
        username,
        email,
        phoneNo,
        country,
        city,
        panNo,
        aadharNo
    } = location.state || {};

    return (
        <div class="success">
            <h1>Form Submitted Successfully</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNo}</p>
            <p>Country: {country}</p>
            <p>City: {city}</p>
            <p>PAN Number: {panNo}</p>
            <p>Aadhar Number: {aadharNo}</p>
        </div>
    );
};

export default Success;
