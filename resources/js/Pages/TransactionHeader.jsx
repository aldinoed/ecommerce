import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import { Link, Head } from "@inertiajs/react";

export default function TransactionHeader() {
    return (
        <>
            <Head title="Keranjang">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </Head>
            <nav className="navbar bg-primary p-3">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="dashboard">
                        <span class="material-symbols-outlined">
                            arrow_back
                        </span>
                    </a>
                    <h3 className="text-center">Keranjang Belanja</h3>
                </div>
            </nav>
            <script src="../jquery.js"></script>
        </>
    );
}
