import { jsx, Fragment, jsxs } from "react/jsx-runtime";
/* empty css             */import { M as MainNav } from "./MainNav-216802fe.js";
import React, { useState, useEffect } from "react";
/* empty css                 */import axios from "axios";
import { Head } from "@inertiajs/react";
import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchGrid from "./SearchGrid-fd85ec88.js";
import $ from "jquery";
import Keranjang from "./Keranjang-311cc3ae.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@inertiajs/inertia-react";
import "./useCsrfToken-7d5e1f48.js";
function HomeBody({ userData }) {
  userData ? userData.username : "Guest";
  const [brands, setBrands] = useState([]);
  useState([]);
  useEffect(() => {
    axios.get("/api/brands-data").then((res) => setBrands(res.data.brands)).catch((err) => alert(err));
  }, []);
  useEffect(() => {
    axios.get("/api/brands-data").then((res) => setBrands(res.data.brands)).catch((err) => alert(err));
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "row me-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-3 align-items-center d-flex flex-column justify-content-between ms-4", children: [
        /* @__PURE__ */ jsx("img", { style: { minWidth: "46%" }, src: "img/main1.png", alt: "" }),
        /* @__PURE__ */ jsx("img", { style: { minWidth: "49%" }, src: "img/main2.png", alt: "" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs(
        "div",
        {
          id: "carouselExampleRide",
          className: "carousel slide",
          "data-bs-ride": "carousel",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "carousel-inner", children: [
              /* @__PURE__ */ jsx("div", { className: "carousel-item active", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "img/banner2.jpg",
                  className: "rounded",
                  alt: "...",
                  style: {
                    minWidth: "100%",
                    maxHeight: "400px"
                  }
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "carousel-item", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "img/banner3.jpg",
                  className: "rounded",
                  alt: "...",
                  style: {
                    minWidth: "100%",
                    maxHeight: "400px"
                  }
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "carousel-item", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "img/banner1.png",
                  className: "d-block w-100",
                  alt: "...",
                  style: {
                    minWidth: "100%",
                    minHeight: "400px"
                  }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "carousel-control-prev",
                type: "button",
                "data-bs-target": "#carouselExampleRide",
                "data-bs-slide": "prev",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "carousel-control-prev-icon",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Previous" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "carousel-control-next",
                type: "button",
                "data-bs-target": "#carouselExampleRide",
                "data-bs-slide": "next",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "carousel-control-next-icon",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Next" })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row mt-5", children: /* @__PURE__ */ jsxs("div", { className: "col-sm-12 ", children: [
      /* @__PURE__ */ jsx("div", { className: "container ", children: /* @__PURE__ */ jsx("h5", { className: "ms-5 ps ", children: "Shop by recently product" }) }),
      /* @__PURE__ */ jsx("section", { className: "container", style: { marginTop: "-10px" }, children: /* @__PURE__ */ jsx("div", { className: "row ", children: /* @__PURE__ */ jsx("div", { className: "scrollcards d-flex align-items-center ps-5 pe-5 overflow-x-hidden", children: Array.isArray(brands) && brands.map((brand) => /* @__PURE__ */ jsx("div", { className: "card cardBrand justify-content-center d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "/category/" + brand.brand_name, children: /* @__PURE__ */ jsx("img", { style: { maxWidth: "10vh" }, className: "card-img-top ", src: "http://127.0.0.1:8000/storage/" + brand.brand_image }) }) })) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row mt-5", children: /* @__PURE__ */ jsxs("div", { className: "col-sm-12 ", children: [
      /* @__PURE__ */ jsx("div", { className: "container ", children: /* @__PURE__ */ jsx("h5", { className: "ms-5 ps ", children: "Shop by brand" }) }),
      /* @__PURE__ */ jsx("section", { className: "container", style: { marginTop: "-10px" }, children: /* @__PURE__ */ jsx("div", { className: "row ", children: /* @__PURE__ */ jsx("div", { className: "scrollcards d-flex align-items-center ps-5 pe-5 overflow-x-hidden", children: Array.isArray(brands) && brands.map((brand) => /* @__PURE__ */ jsx("div", { className: "card cardBrand justify-content-center d-flex align-items-center", children: /* @__PURE__ */ jsx("a", { href: "/category/" + brand.brand_name, children: /* @__PURE__ */ jsx("img", { style: { maxWidth: "10vh" }, className: "card-img-top ", src: "http://127.0.0.1:8000/storage/" + brand.brand_image }) }) })) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-2  d-flex justify-content-center ", children: [
      /* @__PURE__ */ jsx("div", { className: "col-sm-5 p-3 d-flex justify-content-end align-items-end", children: /* @__PURE__ */ jsx("img", { src: "img/sub1.png", style: { minWidth: "92%", height: "250px" }, alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "col-sm-6 p-3 d-flex justify-content-start align-items-start", children: /* @__PURE__ */ jsx("img", { src: "img/sub2.png", style: { minWidth: "93%", height: "320px" }, alt: "" }) })
    ] })
  ] }) });
}
function ProductView() {
  const [amount, setAmount] = React.useState(1);
  const addAmount = () => {
    setAmount(amount + 1);
  };
  const reduceAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const [product, setProduct] = useState("");
  const [media, setMedia] = useState("");
  const { productName } = useParams();
  useEffect(() => {
    axios.get("/api/products-data/" + productName).then((res) => {
      setProduct(res.data.product);
      setMedia(res.data.media);
      console.log(res.data);
    }).catch((err) => console.log(`Error fetching data: ${err}`));
  }, []);
  const [activeTab, setActiveTab] = useState("deskripsi");
  $(".nav-link").click(function() {
    const linked = $(this).attr("href");
    const linkedSection = $(linked);
    $("html, body").animate({
      scrollTop: linkedSection.offset().top - 50
    });
    const tabId = linked.substring(1);
    handleTabClick(tabId);
  });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container shadow card p-4", style: { marginTop: "6%", minHeight: "40vh", maxWidth: "83%", border: "none" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-2  row p-4", style: { minHeight: "100%" }, children: [
      /* @__PURE__ */ jsx("div", { style: { maxHeight: "63vh", maxWidth: "70vh", padding: "0px !important" }, className: "rounded-2 shadow col-sm-6 d-flex justify-content-center align-items-center", children: /* @__PURE__ */ jsx("img", { src: `http://127.0.0.1:8000/storage/${media.media_file}`, style: { objectFit: "contain", maxWidth: "90%", height: "auto" }, alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { className: "col-sm-6 ms-4 ps-5", children: [
        /* @__PURE__ */ jsx("div", { className: "row", children: product === null ? /* @__PURE__ */ jsx("span", { className: "fw-light fs-5 placeholder col-12" }) : /* @__PURE__ */ jsx("img", { src: `http://127.0.0.1:8000/storage/${product.brand_image}`, style: { maxHeight: "3%", maxWidth: "30%" } }) }),
        /* @__PURE__ */ jsx("div", { className: "row mt-4", children: /* @__PURE__ */ jsx("p", { className: "placeholder-glow fw-light fs-5", children: product === null ? /* @__PURE__ */ jsx("span", { className: "fw-light fs-5 placeholder col-12" }) : product.product_name }) }),
        /* @__PURE__ */ jsx("div", { className: "row mt-5 mb-4", children: /* @__PURE__ */ jsx("h1", { className: "placeholder-glow fw-bold ", children: product === null ? /* @__PURE__ */ jsx("span", { className: "fw-light fs-5 placeholder col-12" }) : "Rp. " + product.product_price + ",-" }) }),
        /* @__PURE__ */ jsx("div", { className: "row mt-1", children: /* @__PURE__ */ jsx("p", { className: "placeholder-glow fw-light fs-6", children: product === null ? /* @__PURE__ */ jsx("span", { className: "fw-light fs-5 placeholder col-12" }) : "Stok : " + product.product_stock }) }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex ps-2 flex-row row mt-1 rounded-3", style: { maxWidth: "43%", maxHeight: "31px" }, children: [
          /* @__PURE__ */ jsx("div", { className: `col-2 rounded ${amount === 1 ? "bg-dark-subtle" : "bg-primary"} d-flex justify-content-center align-items-center  fs-4 `, style: { height: "30px", cursor: "pointer" }, onClick: reduceAmount, children: "-" }),
          /* @__PURE__ */ jsx("input", { className: "col-6 fw-bold text-center", style: { maxHeight: "31px", border: "none" }, type: "text", value: amount }),
          /* @__PURE__ */ jsx("div", { className: `col-2 d-flex justify-content-center align-items-center fs-4 rounded ${amount === product.product_stock ? "bg-dark-subtle" : "bg-primary"}`, style: { height: "30px", cursor: "pointer" }, onClick: amount !== product.product_stock ? addAmount : null, disabled: amount === product.product_stock, children: "+" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "row mt-4", children: [
          /* @__PURE__ */ jsx("button", { style: { height: "50px" }, className: "me-3 col-5 p-2 btn btn-primary", children: "Beli Sekarang" }),
          /* @__PURE__ */ jsx("button", { style: { height: "50px" }, className: "col-6 p-2 btn btn-white border", children: "Tambah ke Keranjang" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row mt-3 p-4", style: { minHeight: "100%" }, children: [
      /* @__PURE__ */ jsxs("ul", { className: "nav nav-tabs", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: `nav-link ${activeTab === "deskripsi" ? "active" : ""}`, href: "#deskripsi", onClick: () => handleTabClick("deskripsi"), children: "Deskripsi" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: `nav-link ${activeTab === "rating" ? "active" : ""}`, href: "#rating", onClick: () => handleTabClick("review"), children: "Rating" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: `nav-link ${activeTab === "review" ? "active" : ""}`, href: "#review", children: "Review" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row pt-5", id: "deskripsi", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-center", children: "Deskripsi Produk" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 j", children: product.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row pt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-center", id: "rating", children: "Rating" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 fs-3 fw-bold", children: "Tidak Ada Data" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row pt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-center", id: "review", children: "Review" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 j", children: "Tidak Ada Data" })
      ] })
    ] })
  ] }) });
}
function Home({ users, user }) {
  useEffect(() => {
  }, [user]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Situs Toko Komputer Terlengkap & Termurah" }),
    /* @__PURE__ */ jsx(MainNav, { isAuthenticated: user }),
    /* @__PURE__ */ jsx("h1", {}),
    /* @__PURE__ */ jsx("div", { className: "container-fluid pt-5 ", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomeBody, { user }) }),
      /* @__PURE__ */ jsx(Route, { path: "/search", element: /* @__PURE__ */ jsx(SearchGrid, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/keranjang", element: /* @__PURE__ */ jsx(Keranjang, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/:productName", element: /* @__PURE__ */ jsx(ProductView, {}) })
    ] }) })
  ] }) });
}
export {
  Home as default
};
