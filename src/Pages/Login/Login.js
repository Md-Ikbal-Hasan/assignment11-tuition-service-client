import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../customHooks/useTitle';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useTitle('Login')

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log("email-pass user:", user);
                form.reset();

                toast.success("User logged in successfully!");
                navigate(from, { replace: true });
                setAuthToken(user);
            })
            .then(error => {
                console.error(error);

            })

    }

    return (
        <div className="card  w-full md:w-3/6 mx-auto shadow-2xl bg-base-100  py-20 ">
            <h1 className="text-5xl font-bold text-center">Login</h1>

            <form onSubmit={handleLogin} className="card-body">


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
                    <input className='btn btn-secondary' type="submit" value="Login" />

                </div>
            </form>


            <p className='text-center my-3'>
                <small> Are you new here ? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></small>
            </p>

            <SocialLogin></SocialLogin>


        </div>

    );
};

export default Login;