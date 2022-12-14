import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { createUserWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignUp = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log("google user:", user);
                toast.success("Successfully logged in!");
                navigate(from, { replace: true });
                setAuthToken(user);

            })
            .then(error => {
                console.error(error);
                // toast.error(error.message);
            })
    }
    return (
        <div>
            <hr />
            <p className='text-center'> <small>Social Login</small> </p>
            <p className='text-center'>
                <button onClick={handleGoogleSignUp} className='btn btn-secondary' >Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;