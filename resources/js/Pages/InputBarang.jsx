import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

// import MainNav from "../Components/MainNav";

import { Link, Head } from "@inertiajs/react";

export default function FormInputProduk(){
    return (
        <>
        <Head title="Input Produk"></Head>
        <div className="p-3 mb-2  mt-5">
            <div className="align-self-center ">
                <form style={{maxHeight: "100vh", width: "60%"}} className="p-4 m-auto shadow rounded bg-white" method="POST" action="form.php" encType="multipart/form-data">
                    <p className="text-center fs-2">Input Data Produk</p>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-md">
                            <div>
                                <label htmlFor=" floatingInputGrid">Nama Barang</label>
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="" value="" name="nama_barang"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor=" floatingInputGrid">Jumlah</label>
                        <input className="form-control" type="" placeholder="" aria-label="" name="jumlah"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="formFileMultiple" className="form-label text-secondary">Masukkan Foto Keadaan Barang Saat Ini</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple name="image"/>
                    </div>
                    <div className="d-flex mx-auto">
                        <input className="btn btn-primary me-2" type="submit" value="Submit" name="submit"/>
                        <input className="btn btn-danger" type="reset" value=" Clear "/>
                        <button type="reset" className="btn btn-secondary  tombol" style={{marginLeft:"10px"}}><a href="/admin/produk" className="text-white" style={{textDecoration:"none"}}>&#160;Back&#160;</a></button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}