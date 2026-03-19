import React from 'react';
import { getStoredData } from '../../utilities/storageDB';
import { useLoaderData } from 'react-router';
import InstalledApp from '../../components/InstalledApp/InstalledApp';

const Installation = () => {
    const storedApp = getStoredData()
    const appsData = useLoaderData()
    const filteredStoredData = appsData.filter(appData=> storedApp.includes(appData.id))
    
    
    return (
        <div className='bg-base-200 py-10'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='text-center mb-4'>
                    <h2 className='text-5xl font-bold mb-4'>Your Installed Apps</h2>
                    <p className='opacity-80'>Explore your installed apps</p>
                </div>
                <div className='flex justify-between'>
                    <p>{storedApp.length} Apps Found</p>
                    <p>Sort By: </p>
                </div>
                <div className='grid gap-6'>
                    {filteredStoredData.map(app=> <InstalledApp key={app.id} app={app}></InstalledApp>)}
                    
                </div>
            </div>
        </div>
    );
};

export default Installation;