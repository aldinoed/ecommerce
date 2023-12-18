import { jsx, Fragment, jsxs } from "react/jsx-runtime";
/* empty css             */import axios from "axios";
import { useState, useEffect } from "react";
function Produk() {
  let i = 1;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products-data").then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
    }).catch((error) => console.log(error.message));
  }, []);
  const handleDelete = async (proId) => {
    try {
      let res = await axios.delete(`/api/delete-produk/${proId}`);
      if (res.status === 200) {
        alert(res.data.message);
        const newProductData = cats.filter((item) => item.product_id !== proId);
        setCats(newProductData);
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
      /* @__PURE__ */ jsx("a", { href: "/admin/input-produk/", className: "text-white", children: "Tambah" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "table-view overflow-auto", style: { height: "80%" }, children: /* @__PURE__ */ jsxs("table", { className: "table table-striped ", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", children: "No." }),
        /* @__PURE__ */ jsx("th", { scope: "col", style: { maxWidth: "200px" }, children: "Nama Produk" }),
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Harga Produk" }),
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Stok" }),
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Terjual" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "ms-5", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: Array.isArray(products) && products.map((product) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: i++ }),
        /* @__PURE__ */ jsx("td", { style: { maxWidth: "200px" }, children: product.product_name }),
        /* @__PURE__ */ jsxs("td", { children: [
          "Rp. ",
          product.product_price
        ] }),
        /* @__PURE__ */ jsx("td", { children: product.product_stock }),
        /* @__PURE__ */ jsx("td", { className: "ps-5", children: product.sold_amount }),
        /* @__PURE__ */ jsxs("td", { className: "d-flex justify-content-start", style: { minHeight: "102px", minWidth: "100px" }, children: [
          /* @__PURE__ */ jsx("form", { method: "GET", action: `/admin/produk/${product.product_id}`, children: /* @__PURE__ */ jsx("button", { className: "btn btn-success", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-eye", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" }),
            /* @__PURE__ */ jsx("path", { d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" })
          ] }) }) }),
          /* @__PURE__ */ jsx("a", { href: `/admin/produk/${product.product_id}/edit`, children: /* @__PURE__ */ jsx("div", { className: "btn btn-warning", name: "update", value: "<?= $barang['id_barang']; ?>", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-pencil-square", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" }),
            /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" })
          ] }) }) }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-danger", name: "delete", onClick: () => handleDelete(product.product_name), children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "17", height: "17", fill: "currentColor", className: "bi bi-trash", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" }),
            /* @__PURE__ */ jsx("path", { d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" })
          ] }) })
        ] })
      ] }, i++)) })
    ] }) })
  ] }) });
}
export {
  Produk as default
};
