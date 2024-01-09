import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../css/app.css";
import "../../css/my.css";

import { usePage } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
import useCsrfToken from "./useCsrfToken";

import { Link, Head } from "@inertiajs/react";

export default function MainNav(user) {
    const {token} = useCsrfToken();
    const[search, setSearch] = useState('')
    // const { url } = usePage();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Redirect to the search page with the entered search term
    //     window.location.href = `/search/${search}`;
    //   };
    return (
        <>
            <div className="container-fluid bg-white border-bottom pb-4 pt-3 shadow fixed-top">
                <div className="row d-flex align-items-center justify-content-evenly">
                    <div className="col-1 d-flex justify-content-center">
                        <a href="/"><img src="img/icon.png" alt="" /></a>
                    </div>
                    <div className="col-1">
                        <div className="row">
                        <div className="dropdown col-2 ">
                            <button className="btn bg-white d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Kategori
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                <li><a className="dropdown-item" href="#">Pembelian</a></li>
                                <li><a className="dropdown-item" href="#">re</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-7 ">
                        <form
                            className="d-flex input-group justify-content-center "
                            role="search" method="get" action={'/search/'+{}}
                        >
                            <button className="input-group-text bg-primary" id="basic-addon1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <input
                                className="form-control "
                                type="search"
                                placeholder="Cari di Computer Planet"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>
                    
                    <div className="col-1 border-end d-flex justify-content-center">
                        <a href="/keranjang" className="href">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                fill="currentColor"
                                className="bi bi-cart4"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </a>
                    </div>
                        {user.user ? (
                            <div className="col-2">
                                <a href="/user/dashboard" className=" text-black user-dashboard-button d-flex justify-content-center rounded-3 align-items-center">
                                    <span className="material-symbols-outlined me-2">account_circle</span> {user.user}</a>
                            </div>
                        ) : (
                        <div className="col-2 d-flex justify-content-evenly">
                            <div className="btn border bg-white"><a href={route('masuk')} className="text-black">Masuk</a></div>
                            <div className="btn bg-primary"><a href={route('daftar')} className="text-white">Daftar</a></div>
                        </div>)}
                </div>
            </div>
        </>
    );
}
