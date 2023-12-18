import { jsxs, Fragment, jsx } from "react/jsx-runtime";
/* empty css             */import "./bootstrap.bundle.min-5db3b69c.js";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { u as useCsrfToken } from "./useCsrfToken-7d5e1f48.js";
function FormInputProduk() {
  const { token } = useCsrfToken();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [fileImage, setFileImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [cats, setCats] = useState([]);
  useEffect(() => {
    axios.get("/api/categories-data").then((res) => {
      setCats(res.data.categories);
    }).catch((error) => {
      console.log("Error fetching data: ", error);
    });
  }, []);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get("/api/brands-data").then((res) => {
      setBrands(res.data.brands);
    }).catch((error) => {
      alert("Error fetching data: ", error);
    });
  });
  const uploadImage = async () => {
    console.log(amount);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("cat", selectedCategory);
    formData.append("brand", selectedBrands);
    formData.append("image", fileImage);
    formData.append("price", price);
    formData.append("amount", amount);
    let responce = await axios.post("/api/input-produk", formData, { headers: { "Content-Type": "multipart/form-data" } });
    if (responce) {
      alert("Berhasil input data produk");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImage();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Input Produk", children: /* @__PURE__ */ jsx("meta", { name: "csrf-token", content: token }) }),
    /* @__PURE__ */ jsx("div", { className: "p-3 mb-2  mt-5", children: /* @__PURE__ */ jsx("div", { className: "align-self-center ", children: /* @__PURE__ */ jsxs("form", { style: { maxHeight: "80vh !important", maxWidth: "60%" }, className: "p-4 m-auto shadow rounded bg-white ", method: "POST", action: "/input-produk", encType: "multipart/form-data", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", value: token, name: "_token" }),
      /* @__PURE__ */ jsx("p", { className: "text-center fs-2", children: "Input Data Produk" }),
      /* @__PURE__ */ jsxs("div", { className: "overflow-y-scroll overflow-x-hidden", style: { maxHeight: "63vh" }, children: [
        /* @__PURE__ */ jsx("div", { className: "row mt-3 d-flex justify-content-center", style: { maxHeight: "40vh" }, children: /* @__PURE__ */ jsx("div", { className: "col-md", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Nama Barang" }),
          /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", id: "floatingInputGrid", name: "name", placeholder: "", onChange: (e) => setName(e.target.value) })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "row mt-3 d-flex justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-md", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Deskripsi Produk" }),
          /* @__PURE__ */ jsx("textarea", { type: "text", className: "form-control", id: "floatingInputGrid", name: "desc", placeholder: "", onChange: (e) => setDesc(e.target.value) })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex mt-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-sm-5", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Kategori Produk" }),
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(
              "select",
              {
                className: "form-select form-select",
                "aria-label": "Large select example",
                name: "cat",
                value: selectedCategory,
                onChange: (e) => setSelectedCategory(e.target.value),
                children: [
                  /* @__PURE__ */ jsx("option", { selected: true, children: "Select" }),
                  cats.map((category) => /* @__PURE__ */ jsx("option", { value: category.category_id, children: category.category_name }, category.category_id))
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-sm-5 ps-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Brand Produk" }),
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(
              "select",
              {
                className: "form-select form-select",
                "aria-label": "Large select example",
                name: "brand",
                value: selectedBrands,
                onChange: (e) => setSelectedBrands(e.target.value),
                children: [
                  /* @__PURE__ */ jsx("option", { selected: true, children: "Select" }),
                  brands.map((brand) => /* @__PURE__ */ jsx("option", { value: brand.brand_id, children: brand.brand_name }, brand.brand_id))
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Jumlah" }),
          /* @__PURE__ */ jsx("input", { className: "form-control", type: "number", placeholder: "", "aria-label": "", name: "amount", onChange: (e) => setAmount(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Harga Produk" }),
          /* @__PURE__ */ jsx("input", { className: "form-control", name: "price", type: "number", placeholder: "", "aria-label": "", onChange: (e) => setPrice(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3 mt-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "formFileMultiple", className: "form-label text-secondary", children: "Masukkan Foto Produk" }),
          /* @__PURE__ */ jsx("input", { className: "form-control", type: "file", id: "formFileMultiple", multiple: true, name: "image", onChange: (e) => setFileImage(e.target.files[0]) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex mx-auto", children: [
        /* @__PURE__ */ jsx("input", { className: "btn btn-primary me-2", type: "submit", value: "Submit", name: "submit" }),
        /* @__PURE__ */ jsx("input", { className: "btn btn-danger", type: "reset", value: " Clear " }),
        /* @__PURE__ */ jsx("button", { type: "reset", className: "btn btn-secondary  tombol", style: { marginLeft: "10px" }, children: /* @__PURE__ */ jsx("a", { href: "/admin/produk", className: "text-white", style: { textDecoration: "none" }, children: " Back " }) })
      ] })
    ] }) }) })
  ] });
}
export {
  FormInputProduk as default
};
