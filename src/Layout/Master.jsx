// import React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from "../components/Shaired/Navbar"
import Carousel from "../components/Carousel/Carousel"
import SectionTitle from "../components/SectionTitle/Sectiontitle"

function Master() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <SectionTitle title ="Test title"/>
            <Outlet/>
        </div>
    )
}

export default Master
