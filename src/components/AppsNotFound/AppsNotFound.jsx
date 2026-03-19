import React from 'react';
import AppsNotFoundImage from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppsNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-base-200 py-10'>
            <div className='w-10/12 mx-auto flex flex-col items-center text-center gap-16'>
            <img src={AppsNotFoundImage} alt="Page Not Found" />
            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-5xl'>OPPS!! APP NOT FOUND</h2>
                <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                <button onClick={()=> navigate(-1)} className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] rounded-lg text-white px-6">Go Home</button>
            </div>
        </div>
        </div>
    );
};

export default AppsNotFound;