import React from "react";
import TabNav from "./TabNav"
import {Outlet} from "react-router-dom"; 

const Tabs=()=>{
    return <div className="tabs">
       <h1>Tabs demo page</h1>

       {/** Tabs Naviagtion --rfce to start a component */}
        <TabNav/>
       {/** Tabs Inner content */}
       <Outlet/>
    </div>;
}

export default Tabs