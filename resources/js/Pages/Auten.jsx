import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import { Link, Head } from "@inertiajs/react";

export default function login() {
    return (
        <>
            <Head title="Login" />
            {/* link(href="https://fonts.googleapis.com/css2?family=Poppins&display=swap", */}
            {/* rel="stylesheet")  */}
            {/* body */}

            <div
                className="container-fluid d-flex justify-content-center align-items-center "
                style={{ height: "100vh" }}
            >
                <div
                    className="card rounded d-flex flex-row shadow rounded-4"
                    style={{ border: "none", width: "50%", height: "65%" }}
                >
                    <div
                        className="brand-login col-sm-4 rounded-start-4"
                        style={{ width: "43%" }}
                    >
                        <h6>compnet</h6>
                        <h2>Login</h2>
                    </div>
                    <div
                        className="bg-white p-5 col-sm-6 rounded-4"
                        style={{ width: "57%" }}
                    >
                        <form
                            method="POST"
                            action="/login"
                            className="mt-4 me-1"
                        >
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    forhtml="exampleInputEmail1"
                                >
                                    Username
                                </label>
                                <input
                                    id="exampleInputEmail1"
                                    className="form-control"
                                    type="email"
                                    aria-describedby="emailHelp"
                                    name="email-login"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    forhtml="exampleInputPassword1"
                                >
                                    Password
                                </label>
                                <input
                                    id="exampleInputPassword1"
                                    className="form-control"
                                    type="password"
                                    name="password-login"
                                />
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input
                                    id="exampleCheck1"
                                    className="form-check-input"
                                    type="checkbox"
                                />
                                <label
                                    className="form-check-label"
                                    forhtml="exampleCheck1"
                                >
                                    Remember me
                                </label>
                            </div> */}
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary "
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <br />
                            <span>Tidak bisa login? Hubungi</span>
                            <a href="https://api.whatsapp.com/send?phone=6283811051466">
                                Admin
                            </a>
                        </form>
                    </div>
                </div>
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossOrigin="anonymous"
            />
        </>
    );
}
