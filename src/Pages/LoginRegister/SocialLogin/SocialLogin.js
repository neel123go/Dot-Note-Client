import React from 'react';
import GoogleImg from '../../../assets/107042_new_512x512.png';

const SocialLogin = () => {
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">OR</div>
                <div className="form-control mt-2">
                    <button class="btn glass text-slate-600 capitalize" style={{ fontSize: '16px' }}><img src={GoogleImg} alt="Google Logo" className='w-7 mr-3' /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;