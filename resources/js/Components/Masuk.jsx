import { useState, useEffect } from "react";
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import { Link, Head , useForm} from "@inertiajs/react";
import axios from "axios";
import { Inertia } from '@inertiajs/inertia';
import { useStateContext } from "@/contexts/ContextProvider";
import Home from "@/Pages/Home";
import { Navigate } from "react-router-dom";
import useCsrfToken from "./useCsrfToken";

export default function Masuk(){
    const {token} = useCsrfToken();

    // const [data, setData] = useState({
    //     password: "",
    //     email : "",
    // }?? {  email: "", password: "" })

    // const handleChange = (e) => {
    //     setData({
    //         ...data,[e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault()

    //     const formData = new FormData();
    //     formData.append('password', data.password);
    //     formData.append('email', data.email);
    //     axios.post('/masuk', formData)
    //         .then(res => {
    //             console.log('berhasil login' + res)
    //             setTimeout(() => {
    //                 window.location.href = '/admin/dashboard' 
    //             }, 1000);})
    //         .catch(err => console.log(err))
        
    // }
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return(
        <>
        <Head title="Masuk">
           {/* <meta name="_token" content={token} /> */}
        </Head>
        <form method="POST" action="/masuk" onSubmit={submit} className="mt-3 pt-5">
            <input type="hidden" name="_token" value={token}  />
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputEmail1">
                    Email
                </label>
                <input id="exampleInputEmail1" className="form-control" type="email" aria-describedby="emailHelp" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)}/>
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mb-3">
                <label className="form-label" forhtml="exampleInputPassword1" >
                    Password
                </label>
                <input id="exampleInputPassword1" className="form-control" type="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)}/>
                <InputError message={errors.password} className="mt-2" />
                
            </div>
            <div className="d-flex justify-content-center mb-2">
                {/* <button className="btn btn-primary " type="submit">Masuk</button> */}
                <PrimaryButton className="ml-4" disabled={processing}>
                        Masuk
                </PrimaryButton>
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