import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />


        </>
    )
}
