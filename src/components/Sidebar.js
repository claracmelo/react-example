import React from "react";
import { Link, useLocation } from "react-router-dom";


const Sidebar=()=>{
    const location = useLocation()

    return <div className="sidebar">
    <div className="sidebar_items">
    <Link to="/dashboard" className={location.pathname==='/dashboard'?'sidebar_active':'sidebar_inactive'}>Dashboard</Link>
    <Link to="/tabs" className={location.pathname.includes('/tabs')?'sidebar_active':'sidebar_inactive'}>Tabs Demo</Link>
    <Link to="/settings" className={location.pathname==='/settings'?'sidebar_active':'sidebar_inactive'}>Settings</Link>
    </div>
        
    </div>;
}

export default Sidebar