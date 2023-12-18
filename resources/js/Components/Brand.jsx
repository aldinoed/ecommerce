import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Brand(){
    const [brands, setBrands] = useState([])
    let i = 1;
    // const res = axios.get('/brands')
    useEffect(()=>{
        axios.get('/api/brands-data')
            .then(res=>{
                console.log(res.data); 
                setBrands(res.data.brands)})
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
                    <a href="/admin/input-brand/" className="text-white">Tambah</a>
                </button>
            </div>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <td>No.</td>
                <td>Nama Brand</td>
                <td>Logo Brand</td>
                <td className="ps-4">Action</td>
            </tr>
        </thead>
        <tbody>
        {Array.isArray(brands) && brands.map(brand => (
            <tr key={i} >
                <td>{i++}</td>
                <td>{brand.brand_name}</td>
                <td className="" ><img className="" src={'http://127.0.0.1:8001/storage/'+brand.brand_image}style={{height:"20px"}}  alt="" /></td>
                <td className="">{/* <button className="btn btn-success" name="view" onClick={()=>handleDelete(cat.category_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                </button> */}
                <form method="GET" action="update.php" className="inline">
                    <button className="btn btn-warning" name="update" value={brand.brand_id}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                    </button>
                </form>
                <button className="btn btn-danger inline ms-2" name="delete" onClick={()=>handleDelete(brand.brand_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                </button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    </>)
}