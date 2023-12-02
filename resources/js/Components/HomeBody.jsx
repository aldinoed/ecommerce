import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";


export default function HomeBody(){
    return(
        <>
        
                <div className="row me-2">
                    <div className="col-3 align-items-end d-flex flex-column justify-content-between ">
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
                <div className="row mt-2 d-flex justify-content-center ">
                    <div className="col-sm-5 d-flex justify-content-center align-items-end">
                        <img src="img/sub1.png" style={{minWidth: "85%", height: "240px"}} alt="" />
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                        <img src="img/sub2.png" style={{minWidth: "85%", height: "300px"}} alt="" />
                    </div>
                </div>
        </>
    )
}