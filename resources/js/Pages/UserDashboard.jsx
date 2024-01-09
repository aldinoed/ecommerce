import MainNav from "@/Components/MainNav";
import Biodata from "@/Components/Biodata"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function UserDashboard(){
    return(
        <>
        <MainNav></MainNav>
        <div className="container rounded-3 shadow p-4" style={{marginTop:"9%", minHeight:"40vh", maxWidth:"83%", border : "none"}}>
            <Router>
                <Routes>
                    <Route path="/user/dashboard" element={<Biodata/>}/>
                    <Route path="/user/dashboard/alamat" element={<Biodata/>}/>
                </Routes>
            </Router>
        </div>
        </>
    )
}