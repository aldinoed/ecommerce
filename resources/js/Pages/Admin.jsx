import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";

// import MainNav from "../Components/MainNav";

import { Link, Head } from "@inertiajs/react";

export default function Admin(){
    return (
      <>
      <Head>
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
      </Head>

      <div className="container-fluid">
            <div className="bar fixed-top shadow d-flex justify-content-between align-items-center" style={{height: "50px"}} data-bs-theme="dark">
                  <h4 className=" text-white mt-2">Smart Laboratory Equipment Loan System</h4>
                  <p className="text-white mt-3"></p>
            </div>

            <div className=" row">
                  <div className="col-3 menu-dashboard rounded-end shadow d-flex justify-content-center flex-column align-content-between">
                        <div className="d-flex flex-column justify-content-center  navigasi">
                              <div style={{marginLeft :"40px"}} className="">
                                    <h5>halo</h5>
                                    <p>jlook</p>        
                              </div>
                        </div>
                        <div className="btn fitur flex-column d-flex justify-content-center align-items-center" style={{paddingRight: "105px",width:"100%"}}>
                              <div>
                                    <span className="text-white  material-symbols-outlined">
                                          home
                                    </span>
                                          <a className="text-white align-items-center" href="">&#160;&#160;Beranda</a>
                              </div>
                              <div className="btn fitur d-flex justify-content-center align-items-center" style={{paddingRight: "40px"}}>
                                    <span className="text-white  material-symbols-outlined">
                                          edit_note
                                    </span><a className="text-white align-items-center" href="peminjaman/">&#160;&#160;Data Peminjaman</a>
                              </div>
                              <div className="btn fitur d-flex justify-content-center align-items-center">
                                    <span className="text-white  material-symbols-outlined">
                                          home_repair_service
                                    </span><a className="text-white align-items-center" href="invman/">&#160;&#160;Manajemen Peralatan</a>
                              </div>
                              <div className="btn fitur d-flex justify-content-center align-items-center">&#160;&#160;
                                          <span className="text-white  material-symbols-outlined">
                                                      manage_accounts
                                          </span><a className="text-white align-items-center" href="userman/">&#160;&#160;Manajemen Pengguna</a>
                              </div>
                              {/* <form method="post" className="d-flex justify-content-center fitur" style={{paddingRight: "100px"}}>
                                    <button name="logout" type="submit" formAction="logout.php" className=" btn text-white d-flex align-items-center justify-content-center" style={{borderRadius:"0px", height:"50px",width: "100%"}}>
                                          <span className="material-symbols-outlined">
                                                logout
                                          </span>&#160;&#160;Logout
                                    </button>
                              </form> */}
                                    {/* <div className="btn fitur d-flex justify-content-center align-items-center " style={{paddingRight:"60px"}}>
                                          <span className="material-symbols-outlined text-white">
                                                home_repair_service
                                          </span><a className="text-white align-items-center" href="pinjam/">&#160;&#160;Pinjam Barang</a>
                                    </div>
                                    <form method="post" className="d-flex justify-content-center fitur" style={{paddingRight: "100px"}}>
                                          <button name="logout" type="submit" formAction="logout.php" className=" btn text-white d-flex align-items-center justify-content-center" style={{borderRadius:"0px", height:"50px",width: "100%"}}>
                                                <span className="material-symbols-outlined">
                                                      logout
                                                </span>&#160;&#160;Logout
                                          </button>
                                    </form> */}
                              
                              <div method="post" className="d-flex justify-content-center fitur" style={{paddingRight: "100px"}}>
                                    <a name="login" type="submit" className=" btn text-white d-flex align-items-center justify-content-center" style={{borderRadius:"0px", height:"50px",width: "100%"}} href="../proyek/login/">
                                          <span className="material-symbols-outlined">
                                                logout
                                          </span>&#160;&#160;Login
                                    </a>
                              </div>
                        </div>
                  </div>  
                  <div className="col-9   ms-auto me-auto bg-white rounded-2 pt-3 " style={{maxHeight:"76vh",marginTop: "80px"}}>
                        <div className="table-view overflow-auto" style={{height:"80%"}}>
                              <table className="table table-striped ">
                                    <thead>
                                          <tr>
                                               <th scope="col">Lihat</th>
                                                <th scope="col">Id Peminjaman</th>
                                                <th scope="col">Tanggal Peminjaman</th>
                                                <th scope="col">Tanggal Pengembalian</th>
                                         </tr>
                                    </thead>
                                          
                                     <tbody>
                                          <tr>
                                                <td>
                                                      <form action="preview.php" method="GET">
                                                            <button className="btn" name="id_peminjaman" value="<?= $user['id_peminjaman']; ?>">
                                                                  <span className="material-symbols-outlined">
                                                                        open_in_new
                                                                  </span>
                                                            </button>
                                                      </form>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      </div>      
      </>
    );
}