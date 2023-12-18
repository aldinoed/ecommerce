import { jsx, Fragment, jsxs } from "react/jsx-runtime";
/* empty css             */import "bootstrap/dist/js/bootstrap.min.js";
import "@inertiajs/inertia-react";
import { useState } from "react";
import { u as useCsrfToken } from "./useCsrfToken-7d5e1f48.js";
import "@inertiajs/react";
function MainNav({ isAuthenticated }) {
  useCsrfToken();
  const [search, setSearch] = useState("");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "container-fluid bg-white border-bottom pb-4 pt-3 shadow fixed-top", children: /* @__PURE__ */ jsxs("div", { className: "row d-flex align-items-center justify-content-evenly", children: [
    /* @__PURE__ */ jsx("div", { className: "col-1 d-flex justify-content-center", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "img/icon.png", alt: "" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "col-1", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": ".multi-collapse",
          "aria-expanded": "false",
          "aria-controls": "multiCollapseExample1 multiCollapseExample2",
          children: "Kategori"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "row z-3", children: [
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "collapse multi-collapse",
            id: "multiCollapseExample1",
            children: /* @__PURE__ */ jsx("div", { className: "card card-body", children: "Halo" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "collapse multi-collapse",
            id: "multiCollapseExample2",
            children: /* @__PURE__ */ jsx("div", { className: "card card-body", children: "Yoi" })
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-7 ", children: /* @__PURE__ */ jsxs(
      "form",
      {
        className: "d-flex input-group justify-content-center ",
        role: "search",
        method: "get",
        action: "/search/" + {},
        children: [
          /* @__PURE__ */ jsx("button", { className: "input-group-text bg-primary", id: "basic-addon1", children: /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-search",
              viewBox: "0 0 16 16",
              children: /* @__PURE__ */ jsx("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })
            }
          ) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-control ",
              type: "search",
              placeholder: "Cari di Computer Planet",
              "aria-label": "Search",
              value: search,
              onChange: (e) => setSearch(e.target.value)
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "col-1 border-end d-flex justify-content-center", children: /* @__PURE__ */ jsx("a", { href: "/keranjang", className: "href", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "23",
        fill: "currentColor",
        className: "bi bi-cart4",
        viewBox: "0 0 16 16",
        children: /* @__PURE__ */ jsx("path", { d: "M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" })
      }
    ) }) }),
    !isAuthenticated ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "col-2 d-flex justify-content-evenly", children: [
      /* @__PURE__ */ jsx("div", { className: "btn border bg-white", children: /* @__PURE__ */ jsx("a", { href: "/masuk", className: "text-black", children: "Masuk" }) }),
      /* @__PURE__ */ jsx("div", { className: "btn bg-primary", children: /* @__PURE__ */ jsx("a", { href: "/daftar", className: "text-white", children: "Daftar" }) })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h2", { children: "halo" }) })
  ] }) }) });
}
export {
  MainNav as M
};
