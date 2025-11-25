import React from 'react';
import Hero from "@/app/UI-Components/Index/Hero/page";
import About from "@/app/UI-Components/Index/About/page";
import Paralex from "@/app/UI-Components/Index/Paralex/page";
import Services from "@/app/UI-Components/Index/Services/page";
import Expertise from "@/app/UI-Components/Index/Expertise/page";
import PricingPlans from "@/app/UI-Components/Index/PricingPlans/page";
import Testimonial from "@/app/UI-Components/Index/Testimonial/page";
import Faqs from "@/app/UI-Components/Index/Faq/page";

function Index() {
    return (
        <>
            <Hero/>
            <About/>
            <Paralex/>
            <Services/>
            <Expertise/>
            <PricingPlans/>
            <Testimonial/>
            <Faqs/>
        </>
    );
}

export default Index;