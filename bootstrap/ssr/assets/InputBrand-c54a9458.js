import { jsxs, Fragment, jsx } from "react/jsx-runtime";
/* empty css             */import { useState } from "react";
import { u as useCsrfToken } from "./useCsrfToken-7d5e1f48.js";
import { Head } from "@inertiajs/react";
function InputBrand() {
  const { token } = useCsrfToken();
  const [name, setName] = useState("");
  const [fileImage, setFileImage] = useState("");
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", fileImage);
    let responce = await axios.post("/api/input-brand", formData, { headers: { "Content-Type": "multipart/form-data" } });
    if (responce) {
      alert("Berhasil input data brand");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImage();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Input Brand" }),
    /* @__PURE__ */ jsx("div", { className: "p-3 mb-2", style: { position: "relative", top: "25vh" }, children: /* @__PURE__ */ jsx("div", { className: "align-self-center", children: /* @__PURE__ */ jsxs("form", { style: { maxHeight: "100vh", width: "60%" }, className: "p-4 m-auto shadow rounded bg-white", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", value: token, name: "_token" }),
      /* @__PURE__ */ jsx("p", { className: "text-center fs-2", children: "Input Data Brand" }),
      /* @__PURE__ */ jsx("div", { className: "row mt-3 d-flex justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-md", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Nama Brand" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", id: "floatingInputGrid", placeholder: "", onChange: (e) => setName(e.target.value) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3 mt-3", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "formFileMultiple", className: "form-label text-secondary", children: "Masukkan Logo Brand" }),
        /* @__PURE__ */ jsx("input", { className: "form-control", type: "file", id: "formFileMultiple", multiple: true, accept: "image/*", onChange: (e) => setFileImage(e.target.files[0]) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex mx-auto", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-primary me-2", type: "submit", name: "submit", children: "Submit" }),
        /* @__PURE__ */ jsx("input", { className: "btn btn-danger", type: "reset", value: "Clear" }),
        /* @__PURE__ */ jsx("button", { type: "reset", className: "btn btn-secondary  tombol", style: { marginLeft: "10px" }, children: /* @__PURE__ */ jsx("a", { href: "/admin/brand", className: "text-white", style: { textDecoration: "none" }, children: " Back " }) })
      ] })
    ] }) }) })
  ] });
}
export {
  InputBrand as default
};
