import { useState, useEffect } from "react";
import axios from "axios";
// import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from "@inertiajs/react";
import { useStateContext } from "@/contexts/ContextProvider";
import Home from "@/Pages/Home";
import { Navigate } from "react-router-dom";
// import useCsrfToken from "./useCsrfToken";

export default function Masuk(){
    // const {token} = useCsrfToken();
    const {token} = useStateContext()
    if(token){
        window.location.href = ('/')
    }

    const [data, setData] = useState({
        password: "",
        email : "",
    }?? {  email: "", password: "" })

    const handleChange = (e) => {
        setData({
            ...data,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('password', data.password);
        formData.append('email', data.email);

            try{
                let res = await axios.post('/masuk', formData)
        // .then((response)=>{
            if(res.status === 200){
                alert('Berhasil Masuk')
                // window.location.href =('/');
            }
        // })
            }catch(error){
                // catch((error)=>{
                if (error.response && error.response.data && error.response.data.message) {
                    // Access the error message from the response
                    alert(error.response.data.message);
                } else {
                    // If the error structure is different, just show a generic error
                    alert('Login gagal. Silakan coba lagi.');
                }
            // })
            }
    }
    return(
        <>
        <Head>
           {/* <meta name="_token" content={token} /> */}
        </Head>
        <form method="POST" action="/masuk" onSubmit={handleSubmit} className="mt-3 pt-5">
            {/* <input type="hidden" name="_token" value={token}  /> */}
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputEmail1">
                    Email
                </label>
                <input id="exampleInputEmail1" className="form-control" type="email" aria-describedby="emailHelp" name="email" value={data.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputPassword1" >
                    Password
                </label>
                <input id="exampleInputPassword1" className="form-control" type="password" name="password" value={data.password} onChange={handleChange}/>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-primary " type="submit">Masuk</button>
            </div>

            <br />
            <span >Belum punya akun? <a href="/daftar">Daftar </a> sekarang</span>
            <br /><br />
            <span >Tidak bisa login? Hubungi </span>
            <a href="https://api.whatsapp.com/send?phone=6283811051466">
                Admin
            </a>
        </form>
        </>
    )
}