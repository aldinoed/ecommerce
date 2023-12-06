import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import { useState, useEffect } from "react";
import useCsrfToken from "../Components/useCsrfToken";
// import MainNav from "../Components/MainNav";

import { Link, Head } from "@inertiajs/react";

export default function InputBrand(){
    const {token} = useCsrfToken();

    const [data, setData] = useState({
        cat: "",
    }?? {  cat: "" })

    const handleChange = (e) => {
        setData({
            ...data,[e.target.name]: e.target.value
        })
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('cat', data.cat);
        console.log(formData);

        axios.post('/admin/input-cat', formData)
            .then((response)=>{
                if(response.status === 200){
                    alert('Berhasil Input Category')
                }
            })
            .catch((error)=>{
                if (error.response && error.response.data && error.response.data.message) {
                    // Access the error message from the response
                    alert(error.response.data.message);
                } else {
                    // If the error structure is different, just show a generic error
                    alert('Input Category gagal. Silakan coba lagi.');
                }
            })
    }
    return(
        <>
        <Head title="Input Brand"></Head>
        <div className="p-3 mb-2" style={{marginTop:"14%"}}>
            <div className="align-self-center ">
                <form style={{maxHeight: "100vh", width: "60%"}} className="p-4 m-auto shadow rounded bg-white" method="POST" action="/admin/input-cat" onSubmit={handleSubmit}>
                    <input type="hidden" value={token} name="_token" />
                    <p className="text-center fs-2">Input Data Category</p>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-md">
                            <div>
                                <label htmlFor=" floatingInputGrid">Nama Category</label>
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="" value={data.cat} name="cat" onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mx-auto mt-3">
                        <input className="btn btn-primary me-2" type="submit" value="Submit" name="submit"/>
                        <input className="btn btn-danger" type="reset" value="Clear"/>
                        <button type="reset" className="btn btn-secondary  tombol" style={{marginLeft:"10px"}}><a href="/admin/cat" className="text-white" style={{textDecoration:"none"}}>&#160;Back&#160;</a></button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}