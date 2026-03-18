import React from 'react';
import Hero from '../../components/Hero/Hero';
import StateSection from '../../components/StateSection/StateSection';
import TopApps from '../../components/TopApps/TopApps';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <StateSection></StateSection>
            <TopApps></TopApps>
        </div>
    );
};

export default Home;