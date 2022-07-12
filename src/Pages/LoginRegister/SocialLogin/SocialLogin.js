import React from 'react';
import GoogleImg from '../../../assets/107042_new_512x512.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { SyncLoader } from 'react-spinners';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage;
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/notes');
        }
    }, [user, navigate]);

    if (loading) {
        return <div className='mx-auto mt-5 py-4'>
            <SyncLoader color="#EEB462" />
        </div>;
    }

    if (error) {
        errorMessage = <div>
            <p className='text-error mb-3'>{error.message}</p>
        </div>
    }

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                {errorMessage}
                <div className="form-control mt-2">
                    <button onClick={() => signInWithGoogle()} className="btn glass text-slate-600 capitalize" style={{ fontSize: '16px' }}><img src={GoogleImg} alt="Google Logo" className='w-7 mr-3' /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;