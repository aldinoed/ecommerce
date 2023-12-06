import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Brand(){
    const [brands, setBrands] = useState([])
    // const res = axios.get('/brands')
    useEffect(()=>{
        axios.get('/admin/brand')
            .then(res=>{
                console.log(res.data); 
                setBrands(res.data)})
            .catch(error=>{
                console.log('Error fetching data: ', error)
            })
    }, [])
    // }
    return(
    <>
    <div className="d-flex align-items-center justify-content-between mb-2">
                <button className="btn-primary btn" width="30px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 13 13">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg><a href="/admin/input-brand/" className="text-white">Tambah</a>
                </button>
            </div>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <td>No.</td>
                <td>Nama Brand</td>
                <td>Logo Brand</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
        {Array.isArray(brands) && brands.map(brand => (
            // {brands.map(brand =>{
                <tr key={brand.id}>
                    <td>{brand.id}</td>
                    <td>{brand.brand_nama}</td>
                    <td>f</td>
                    <td></td>
                </tr>
            // )}
    // Your mapping logic
        ))}
        </tbody>
    </table>
    </>)
}