import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("email-pass user:", user);
                form.reset();
                handleUpdateUserProfile(name);
                toast.success("User created successfully!");
                setAuthToken(user);
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error(error)

            })

    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }

        updateUserProfile(profile)
            .then(() => {
                toast.success("User name updated")
            })
            .then(error => console.error(error))
    }



    return (

        <div className="card  w-full md:w-3/6 mx-auto shadow-2xl bg-base-100  py-20 ">
            <h1 className="text-5xl font-bold text-center">Sing Up</h1>

            <form onSubmit={handleSignUp} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-secondary' type="submit" value="Sign Up" />

                </div>
            </form>


            <p className='text-center my-3'>
                <small> Already have an account ? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></small>
            </p>

            <SocialLogin></SocialLogin>


        </div>

    );
};

export default SignUp;