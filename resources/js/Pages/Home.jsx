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
            <div className="container-fluid  p-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <div
                            id="carouselExampleRide"
                            class="carousel slide"
                            data-bs-ride="true"
                        >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src="img/banner2.jpg"
                                        class="rounded"
                                        alt="..."
                                        style={{
                                            minWidth: "100%",
                                            maxHeight: "400px",
                                        }}
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="img/banner3.jpg"
                                        class="rounded"
                                        alt="..."
                                        style={{
                                            minWidth: "100%",
                                            maxHeight: "400px",
                                        }}
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="..."
                                        class="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
