import useCsrfToken from "./useCsrfToken";
import React, {useState, useEffect} from "react";
import axios  from "axios";
// import { redirect } from "react-router-dom";

export default function Daftar(){
    const {token} = useCsrfToken();

    const [data, setData] = useState({
        username: "",
        fullname: "",
        password: "",
        email : "",
    }?? {  email: "", username: "", fullname: "", password: "" })

    const handleChange = (e) => {
        setData({
            ...data,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('fullname', data.fullname);
        formData.append('password', data.password);
        formData.append('email', data.email);

        await axios.post('/daftar', formData)
            .then((response)=>{
                if(response.status === 200){
                   alert('Berhasil Daftar')
                    // redirect('/masuk')
                }
            })
            .catch((error)=>{
                if (error.response && error.response.data && error.response.data.message) {
                    // Access the error message from the response
                    alert(error.response.data.message);
                } else {
                    // If the error structure is different, just show a generic error
                    alert('Registrasi gagal. Silakan coba lagi.');
                }
            })
    }
    return(
        <>
        {/* <CsrfToken> */}
        <form method="POST" action="/daftar" className="mt-4 me-1" onSubmit={handleSubmit} >
            <input type="hidden" name="_token" value={token} />
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputEmail1">
                    Email
                </label>
                <input id="exampleInputEmail1" className="form-control" type="email" aria-describedby="emailHelp" name="email" value={data.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputEmail1">
                    Username
                </label>
                <input id="exampleInputUsername" className="form-control" type="text" aria-describedby="emailHelp" name="username" value={data.username} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputEmail1">
                    Fullname
                </label>
                <input id="exampleInputFullname" className="form-control" type="text" aria-describedby="emailHelp" name="fullname" value={data.fullname} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputPassword1" >
                    Password
                </label>
                <input id="exampleInputPassword1" className="form-control" type="password" name="password"value={data.password} onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary " type="submit">Daftar</button>
            </div>
            <br />
            <span>Tidak bisa daftar? Hubungi</span>
            <a href="https://api.whatsapp.com/send?phone=6283811051466">
                Admin
            </a>
        </form>
        {/* </CsrfToken> */}
        </>
    )
}