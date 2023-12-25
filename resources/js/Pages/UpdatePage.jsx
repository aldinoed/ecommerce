
import UpdateBarang from "./UpdateBarang"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link, Head } from "@inertiajs/react";

export default function UpdatePage(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/admin/produk/:productId/edit" element={<Head title="Update Produk"/>}/>
            </Routes>
            <Routes>
                <Route path="/admin/produk/:productId/edit" element={<UpdateBarang/>}/>
            </Routes>
            <Routes>
                <Route path="/admin/produk/:productId/edit"/>
            </Routes>
        </Router>
        </>
    )
}