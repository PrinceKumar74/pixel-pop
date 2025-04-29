import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
const Layout =()=>{
    return(
        <div>
        
        <Header/>
        <main className ="flex-grow w-full pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 3xl:pt-40">
        <Outlet/>
        <Footer/>
        </main>
        </div>
        
    )
}
export default Layout;
