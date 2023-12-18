import { jsxs, Fragment, jsx } from "react/jsx-runtime";
/* empty css             */import { useState } from "react";
import { u as useCsrfToken } from "./useCsrfToken-7d5e1f48.js";
import { Head } from "@inertiajs/react";
function InputBrand() {
  const { token } = useCsrfToken();
  const [data, setData] = useState({
    cat: ""
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cat", data.cat);
    console.log(formData);
    axios.post("/admin/input-cat", formData).then((response) => {
      if (response.status === 200) {
        alert("Berhasil Input Category");
      }
    }).catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Input Category gagal. Silakan coba lagi.");
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Input Brand" }),
    /* @__PURE__ */ jsx("div", { className: "p-3 mb-2", style: { marginTop: "14%" }, children: /* @__PURE__ */ jsx("div", { className: "align-self-center ", children: /* @__PURE__ */ jsxs("form", { style: { maxHeight: "100vh", width: "60%" }, className: "p-4 m-auto shadow rounded bg-white", method: "POST", action: "/admin/input-cat", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", value: token, name: "_token" }),
      /* @__PURE__ */ jsx("p", { className: "text-center fs-2", children: "Input Data Category" }),
      /* @__PURE__ */ jsx("div", { className: "row mt-3 d-flex justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-md", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: " floatingInputGrid", children: "Nama Category" }),
        /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", id: "floatingInputGrid", placeholder: "", value: data.cat, name: "cat", onChange: handleChange })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex mx-auto mt-3", children: [
        /* @__PURE__ */ jsx("input", { className: "btn btn-primary me-2", type: "submit", value: "Submit", name: "submit" }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-danger", type: "reset", children: "Clear" }),
        /* @__PURE__ */ jsx("button", { type: "reset", className: "btn btn-secondary  tombol", style: { marginLeft: "10px" }, children: /* @__PURE__ */ jsx("a", { href: "/admin/categories", className: "text-white", style: { textDecoration: "none" }, children: " Back " }) })
      ] })
    ] }) }) })
  ] });
}
export {
  InputBrand as default
};
