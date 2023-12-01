import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import MainNav from "../Components/MainNav";
import { Link, Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Compnet"></Head>
            <MainNav></MainNav>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-3 align-items-center d-flex flex-column justify-content-evenly">
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
            </div>
        </>
    );
}
