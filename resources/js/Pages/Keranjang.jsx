import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import React, { useEffect, useState } from "react";

import { Link, Head } from "@inertiajs/react";
import TransactionHeader from "@/Components/TransactionHeader";
import axios from "axios";

export default function Keranjang({auth}) {
    const [amount, setAmount] = React.useState(1);
    const [carts, setCarts] = React.useState('')
    const addAmount = ()=> { setAmount(amount + 1) }
    const reduceAmount = () => { if(amount > 1){ setAmount(amount - 1)} }
    
    useEffect(()=>{
        axios.get('/api/carts-data/'+auth.user.id)
            .then(res => setCarts(res))
            .catch(err => console.log(err))
    })
    
    useEffect(()=>{
        axios.get('/api/user-data/'+auth.user.email)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Head title="keranjang">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </Head>
            <TransactionHeader></TransactionHeader>
            <div className="cartBody container pt-5">
                <div className="row" style={{ marginTop: "4%" }}>
                    <h4 className="fw-bold ps-4">Keranjang</h4>
                </div>
                <div className="row mt-4">
                    <div className="form-check">
                        <input
                            className="form-check-input ms-1"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label
                            className="form-check-label ms-2"
                            htmlFor="defaultCheck1"
                        >
                            Pilih semua
                        </label>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-md-8 pt-3">
                        {Array.isArray(carts) && carts.map(cart => (<div className="card shadow border-delete bg-body-tertiary">
                            <div className="ps-3 pt-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck1"
                                />
                                &#160; {axios.get('/api/products-data/'+cart.product_id)}
                            </div>
                            <div className="card-body">
                                <div className="product-canvas p-1 bg-body-secondary rounded">
                                    <div className="row p-2">
                                        <div className="col-2">
                                            <img
                                                className="cart-thumb"
                                                src="img/intel.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-7">
                                            <div className="row fw-semibold pb-1">
                                                Processor Intel Core i9
                                            </div>
                                            <div className="row fs-6">
                                                Stok : 2005
                                            </div>
                                            <div className="row">Rp. 15000</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-end pb-2">
                                            <span className="material-symbols-outlined tombol cart-button-hover ">
                                                delete
                                            </span>
                                            &#160;&#160;&#160;&#160;&#160;
                                            <span onClick={reduceAmount} className="material-symbols-outlined tombol cart-button-hover">
                                                do_not_disturb_on
                                            </span>
                                            <span className="ms-4 me-4">
                                                {amount}
                                            </span>
                                            <span onClick={addAmount} className="material-symbols-outlined tombol cart-button-hover">
                                                add_circle
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                    <div className="col-md-4 p-3">
                        <div
                            className="card border-delete shadow bg-body-tertiary"
                            style={{ backgroundColor: "#f8f8f8" }}
                        >
                            <div className="ps-3 pt-3 divider-section">
                                <h5 className="card-title">
                                    Ringkasan Belanja
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="baris-harga">
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text">
                                            <b>Total Harga (1 Barang)</b>
                                        </p>
                                        <p>Rp. 1000000,-</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text">
                                            <b>Total Diskon</b>
                                        </p>
                                        <p>Rp. 700000,-</p>
                                    </div>
                                </div>
                                <div className="kolom-harga d-flex justify-content-between">
                                    <p className="card-text">
                                        <b>Total Harga</b>
                                    </p>
                                    <p>Rp. 300000,-</p>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-primary tombol"
                                    style={{ minWidth: "100%" }}
                                >
                                    Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
