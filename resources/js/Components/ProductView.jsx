import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import $ from 'jquery';
import React from "react";

export default function ProductView({auth}){
    const [amount, setAmount] = React.useState(1);
    const addAmount = ()=> { setAmount(amount + 1) }
    const reduceAmount = () => { if(amount > 1){ setAmount(amount - 1)} }
    const [userId, setUserId] = useState('');
    const [product, setProduct] = useState('');
    const [media, setMedia] = useState('');
    // setProduct(1);
    const {productId} = useParams();
    useEffect(()=>{
        axios.get(`/api/products-data/${productId}`)
            .then(res=>{
                setProduct(res.data.product);
                setMedia(res.data.media)
                console.log(res.data)
                })
            .catch(err=>console.log(`Error fetching data: ${err}`))
    }, [])

    const [activeTab, setActiveTab] = useState('deskripsi');

    $(".nav-link").click(function () {
        const linked = $(this).attr("href");
        const linkedSection = $(linked);
        $("html, body").animate({
          scrollTop: linkedSection.offset().top - 50,
        });
      
        // Extract the tabId from the href attribute
        const tabId = linked.substring(1); // Remove the '#' symbol
      
        // Call the handleTabClick function
        handleTabClick(tabId);
      });
    
    // const handleTabClick = (tabId) => {
    //     setActiveTab(tabId);
    //     setTimeout(()=>{
    //         scrollToContent(tabId)
    //     }, 200)
    // };

    // const scrollToContent = (tabId) => {
    //     const element = document.getElementById(tabId);
    //     if (element) {
    //         element.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //         });
    //     }
    // };
    console.log(auth)
    const addToCart = (productId) => {
        if(auth === null){
            window.location.href = '/masuk'
        }else{
            setUserId(auth.user.user_id)
        }
    }
    return(
        <>
            <div className="container shadow card p-4" style={{marginTop:"6%", minHeight:"40vh", maxWidth:"83%", border : "none"}}>
                <div className="rounded-2  row p-4" style={{minHeight:"100%"}}>
                    <div style={{maxHeight:"63vh", maxWidth:"70vh", padding: "0px !important"}} className="rounded-2 shadow col-sm-6 d-flex justify-content-center align-items-center">
                        <img src={`http://127.0.0.1:8001/storage/${media.media_file}`} style={{objectFit:"contain", maxWidth:"90%", height: "auto"}} alt="" />
                    </div>
                    <div className="col-sm-6 ms-4 ps-5">
                        <div className="row">
                                {product === null ? <span className="fw-light fs-5 placeholder col-12">
                                </span> :  <img src={`http://127.0.0.1:8001/storage/${product.brand_image}`} style={{maxHeight:"3%", maxWidth:"30%"}}/>}
                        </div>
                        <div className="row mt-4" >
                            <p className="placeholder-glow fw-light fs-5">
                            {product === null ? <span className="fw-light fs-5 placeholder col-12">
                            </span> :  product.product_name}
                            </p>
                        </div>
                        <div className="row mt-5 mb-4">
                            <h1 className="placeholder-glow fw-bold ">
                            {product === null ? <span className="fw-light fs-5 placeholder col-12">
                            </span> : 'Rp. '+ product.product_price + ',-'}
                            </h1>
                        </div>
                        <div className="row mt-1" >
                            <p className="placeholder-glow fw-light fs-6">
                            {product === null ? <span className="fw-light fs-5 placeholder col-12">
                            </span> :'Stok : ' + product.product_stock}
                            </p>
                        </div>
                        <div className="d-flex ps-2 flex-row row mt-1 rounded-3" style={{maxWidth: "43%", maxHeight:"31px"}}>
                            <div className={`col-2 rounded ${amount === 1 ? 'bg-dark-subtle' : 'bg-primary'} d-flex justify-content-center align-items-center  fs-4 `} style={{height:"30px", cursor: "pointer"}} onClick={reduceAmount}>-</div>
                            <input className="col-6 fw-bold text-center" style={{maxHeight:"31px", border: "none"}} type="text" value={amount}/>
                            <div className={`col-2 d-flex justify-content-center align-items-center fs-4 rounded ${amount === product.product_stock ? 'bg-dark-subtle' : 'bg-primary'}`} style={{height:"30px", cursor: "pointer"}} onClick={amount !== product.product_stock ? addAmount : null} disabled={amount === product.product_stock}>+</div>
                        </div>
                        <div className="row mt-4">
                            <button style={{height: "50px"}} className="me-3 col-5 p-2 btn btn-primary">
                                Beli Sekarang
                            </button>
                            <button onClick={()=>addToCart(product.product_id)} style={{height: "50px"}} className="col-6 p-2 btn btn-white border">
                                Tambah ke Keranjang
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 p-4" style={{minHeight:"100%"}}>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'deskripsi'? 'active' : ''}`} href="#deskripsi" onClick={()=> handleTabClick('deskripsi')}>Deskripsi</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'rating'? 'active' : ''}`} href="#rating" onClick={()=> handleTabClick('review')}>Rating</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'review'? 'active' : ''}`} href="#review">Review</a>
                        </li>
                    </ul>
                    <div className="row pt-5" id="deskripsi">
                        <h3 className="text-center" >Deskripsi Produk</h3>
                        <p className="mt-4 j">{product.description}</p>
                    </div>
                    <div className="row pt-5" >
                        <h3 className="text-center" id="rating">Rating</h3>
                        <p className="mt-4 fs-3 fw-bold">Tidak Ada Data</p>
                    </div>
                    <div className="row pt-5" >
                        <h3 className="text-center" id="review">Review</h3>
                        <p className="mt-4 j">Tidak Ada Data</p>
                    </div>
                </div>
            </div>
        </>
    )
}