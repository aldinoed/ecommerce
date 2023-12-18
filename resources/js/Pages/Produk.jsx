import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

// import MainNav from "../Components/MainNav";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Link, Head } from "@inertiajs/react";

export default function Produk(){

    let i = 1;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('/api/products-data')
            .then((response) => {
                console.log(response.data.products);
                setProducts(response.data.products)
            })
            .catch((error)=>console.log(error.message))
    }, [])
    const handleDelete = async(proId) => {
        // console.log(userId)
        try{
            let res =  await axios.delete(`/api/delete-product/${proId}`);
            if (res.status === 200) {
                alert(res.data.message)
                const newProductData = products.filter((item)=>item.product_id !== proId)
                setProducts(newProductData)
                // alert('Error deleting category. Check console for details.');
            }else{
                console.error('Error deleting category:', res.data.message);
        }}catch (error) {
            console.error('Error deleting category:', error);
            alert('Error deleting category. Check console for details.');
        }
    };
    return(
        <>
        {/* <div className="col-9 ms-auto me-auto bg-white rounded-2 pt-3 " style={{maxHeight:"80vh", marginTop: "30px"}}> */}
        <div className="shadow p-3 rounded-2">
            <div className="d-flex align-items-center justify-content-between mb-2">
                <button className="btn-primary btn align-items-baseline d-flex justify-content-evenly" style={{minWidth:"90px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg float-start " viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                    <a href="/admin/input-produk/" className="text-white">Tambah</a>
                </button>
            </div>
            <div className="table-view overflow-auto" style={{height:"80%"}}>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col" style={{maxWidth:"200px"}}>Nama Produk</th>
                            <th scope="col">Harga Produk</th>
                            <th scope="col">Stok</th>
                            <th scope="col">Terjual</th>
                            <th scope="col" className="ms-5">Action</th>
                        </tr>
                    </thead>       
                    <tbody>
                        {Array.isArray(products) && products.map((product)=>(
                        <tr key={i++}>
                            <td>{i++}</td>
                            <td style={{maxWidth:"200px"}}>{product.product_name.slice(0,27)+'...'}</td>
                            <td>Rp. {product.product_price}</td>
                            <td>{product.product_stock}</td>
                            <td className="ps-5">{product.sold_amount}</td>
                            <td className="d-flex justify-content-start" style={{ minWidth:"100px"}}>
                                <form method="GET" action={`/admin/produk/${product.product_id}`}>
                                    <button className="btn btn-success" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                        </svg>
                                    </button> 
                                </form>
                                {/* <form method="GET" action=> */}
                                <a href={`/admin/produk/${product.product_id}/edit`}>
                                <div className="btn btn-warning" name="update" value="<?= $barang['id_barang']; ?>">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </div>
                                </a>
                                    
                                {/* </form> */}

                                    <button className="btn btn-danger" name="delete" onClick={()=>handleDelete(product.product_id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
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
        </div>
        </>
    );
}