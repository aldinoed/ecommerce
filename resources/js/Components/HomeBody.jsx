import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import { Link, Head } from "@inertiajs/react";

export default function HomeBody(){
    return(
        <>
            <div className="mt-5 pt-5">
                <div className="row me-2">
                    <div className="col-3 align-items-center d-flex flex-column justify-content-between ms-4">
                        <img style={{minWidth:"46%"}} src="img/main1.png" alt="" />
                        <img style={{minWidth:"49%"}} src="img/main2.png" alt="" />
                    </div>
                    <div className="col-8">
                        <div
                            id="carouselExampleRide"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="img/banner2.jpg"
                                        className="rounded"
                                        alt="..."
                                        style={{
                                            minWidth: "100%",
                                            maxHeight: "400px",
                                        }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="img/banner3.jpg"
                                        className="rounded"
                                        alt="..."
                                        style={{
                                            minWidth: "100%",
                                            maxHeight: "400px",
                                        }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="img/banner1.png"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{
                                            minWidth: "100%",
                                            minHeight: "400px",
                                        }}
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    
                    <div className="col-sm-12">
                        <div className="container">
                            <h5 className="ms-5 ps-1 ">Shop by brand</h5>
                        </div>
                    </div>
                </div>
                <div className="row mt-2  d-flex justify-content-center ">
                    <div className="col-sm-5 p-3 d-flex justify-content-end align-items-end">
                        <img src="img/sub1.png" style={{minWidth: "92%", height: "250px"}} alt="" />
                    </div>
                    <div className="col-sm-6 p-3 d-flex justify-content-start align-items-start">
                        <img src="img/sub2.png" style={{minWidth: "93%", height: "320px"}} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}