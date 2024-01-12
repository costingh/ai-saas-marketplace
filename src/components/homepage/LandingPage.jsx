import React from 'react'
import LandingPageNavbar from "~/components/homepage/LandingPageNavbar"
import HeroSection from "~/components/homepage/HeroSection"

function LandingPage() {
    return (
        <div className="homepage">
            <LandingPageNavbar></LandingPageNavbar>
            <HeroSection></HeroSection>
            <img src="./illustration.png" alt="" />
        </div>
    )
}

export default LandingPage