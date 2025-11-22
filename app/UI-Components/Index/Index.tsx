import React from 'react';
import Hero from "@/app/UI-Components/Index/Hero/page";
import About from "@/app/UI-Components/Index/About/page";
import Paralex from "@/app/UI-Components/Index/Paralex/page";
import Services from "@/app/UI-Components/Index/Services/page";

function Index() {
    return (
        <>
            <Hero/>
            <About/>
            <Paralex/>
            <Services/>
        </>
    );
}

export default Index;