import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

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
    const handleDelete = async(catId) => {
        try{
            let res =  await axios.delete(`/api/delete-category/${catId}`);
            if (res.status === 200) {
                Swal.fire({
                    title : 'Berhasil!',
                    text : 'Berhasil Hapus Data Kategori',
                    icon : 'success',
                })
                const newCatData = cats.filter((item)=>item.category_id !== catId)
                setCats(newCatData)
            }else{
                Swal.fire({
                    title : 'Error',
                    text : res.data.message,
                    icon : 'error',
                })
        }}catch (error) {
            Swal.fire({
                title : 'Error',
                text : error,
                icon : 'error',
            })
        }
        };
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
                <td className="text-center">No.</td>
                <td className="text-center">Id Kategori</td>
                <td className="text-center">Nama Kategori</td>
                <td className="text-center">Action</td>
            </tr>
        </thead>
        <tbody>
        {Array.isArray(cats) && cats.map(cat => (
        <tr key={i}>
            <td className="text-center">{i++}</td>
            <td className="text-center">{cat.category_id}</td>
            <td className="text-center">{cat.category_name}</td>
            <td className="d-flex flex-row justify-content-around">
                <button className="btn btn-danger" name="delete" onClick={()=>handleDelete(cat.category_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                </button>
            </td>
        </tr>
        ))}
        </tbody>
    </table>
    </div>
    </>)
}