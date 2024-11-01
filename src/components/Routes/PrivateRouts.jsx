import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children
    }


    return <Navigate to="/login"></Navigate>
};

export default PrivateRouts;