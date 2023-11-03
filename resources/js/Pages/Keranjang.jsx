import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import { Link, Head } from "@inertiajs/react";
import TransactionHeader from "@/Components/TransactionHeader";

export default function Keranjang(namaProduk, harga, stok, namaBrand) {
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
                    <h4 className="fw-bold">Keranjang</h4>
                </div>
                <div className="row mt-4">
                    <div className="form-check">
                        <input
                            class="form-check-input ms-1"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                        />
                        <label
                            className="form-check-label ms-2"
                            for="defaultCheck1"
                        >
                            Pilih semua
                        </label>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-md-8 pt-3">
                        <div className="card shadow border-delete bg-body-tertiary">
                            <div class="ps-3 pt-3">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck1"
                                />
                                &#160; Featured
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
                                            <span class="material-symbols-outlined tombol cart-button-hover">
                                                delete
                                            </span>
                                            &#160;&#160;&#160;&#160;&#160;
                                            <span class="material-symbols-outlined tombol cart-button-hover">
                                                do_not_disturb_on
                                            </span>
                                            <span>
                                                &#160;&#160;&#160; 1
                                                &#160;&#160;&#160;
                                            </span>
                                            <span class="material-symbols-outlined tombol cart-button-hover">
                                                add_circle
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <p class="card-text">
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
