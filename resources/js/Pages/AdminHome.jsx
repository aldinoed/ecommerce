import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import AdminPreview from "./AdminPreview";
import Produk from "./Produk";
import User from "./User";
import Brand from '../Components/Brand'
import Categories from "@/Components/Categories";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import MainNav from "../Components/MainNav";

import { Link, Head, useForm } from "@inertiajs/react";

export default function AdminHome({auth}){
      const {data, setData, post, processing, errors, reset} = useForm({
            email : auth.user.email,
      })
      const logout = (e) =>{
            e.preventDefault();
            post(route('logout'))
      }
    return (
      <>
      <Router>
            <Head>
                  <title>Dashboard</title>
                  <style>{`
                        *,
                        *:before,
                        *:after {
                              box-sizing: border-box;
                              margin: 0;
                              padding: 0;
                        }

                        body {
                              background: #f7f7f7;
                        }

                        .table-view {
                              height: 300px;
                        }

                        table {
                              max-height: 300px;
                        }

                        .menu-dashboard {
                              background-color: #354458;
                              width: 20%;
                              height: 100vh;
                              position: sticky;
                              color: white;
                              padding: 0px;
                        }

                        .user {
                              width: 70%;
                              height: 45px;
                              background-color: aqua;
                        }

                        .bar {
                              background-color: #44a0dc;
                              z-index: 999;
                              padding-right: 70px;
                              padding-left: 70px;
                        }

                        .navigasi .fitur:hover {
                              background-color: #28333e;
                        }

                        .fitur {
                              height: 55px;
                              border-radius: 0px;
                              width: 100%;
                        }

                        .fitur a {
                              font-size: 16px;
                        }`}
                  </style>
                  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
                  <link href="https://fonts.googleapis.com/css2?family=Viga&display=swap" rel="stylesheet"/>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>

            <div className="container-fluid">
                  <div className="bar fixed-top shadow d-flex justify-content-between align-items-center" style={{height: "50px"}} data-bs-theme="dark">
                        <h4 className=" text-white mt-2">Computer Planet</h4>
                        {auth ? (
                              <p className="text-white mt-3">{auth.user.email}</p>
                              ) : (
                              <p className="text-white mt-3">User not found</p>
                              )}
                  </div>

                  <div className=" row">
                        <div className="col-3 menu-dashboard rounded-end shadow d-flex justify-content-center flex-column align-content-between">
                              {/* <div className="d-flex flex-column justify-content-center  navigasi">
                                    <div style={{marginLeft :"40px"}} className="">
                                          <h5>halo</h5>
                                          <p>jlook</p>        
                                    </div>
                              </div> */}
                              <div className="btn fitur flex-column d-flex justify-content-evenly align-items-start" style={{paddingRight: "105px",width:"100%"}}>
                                    <div className="ps-5 ms-2">
                                          <span className="text-white  material-symbols-outlined">
                                                home
                                          </span>
                                          <a className="text-white align-items-center" href="/admin">&#160;&#160;Beranda</a>
                                    </div>
                                    <div className="btn fitur d-flex justify-content-center align-items-center ps-4">
                                          <span className="text-white  material-symbols-outlined">
                                                edit_note
                                          </span><a className="text-white align-items-center" href="peminjaman/">&#160;&#160;Data Transaksi</a>
                                    </div>
                                    <div className="btn fitur d-flex justify-content-center align-items-center">
                                          <span className="text-white  material-symbols-outlined">
                                                home_repair_service
                                          </span><a className="text-white align-items-center" href="/admin/produk">&#160;&#160;Data Produk</a>
                                    </div>
                                    <div className="btn fitur d-flex justify-content-center align-items-center">&#160;&#160;&#160; &#160;&#160;
                                          <span className="text-white  material-symbols-outlined">
                                                      manage_accounts
                                          </span><a className="text-white align-items-center" href="/admin/user">&#160;&#160;Data Pengguna</a>
                                    </div>
                                    <div className="btn fitur d-flex justify-content-center align-items-center">
                                          <span className="text-white  material-symbols-outlined">
                                          label
                                          </span><a className="text-white align-items-center" href="/admin/brand">&#160;&#160;Data Brand</a>
                                    </div>
                                    <div className="btn fitur d-flex justify-content-center align-items-center">
                                          <span className="text-white  material-symbols-outlined ps-2">
                                          category
                                          </span><a className="text-white align-items-center" href="/admin/categories">&#160;&#160;Data Kategori</a>
                                    </div>
                                    <br />
                                    <form method="POST" action="/masuk"  onSubmit={logout} className="ps-5 d-flex justify-content-center fitur" style={{paddingRight: "90px"}}>
                                          <input type="hidden" value={auth.user.email} />
                                          <button  name="logout" type="submit" className=" btn text-white d-flex align-items-center justify-content-center" style={{borderRadius:"0px", height:"50px",width: "100%"}} href="../proyek/login/">
                                                <span className="material-symbols-outlined">
                                                      logout
                                                </span>&#160;&#160;Logout
                                          </button>
                                    </form>
                              </div>
                        </div>
                        <div className="col-9  p-4 ms-auto me-auto bg-white rounded-2 pt-3 " style={{maxHeight:"76vh",marginTop: "80px"}}>
                              <Routes>
                                    <Route path="/admin" element={<AdminPreview/>}/>
                                    <Route path="/admin/produk" element={<Produk/>}/>
                                    <Route path="/admin/user" element={<User/>}/>
                                    <Route path="/admin/brand" element={<Brand/>}/>
                                    <Route path="/admin/categories" element={<Categories/>}/>
                              </Routes>
                        </div>
                  </div>
            </div> 
      </Router>     
      </>
    );
}