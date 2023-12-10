import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import MainNav from "../Components/MainNav";
import HomeBody from "@/Components/HomeBody";
import { Link, Head } from "@inertiajs/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchGrid from "./SearchGrid";
import ProductView from "@/Components/ProductView";
import Keranjang from "./Keranjang";
import { useEffect } from "react";

export default function Home({users, user}) {
    // console.log(userData)
    useEffect(() => {
        // You can perform additional actions when userData changes
    }, [user]);
    return (
        <>
        <Router>
            <Head title="Situs Toko Komputer Terlengkap & Termurah"></Head>
            <MainNav isAuthenticated={user}></MainNav>
            <h1></h1>
            <div className="container-fluid pt-5 ">
            <Routes>
                <Route path="/" element={<HomeBody user={user}/>}/>
                <Route path="/search" element={<SearchGrid/>}></Route>
                <Route path="/keranjang" element={<Keranjang/>}></Route>
                <Route path="/:productName" element={<ProductView/>}></Route>
            </Routes>
            </div>
        </Router>
        </>
    );
}
