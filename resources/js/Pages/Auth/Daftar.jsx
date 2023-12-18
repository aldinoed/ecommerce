import useCsrfToken from "../../Components/useCsrfToken";
import React, {useState, useEffect} from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../css/app.css";
import "../../../css/my.css";
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import { Link, Head , useForm} from "@inertiajs/react";
import axios  from "axios";
// import { redirect } from "react-router-dom";

export default function Daftar(){
    const {token} = useCsrfToken();

    // const [data, setData] = useState({
    //     username: "",
    //     fullname: "",
    //     password: "",
    //     email : "",
    // }?? {  email: "", username: "", fullname: "", password: "" })

    // const handleChange = (e) => {
    //     setData({
    //         ...data,[e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const formData = new FormData();
    //     formData.append('username', data.username);
    //     formData.append('fullname', data.fullname);
    //     formData.append('password', data.password);
    //     formData.append('email', data.email);

    //     await axios.post('/daftar', formData)
    //         .then((response)=>{
    //             if(response.status === 200){
    //                alert('Berhasil Daftar')
    //                window.location.href= '/masuk'
    //                return
    //             }
    //         })
    //         .catch((error)=>{
    //             if (error.response && error.response.data && error.response.data.message) {
    //                 // Access the error message from the response
    //                 alert(error.response.data.message);
    //             } else {
    //                 // If the error structure is different, just show a generic error
    //                 console.log('Registrasi gagal. Silakan coba lagi.' + error);
    //             }
    //         })
    // }
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        fullname: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        let res = post(route('daftar'));
        console.log(res)
    };
    return(
        <>
        <Head title="Daftar"></Head>
        <div
                className="container-fluid d-flex justify-content-center align-items-center "
                style={{ height: "100vh" }}
            >
                <div
                    className="card rounded d-flex flex-row shadow rounded-4"
                    style={{ border: "none", width: "55%", height: "70%" }}
                >
                    <div
                        className="brand-login pt-4 ps-4 col-sm-4 rounded-start-4"
                        style={{ width: "43%" }}
                    >
                        <h2 className="text-primary fw-bolder">Compnet</h2>
                    </div>
                    <div
                        className="bg-white p-4 col-sm-6 rounded-4"
                        style={{ width: "57%" }}
                    >
                        <form method="POST" action="/daftar" className="mt-3 me-1" onSubmit={submit} >
                            <input type="hidden" name="_token" value={token} />
                            <div className="mb-3">
                                <label className="form-label" forhtml="exampleInputEmail1">
                                    Email
                                </label>
                                <input id="exampleInputEmail1" className="form-control" type="email" aria-describedby="emailHelp" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" forhtml="exampleInputEmail1">
                                    Username
                                </label>
                                <input id="exampleInputUsername" className="form-control" type="text" aria-describedby="emailHelp" name="username" value={data.username} onChange={(e) => setData('username', e.target.value)}/>
                                <InputError message={errors.username} className="mt-2" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" forhtml="exampleInputEmail1">
                                    Fullname
                                </label>
                                <input id="exampleInputFullname" className="form-control" type="text" aria-describedby="emailHelp" name="fullname" value={data.fullname} onChange={(e) => setData('fullname', e.target.value)}/>
                                <InputError message={errors.fullname} className="mt-2" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" forhtml="exampleInputPassword1" >
                                    Password
                                </label>
                                <input id="exampleInputPassword1" className="form-control" type="password" name="password"value={data.password} onChange={(e) => setData('password', e.target.value)} />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="d-flex justify-content-center">
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Daftar
                            </PrimaryButton>
                            </div>
                            <br />
                            <span className="">Sudah punya akun? </span>
                            <a href="/masuk">
                                Masuk
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}