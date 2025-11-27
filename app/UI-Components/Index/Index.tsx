import React from 'react';
import Hero from "@/app/UI-Components/Index/Hero/page";
import About from "@/app/UI-Components/Index/About/page";
import Paralex from "@/app/UI-Components/Index/Paralex/page";
import Services from "@/app/UI-Components/Index/Services/page";
import Expertise from "@/app/UI-Components/Index/Expertise/page";
import PricingPlans from "@/app/UI-Components/Index/PricingPlans/page";
import Testimonial from "@/app/UI-Components/Index/Testimonial/page";
import Faqs from "@/app/UI-Components/Index/Faq/page";
import Banner from "@/app/UI-Components/Index/Banner/page";
import Blog from "@/app/UI-Components/Index/Blogs/page";
import NewLetter from "@/app/UI-Components/Index/Newsletter/page";

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
            <Banner/>
            <Blog/>
            <NewLetter/>
        </>
    );
}

export default Index;