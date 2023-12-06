import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import axios from "axios";

import { useState, useEffect } from "react";

export default function Categories(){
    let i = 1;
    const [cats, setCats] = useState([])
    useEffect(()=>{
        axios.get('/api/categories-data')
            .then(res=>{
                setCats(res.data.categories)})
            .catch(error=>{
                console.log('Error fetching data: ', error)
            })
    }, [])
    // }
    return(
    <>
    <div className="shadow p-3 rounded-2">
    <div className="d-flex align-items-center justify-content-between mb-2">
        <button className="btn-primary btn align-items-baseline d-flex justify-content-evenly" style={{minWidth:"90px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg float-start " viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
            <a href="/admin/input-cat/" className="text-white">Tambah</a>
        </button>
    </div>
    <table className="table table-striped table-hover ">
        <thead>
            <tr >
                <td>No.</td>
                <td>Id Kategori</td>
                <td>Nama Kategori</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
        {Array.isArray(cats) && cats.map(cat => (
            <tr key={cat.id}>
            <td>{i++}</td>
            <td>{cat.category_id}</td>
            <td>{cat.category_name}</td>
            <td>f</td>
            <td></td>
        </tr>
        ))}
    {/* // Your mapping logic */}
        {/* ))} */}
        </tbody>
    </table>
    </div>
    </>)
}