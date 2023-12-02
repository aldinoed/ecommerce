import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

import { Link, Head } from "@inertiajs/react";
import MainNav from "../Components/MainNav";


export default function SearchGrid(){
    return(
    <>
    <div className="col-sm-2">
        
    </div>
    <div className="col-sm-9 d-flex justify-content-center">
    <div class="row row-cols-1 row-cols-md-2 g-4 ">
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    );
}