import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

// import MainNav from "../Components/MainNav";

import { Link, Head } from "@inertiajs/react";

export default function Produk(){
    return(
        <>
        {/* <div className="col-9 ms-auto me-auto bg-white rounded-2 pt-3 " style={{maxHeight:"80vh", marginTop: "30px"}}> */}
            <div className="d-flex align-items-center justify-content-between mb-2">
                <button className="btn-primary btn" width="30px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 13 13">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg><a href="/admin/input-produk/" className="text-white">Tambah</a>
                </button>
            </div>
            <div className="table-view overflow-auto" style={{height:"80%"}}>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Id Barang</th>
                            <th scope="col">Nama Barang</th>
                            <th scope="col">Stok</th>
                            <th scope="col" className="ms-5">Action</th>
                        </tr>
                    </thead>       
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>id_barang_2131</td>
                            <td>RAM</td>
                            <td className="ps-5">Stok</td>
                            <td className="d-flex justify-content-start">
                                <form method="GET" action="update.php">
                                    <button className="btn btn-warning" name="update" value="<?= $barang['id_barang']; ?>">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                </form>
                                <form method="POST" action="">
                                    <input type="hidden" name="selectedNrp" value="<?= $barang['id_barang'];  ?>"/>
                                    <button className="btn btn-danger" name="delete">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                    </button>
                                </form>
                            </td>
                        </tr>
                                          {/* <?php $i++;
                                          } ?> */}
                    </tbody>
                </table>
            </div>
        {/* </div> */}
        </>
    );
}