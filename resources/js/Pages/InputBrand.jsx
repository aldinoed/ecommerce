import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import useCsrfToken from "../Components/useCsrfToken";
import { Link, Head } from "@inertiajs/react";

export default function InputBrand(){
    const {token} = useCsrfToken();

    const[name, setName] = useState('')
    const[fileImage, setFileImage] = useState('')

    const uploadImage = async()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image',fileImage);
        let res = await axios.post('/api/input-brand', formData, {headers:{'Content-Type':'multipart/form-data'}})

        if(res){
            Swal.fire({
                title : 'Berhasil!',
                text : 'Berhasil Input Data Brand',
                icon : 'success',
            })
        }else{
            Swal.fire({
                title : 'Error',
                text : res.data.message,
                icon : 'error',
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await uploadImage()
    }
    return(
        <>
        <Head title="Input Brand">
            <meta name="csrf-token" content={token} />
        </Head>
        <div className="p-3 mb-2" style={{position:"relative" , top:"25vh"}}>
            <div className="align-self-center">
                <form style={{maxHeight: "100vh", width: "60%"}} className="p-4 m-auto shadow rounded bg-white" onSubmit={handleSubmit}>
                    <input type="hidden" value={token} name="_token" />
                    <p className="text-center fs-2">Input Data Brand</p>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-md">
                            <div>
                                <label htmlFor=" floatingInputGrid">Nama Brand</label>
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="formFileMultiple" className="form-label text-secondary">Masukkan Logo Brand</label>
                        <input className="form-control" type="file" id="formFileMultiple" multiple  accept="image/*"  onChange={(e)=>setFileImage(e.target.files[0])}/>
                    </div>
                    <div className="d-flex mx-auto">
                        <button className="btn btn-primary me-2" type="submit" name="submit">Submit</button>
                        <input className="btn btn-danger" type="reset" value="Clear"/>
                        <button type="reset" className="btn btn-secondary  tombol" style={{marginLeft:"10px"}}><a href="/admin/brand" className="text-white" style={{textDecoration:"none"}}>&#160;Back&#160;</a></button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}