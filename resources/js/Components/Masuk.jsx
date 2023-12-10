import { useState, useEffect } from "react";
import axios from "axios";
import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from "@inertiajs/react";
import { useStateContext } from "@/contexts/ContextProvider";
import Home from "@/Pages/Home";
import { Navigate } from "react-router-dom";
import useCsrfToken from "./useCsrfToken";

export default function Masuk(){
    const {token} = useCsrfToken();

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
        axios.post('/masuk', formData)
            .then(res => {
                console.log('berhasil login' + res)
                setTimeout(() => {
                    window.location.href = '/admin/dashboard' 
                }, 1000);})
            .catch(err => console.log(err))
        
    }
    return(
        <>
        <Head>
           {/* <meta name="_token" content={token} /> */}
        </Head>
        <form method="POST" action="/masuk" onSubmit={handleSubmit} className="mt-3 pt-5">
            <input type="hidden" name="_token" value={token}  />
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