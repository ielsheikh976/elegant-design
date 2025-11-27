import React from 'react';
import Hero from "@/app/Index/Hero/page";
import About from "@/app/Index/About/page";
import Paralex from "@/app/Index/Paralex/page";
import Services from "@/app/Index/Services/page";
import Expertise from "@/app/Index/Expertise/page";
import PricingPlans from "@/app/Index/PricingPlans/page";
import Testimonial from "@/app/Index/Testimonial/page";
import Faqs from "@/app/Index/Faq/page";
import Banner from "@/app/Index/Banner/page";
import Blog from "@/app/Index/Blogs/page";
import NewLetter from "@/app/Index/Newsletter/page";

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