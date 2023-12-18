import { jsxs, Fragment, jsx } from "react/jsx-runtime";
/* empty css             */import { createContext, useState } from "react";
import axios from "axios";
import "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import "bootstrap/dist/js/bootstrap.min.js";
import "@inertiajs/inertia-react";
import { u as useCsrfToken } from "./useCsrfToken-7d5e1f48.js";
/* empty css                 */import "jquery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createContext({
  currentUser: null,
  token: null,
  setUser: () => {
  },
  setToken: () => {
  }
});
function Masuk() {
  const { token } = useCsrfToken();
  const [data, setData] = useState({
    password: "",
    email: ""
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", data.password);
    formData.append("email", data.email);
    axios.post("/masuk", formData).then((res) => {
      console.log("berhasil login" + res);
    }).catch((err) => console.log(err));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsxs("form", { method: "POST", action: "/masuk", onSubmit: handleSubmit, className: "mt-3 pt-5", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "_token", value: token }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", forhtml: "exampleInputEmail1", children: "Email" }),
        /* @__PURE__ */ jsx("input", { id: "exampleInputEmail1", className: "form-control", type: "email", "aria-describedby": "emailHelp", name: "email", value: data.email, onChange: handleChange })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", forhtml: "exampleInputPassword1", children: "Password" }),
        /* @__PURE__ */ jsx("input", { id: "exampleInputPassword1", className: "form-control", type: "password", name: "password", value: data.password, onChange: handleChange })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center mb-2", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary ", type: "submit", children: "Masuk" }) }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("span", { children: [
        "Belum punya akun? ",
        /* @__PURE__ */ jsx("a", { href: "/daftar", children: "Daftar " }),
        " sekarang"
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { children: "Tidak bisa login? Hubungi " }),
      /* @__PURE__ */ jsx("a", { href: "https://api.whatsapp.com/send?phone=6283811051466", children: "Admin" })
    ] })
  ] });
}
function Daftar() {
  const { token } = useCsrfToken();
  const [data, setData] = useState({
    username: "",
    fullname: "",
    password: "",
    email: ""
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("fullname", data.fullname);
    formData.append("password", data.password);
    formData.append("email", data.email);
    await axios.post("/daftar", formData).then((response) => {
      if (response.status === 200) {
        alert("Berhasil Daftar");
        window.location.href = "/masuk";
        return;
      }
    }).catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.log("Registrasi gagal. Silakan coba lagi." + error);
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { method: "POST", action: "/daftar", className: "mt-3 me-1", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_token", value: token }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsx("label", { className: "form-label", forhtml: "exampleInputEmail1", children: "Email" }),
      /* @__PURE__ */ jsx("input", { id: "exampleInputEmail1", className: "form-control", type: "email", "aria-describedby": "emailHelp", name: "email", value: data.email, onChange: handleChange })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsx("label", { className: "form-label", forhtml: "exampleInputEmail1", children: "Username" }),
      /* @__PURE__ */ jsx("input", { id: "exampleInputUsername", className: "form-control", type: "text", "aria-describedby": "emailHelp", name: "username", value: data.username, onChange: handleChange })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsx("label", { className: "form-label", forhtml: "exampleInputEmail1", children: "Fullname" }),
      /* @__PURE__ */ jsx("input", { id: "exampleInputFullname", className: "form-control", type: "text", "aria-describedby": "emailHelp", name: "fullname", value: data.fullname, onChange: handleChange })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsx("label", { className: "form-label", forhtml: "exampleInputPassword1", children: "Password" }),
      /* @__PURE__ */ jsx("input", { id: "exampleInputPassword1", className: "form-control", type: "password", name: "password", value: data.password, onChange: handleChange })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary ", type: "submit", children: "Daftar" }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("span", { className: "", children: "Sudah punya akun? " }),
    /* @__PURE__ */ jsx("a", { href: "/masuk", children: "Masuk" })
  ] }) });
}
function Autentikasi() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/masuk", element: /* @__PURE__ */ jsx(Head, { title: "Masuk" }) }),
      /* @__PURE__ */ jsx(Route, { path: "/daftar", element: /* @__PURE__ */ jsx(Head, { title: "Daftar" }) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid d-flex justify-content-center align-items-center ",
        style: { height: "100vh" },
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "card rounded d-flex flex-row shadow rounded-4",
            style: { border: "none", width: "55%", height: "70%" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "brand-login pt-4 ps-4 col-sm-4 rounded-start-4",
                  style: { width: "43%" },
                  children: /* @__PURE__ */ jsx("h2", { className: "text-primary fw-bolder", children: "Compnet" })
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "bg-white p-4 col-sm-6 rounded-4",
                  style: { width: "57%" },
                  children: [
                    /* @__PURE__ */ jsxs(Routes, { children: [
                      /* @__PURE__ */ jsx(Route, { path: "/masuk", element: /* @__PURE__ */ jsx("h2", { className: "text-center mb-5", children: "Masuk" }) }),
                      /* @__PURE__ */ jsx(Route, { path: "/daftar", element: /* @__PURE__ */ jsx("h2", { className: "text-center", children: "Daftar" }) })
                    ] }),
                    /* @__PURE__ */ jsxs(Routes, { children: [
                      /* @__PURE__ */ jsx(Route, { path: "/masuk", element: /* @__PURE__ */ jsx(Masuk, {}) }),
                      /* @__PURE__ */ jsx(Route, { path: "/daftar", element: /* @__PURE__ */ jsx(Daftar, {}) })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm",
        crossOrigin: "anonymous"
      }
    )
  ] }) });
}
export {
  Autentikasi as default
};
