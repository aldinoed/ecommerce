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

export default function Home(user) {
    return (
        <>
        <Router>
            <Head title="Situs Toko Komputer Terlengkap & Termurah">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            {user.auth.user !== null ? (<MainNav user={user.auth.user.fullname}></MainNav>) : (<MainNav></MainNav>)}
            
            <h1></h1>
            <div className="container-fluid pt-5 ">
            <Routes>
                <Route path="/" element={<HomeBody user={user.auth.fullname}/>}/>
                <Route path="/search" element={<SearchGrid/>}></Route>
                <Route path="/keranjang" element={<Keranjang/>}></Route>
                <Route path="/product/:productId" element={<ProductView/>}></Route>
            </Routes>
            </div>
        </Router>
        </>
    );
}
