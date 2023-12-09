import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import Masuk from '../Components/Masuk';
import Daftar from '../Components/Daftar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Head } from "@inertiajs/react";

export default function Autentikasi() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/masuk" element={<Head title="Masuk" />}/>
                <Route path="/daftar" element={<Head title="Daftar" />}/>
            </Routes>

            <div
                className="container-fluid d-flex justify-content-center align-items-center "
                style={{ height: "100vh" }}
            >
                <div
                    className="card rounded d-flex flex-row shadow rounded-4"
                    style={{ border: "none", width: "55%", height: "70%" }}
                >
                    <div
                        className="brand-login pt-4 ps-4 col-sm-4 rounded-start-4"
                        style={{ width: "43%" }}
                    >
                        <h2 className="text-primary fw-bolder">Compnet</h2>
                    </div>
                    <div
                        className="bg-white p-4 col-sm-6 rounded-4"
                        style={{ width: "57%" }}
                    >
                        <Routes>
                            <Route path="/masuk" element={<h2 className="text-center mb-5">Masuk</h2>}/>
                            <Route path="/daftar" element={<h2 className="text-center">Daftar</h2>}/>
                        </Routes>
                        <Routes>
                            <Route path="/masuk" element={<Masuk/>}></Route>
                            <Route path="/daftar" element={<Daftar/>}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossOrigin="anonymous"
            />
        </Router>
        </>
    );
}
