import { jsx, Fragment, jsxs } from "react/jsx-runtime";
/* empty css             */import AdminPreview from "./AdminPreview-d2f916c5.js";
import Produk from "./Produk-d6dca857.js";
import User from "./User-992bc530.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Head } from "@inertiajs/react";
function Brand() {
  const [brands, setBrands] = useState([]);
  let i = 1;
  useEffect(() => {
    axios.get("/api/brands-data").then((res) => {
      console.log(res.data);
      setBrands(res.data.brands);
    }).catch((error) => {
      console.log("Error fetching data: ", error);
    });
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "shadow p-3 rounded-2", children: [
    /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-between mb-2", children: /* @__PURE__ */ jsxs("button", { className: "btn-primary btn align-items-baseline d-flex justify-content-evenly", style: { minWidth: "90px" }, children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-lg float-start ", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }) }),
      /* @__PURE__ */ jsx("a", { href: "/admin/input-brand/", className: "text-white", children: "Tambah" })
    ] }) }),
    /* @__PURE__ */ jsxs("table", { className: "table table-striped table-hover", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: "No." }),
        /* @__PURE__ */ jsx("td", { children: "Nama Brand" }),
        /* @__PURE__ */ jsx("td", { children: "Logo Brand" }),
        /* @__PURE__ */ jsx("td", { className: "ps-4", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: Array.isArray(brands) && brands.map((brand) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: i++ }),
        /* @__PURE__ */ jsx("td", { children: brand.brand_name }),
        /* @__PURE__ */ jsx("td", { className: "", children: /* @__PURE__ */ jsx("img", { className: "", src: "http://127.0.0.1:8000/storage/" + brand.brand_image, style: { height: "20px" }, alt: "" }) }),
        /* @__PURE__ */ jsxs("td", { className: "", children: [
          /* @__PURE__ */ jsx("form", { method: "GET", action: "update.php", className: "inline", children: /* @__PURE__ */ jsx("button", { className: "btn btn-warning", name: "update", value: brand.brand_id, children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-pencil-square", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" }),
            /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" })
          ] }) }) }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-danger inline ms-2", name: "delete", onClick: () => handleDelete(brand.brand_id), children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-trash", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" }),
            /* @__PURE__ */ jsx("path", { d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" })
          ] }) })
        ] })
      ] }, i)) })
    ] })
  ] }) });
}
function Categories() {
  let i = 1;
  const [cats, setCats] = useState([]);
  useEffect(() => {
    axios.get("/api/categories-data").then((res) => {
      setCats(res.data.categories);
    }).catch((error) => {
      console.log("Error fetching data: ", error);
    });
  }, []);
  const handleDelete2 = async (catId) => {
    try {
      let res = await axios.delete(`/api/delete-category/${catId}`);
      if (res.status === 200) {
        alert(res.data.message);
        const newCatData = cats.filter((item) => item.category_id !== catId);
        setCats(newCatData);
      } else {
        console.error("Error deleting category:", res.data.message);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Error deleting category. Check console for details.");
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "shadow p-3 rounded-2", children: [
    /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-between mb-2", children: /* @__PURE__ */ jsxs("button", { className: "btn-primary btn align-items-baseline d-flex justify-content-evenly", style: { minWidth: "90px" }, children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-lg float-start ", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }) }),
      /* @__PURE__ */ jsx("a", { href: "/admin/input-cat/", className: "text-white", children: "Tambah" })
    ] }) }),
    /* @__PURE__ */ jsxs("table", { className: "table table-striped table-hover ", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "text-center", children: "No." }),
        /* @__PURE__ */ jsx("td", { className: "text-center", children: "Id Kategori" }),
        /* @__PURE__ */ jsx("td", { className: "text-center", children: "Nama Kategori" }),
        /* @__PURE__ */ jsx("td", { className: "text-center", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: Array.isArray(cats) && cats.map((cat) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "text-center", children: i++ }),
        /* @__PURE__ */ jsx("td", { className: "text-center", children: cat.category_id }),
        /* @__PURE__ */ jsx("td", { className: "text-center", children: cat.category_name }),
        /* @__PURE__ */ jsxs("td", { className: "d-flex flex-row justify-content-around", children: [
          /* @__PURE__ */ jsx("form", { method: "GET", action: "update.php", children: /* @__PURE__ */ jsx("button", { className: "btn btn-warning", name: "update", value: cat.category_id, children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-pencil-square", viewBox: "0 0 7 17", children: [
            /* @__PURE__ */ jsx("path", { d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" }),
            /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" })
          ] }) }) }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-danger", name: "delete", onClick: () => handleDelete2(cat.category_id), children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "17", height: "17", fill: "currentColor", className: "bi bi-trash", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" }),
            /* @__PURE__ */ jsx("path", { d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" })
          ] }) })
        ] })
      ] }, i)) })
    ] })
  ] }) });
}
function AdminHome(props) {
  const { flash } = props;
  const user = flash ? flash.user : null;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Dashboard" }),
      /* @__PURE__ */ jsx("style", { children: `
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
                        }` }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap", rel: "stylesheet" }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Viga&display=swap", rel: "stylesheet" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
      /* @__PURE__ */ jsxs("div", { className: "bar fixed-top shadow d-flex justify-content-between align-items-center", style: { height: "50px" }, "data-bs-theme": "dark", children: [
        /* @__PURE__ */ jsx("h4", { className: " text-white mt-2", children: "Computer Planet" }),
        user ? /* @__PURE__ */ jsx("p", { className: "text-white mt-3", children: user.email }) : /* @__PURE__ */ jsx("p", { className: "text-white mt-3", children: "User not found" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-3 menu-dashboard rounded-end shadow d-flex justify-content-center flex-column align-content-between", children: /* @__PURE__ */ jsxs("div", { className: "btn fitur flex-column d-flex justify-content-evenly align-items-start", style: { paddingRight: "105px", width: "100%" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "ps-5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white  material-symbols-outlined", children: "home" }),
            /* @__PURE__ */ jsx("a", { className: "text-white align-items-center", href: "/admin", children: "  Beranda" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "btn fitur d-flex justify-content-center align-items-center ps-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white  material-symbols-outlined", children: "edit_note" }),
            /* @__PURE__ */ jsx("a", { className: "text-white align-items-center", href: "peminjaman/", children: "  Data Transaksi" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "btn fitur d-flex justify-content-center align-items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white  material-symbols-outlined", children: "home_repair_service" }),
            /* @__PURE__ */ jsx("a", { className: "text-white align-items-center", href: "/admin/produk", children: "  Data Produk" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "btn fitur d-flex justify-content-center align-items-center", children: [
            "      ",
            /* @__PURE__ */ jsx("span", { className: "text-white  material-symbols-outlined", children: "manage_accounts" }),
            /* @__PURE__ */ jsx("a", { className: "text-white align-items-center", href: "/admin/user", children: "  Data Pengguna" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "btn fitur d-flex justify-content-center align-items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white  material-symbols-outlined", children: "label" }),
            /* @__PURE__ */ jsx("a", { className: "text-white align-items-center", href: "/admin/brand", children: "  Data Brand" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "btn fitur d-flex justify-content-center align-items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white  material-symbols-outlined ps-2", children: "category" }),
            /* @__PURE__ */ jsx("a", { className: "text-white align-items-center", href: "/admin/categories", children: "  Data Kategori" })
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("div", { method: "post", className: "ps-5 d-flex justify-content-center fitur", style: { paddingRight: "90px" }, children: /* @__PURE__ */ jsxs("a", { name: "logout", type: "submit", className: " btn text-white d-flex align-items-center justify-content-center", style: { borderRadius: "0px", height: "50px", width: "100%" }, href: "../proyek/login/", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "logout" }),
            "  Logout"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-9  p-4 ms-auto me-auto bg-white rounded-2 pt-3 ", style: { maxHeight: "76vh", marginTop: "80px" }, children: /* @__PURE__ */ jsxs(Routes, { children: [
          /* @__PURE__ */ jsx(Route, { path: "/admin", element: /* @__PURE__ */ jsx(AdminPreview, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "/admin/produk", element: /* @__PURE__ */ jsx(Produk, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "/admin/user", element: /* @__PURE__ */ jsx(User, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "/admin/brand", element: /* @__PURE__ */ jsx(Brand, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "/admin/categories", element: /* @__PURE__ */ jsx(Categories, {}) })
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  AdminHome as default
};
