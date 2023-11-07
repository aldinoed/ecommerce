import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import MainNav from "../Components/MainNav";
import { Link, Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Compnet"></Head>
            <div className="container-fluid pt-2">
                <MainNav></MainNav>
            </div>
        </>
    );
}
