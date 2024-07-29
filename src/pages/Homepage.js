import React from "react";
import Cards from '../components/homecards'

function Home (){
    return(
        <>
        <div className="hero">
        <h1 className="hometext">KC Watch</h1>
<h5 className="hometext">Kansas City's premier full service watch and clock shop</h5>
        </div>
        <div className="who">
       <h3>Who We Are</h3>
       <p>KC Watch is a family owned and operated watch and clock retail store, providing sales and repair services in the Kansas City area. If you're in the Overland Park area, stop in for any of your watch and clock service needs and check out our selection of watches, clocks, and jewelry.</p>
       </div>
       <Cards/>
        </>
    )
}

export default Home