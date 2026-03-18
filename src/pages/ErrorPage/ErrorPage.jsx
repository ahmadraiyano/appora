import React from 'react';
import ErrorImage from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-base-200 py-10'>
            <div className='w-10/12 mx-auto flex flex-col items-center text-center gap-16'>
            <img src={ErrorImage} alt="Page Not Found" />
            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-5xl'>Oops, page not found!</h2>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                <button onClick={()=> navigate(-1)} className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] rounded-lg text-white px-6">Go Back</button>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;