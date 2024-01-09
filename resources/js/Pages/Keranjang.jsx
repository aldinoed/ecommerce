import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import React, { useEffect, useState } from "react";

import { Link, Head } from "@inertiajs/react";
import TransactionHeader from "@/Components/TransactionHeader";
import axios from "axios";

export default function Keranjang({auth}) {
    const [carts, setCarts] = useState([]);
    const [product, setProduct] = useState([]);
    const [displayStock, setDisplayStock] = useState([])
    
    const [image, setImage] = useState([]);
    let index = 0;
    
    useEffect(()=>{
        axios.get('/api/carts-data/'+auth.user.id)
        .then(res => {
            setCarts(res.data.carts)
        })
        .catch(err => console.log(err))
        
    }, [])
    useEffect(()=>{
        const products = []
        let images = []
        let i = 0
        async function getProduct(){
            for(let item of carts){
                try{
                    const res = await axios.get(`/api/products-data/${item.product_id}`)
                    
                    if(res.status == 200){
                        products.push(res.data.product)
                        images.push(res.data.media)
                    }else{
                        throw err;
                    }
                }catch(err){
                    err=>console.log(`Error fetching data: ${err}`);
                }
            }
            
            setProduct(products);
            setImage(images);
        }
        getProduct();
        
    }, [])

    useEffect(() =>{
        let stocks=[]
        for(let item  of product){
            stocks.push(item.product_stock);
        }
        setDisplayStock(stocks)
        console.log(displayStock)
    },[product])

    const addAmount = (ind) => {
        if(carts[ind].quantity < product[ind].product_stock){
            const newCarts = [...carts];
            newCarts[ind] = {...newCarts[ind], quantity : newCarts[ind].quantity + 1 };
            setCarts(newCarts);
        }
    }
    
    const reduceAmount = (ind) => { 
        if(carts[ind].quantity > 1){ 
            const newCarts = [...carts];
            newCarts[ind] = {...newCarts[ind], quantity : newCarts[ind].quantity - 1 };
            setCarts(newCarts);
        }
    }
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
            <div className="cartBody container pt-5" >
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
                <div className="row d-flex justify-content-between" >
                    <div className="col-md-8 pt-3 cart-list overflow-y-auto" style={{maxHeight : "70vh"}}>
                        {Array.isArray(carts) && carts.map((cart, i) => (
                        <div key={cart.cart_id} className="card shadow border-delete bg-body-tertiary mb-4">
                            <div className="ps-3 pt-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck1"
                                />
                                &#160;&#160; 
                                {product && product.length > 0 ? product[i].brand_name : (<p className="placeholder-glow pe-3 inline">
                                <span className="placeholder col-1"></span>
                              </p>)
                                }
                            </div>
                            <div className="card-body">
                                <div className="product-canvas p-1 bg-body-secondary rounded">
                                    <div className="row p-2">
                                        <div className="col-2">
                                            <img
                                                className="cart-thumb"
                                                // src={`storage/${image[i].media_file}`}
                                                src=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-7">
                                            <div className="row fw-semibold pb-1">
                                            {product && product.length > 0 ? (product[i].product_name
                                            ) : (<p className="placeholder-glow pe-3 inline">
                                                <span className="placeholder col-1"></span>
                                            </p>)
                                            }
                                            </div>
                                            <div className="row fs-6">
                                            Stok : {product && product.length > 0 ? (displayStock[i]
                                                    ) : (<p className="placeholder-glow pe-3 inline">
                                                    <span className="placeholder col-1"></span>
                                                </p>)
                                            }
                                            </div>
                                            <div className="row">Rp. {product && product.length > 0 ? (`${product[i].product_price}.-`
                                                    ) : (<p className="placeholder-glow pe-3 inline">
                                                    <span className="placeholder col-1"></span>
                                                </p>)}</div>
                                        </div>
                                        <div className="col-3 d-flex align-items-end pb-2">
                                            <span className="material-symbols-outlined tombol cart-button-hover ">
                                                delete
                                            </span>
                                            &#160;&#160;&#160;&#160;&#160;
                                            <span onClick={()=>{
                                                reduceAmount(i)
                                            }} className="material-symbols-outlined tombol cart-button-hover">
                                                do_not_disturb_on
                                            </span>
                                            <span className="ms-4 me-4">
                                                <input type="hidden" value={cart.quantity} />
                                                {cart.quantity}
                                            </span>
                                            <span onClick={()=>{
                                                addAmount(i)
                                            }} className="material-symbols-outlined tombol cart-button-hover">
                                                add_circle
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
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
        {/* </div> */}
        </>
    );
}
