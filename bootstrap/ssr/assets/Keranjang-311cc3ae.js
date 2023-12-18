import { jsxs, Fragment, jsx } from "react/jsx-runtime";
/* empty css             */import React from "react";
import { Head } from "@inertiajs/react";
function TransactionHeader() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Keranjang", children: /* @__PURE__ */ jsx(
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      }
    ) }),
    /* @__PURE__ */ jsx("nav", { className: "navbar bg-primary p-3 fixed-top shadow pb-2", children: /* @__PURE__ */ jsxs("div", { className: "container text-white", children: [
      /* @__PURE__ */ jsx("a", { className: "navbar-brand", href: "/", children: /* @__PURE__ */ jsx("span", { class: "material-symbols-outlined text-white", children: "arrow_back" }) }),
      /* @__PURE__ */ jsx("h3", { className: "m-auto", children: "Computer Planet" })
    ] }) }),
    /* @__PURE__ */ jsx("script", { src: "../jquery.js" })
  ] });
}
function Keranjang(namaProduk, harga, stok, namaBrand) {
  const [amount, setAmount] = React.useState(1);
  const addAmount = () => {
    setAmount(amount + 1);
  };
  const reduceAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { title: "keranjang", children: [
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(TransactionHeader, {}),
    /* @__PURE__ */ jsxs("div", { className: "cartBody container pt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "row", style: { marginTop: "4%" }, children: /* @__PURE__ */ jsx("h4", { className: "fw-bold ps-4", children: "Keranjang" }) }),
      /* @__PURE__ */ jsx("div", { className: "row mt-4", children: /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            class: "form-check-input ms-1",
            type: "checkbox",
            value: "",
            id: "defaultCheck1"
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "form-check-label ms-2",
            for: "defaultCheck1",
            children: "Pilih semua"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "row d-flex justify-content-between", children: [
        /* @__PURE__ */ jsx("div", { className: "col-md-8 pt-3", children: /* @__PURE__ */ jsxs("div", { className: "card shadow border-delete bg-body-tertiary", children: [
          /* @__PURE__ */ jsxs("div", { class: "ps-3 pt-3", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "defaultCheck1"
              }
            ),
            "  Brand"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "card-body", children: /* @__PURE__ */ jsx("div", { className: "product-canvas p-1 bg-body-secondary rounded", children: /* @__PURE__ */ jsxs("div", { className: "row p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "col-2", children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "cart-thumb",
                src: "img/intel.jpeg",
                alt: ""
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "col-7", children: [
              /* @__PURE__ */ jsx("div", { className: "row fw-semibold pb-1", children: "Processor Intel Core i9" }),
              /* @__PURE__ */ jsx("div", { className: "row fs-6", children: "Stok : 2005" }),
              /* @__PURE__ */ jsx("div", { className: "row", children: "Rp. 15000" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-3 d-flex align-items-end pb-2", children: [
              /* @__PURE__ */ jsx("span", { class: "material-symbols-outlined tombol cart-button-hover ", children: "delete" }),
              "     ",
              /* @__PURE__ */ jsx("span", { onClick: reduceAmount, class: "material-symbols-outlined tombol cart-button-hover", children: "do_not_disturb_on" }),
              /* @__PURE__ */ jsx("span", { className: "ms-4 me-4", children: amount }),
              /* @__PURE__ */ jsx("span", { onClick: addAmount, class: "material-symbols-outlined tombol cart-button-hover", children: "add_circle" })
            ] })
          ] }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-4 p-3", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "card border-delete shadow bg-body-tertiary",
            style: { backgroundColor: "#f8f8f8" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "ps-3 pt-3 divider-section", children: /* @__PURE__ */ jsx("h5", { className: "card-title", children: "Ringkasan Belanja" }) }),
              /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
                /* @__PURE__ */ jsxs("div", { className: "baris-harga", children: [
                  /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between", children: [
                    /* @__PURE__ */ jsx("p", { className: "card-text", children: /* @__PURE__ */ jsx("b", { children: "Total Harga (1 Barang)" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Rp. 1000000,-" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between", children: [
                    /* @__PURE__ */ jsx("p", { className: "card-text", children: /* @__PURE__ */ jsx("b", { children: "Total Diskon" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Rp. 700000,-" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "kolom-harga d-flex justify-content-between", children: [
                  /* @__PURE__ */ jsx("p", { class: "card-text", children: /* @__PURE__ */ jsx("b", { children: "Total Harga" }) }),
                  /* @__PURE__ */ jsx("p", { children: "Rp. 300000,-" })
                ] }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "btn btn-primary tombol",
                    style: { minWidth: "100%" },
                    children: "Checkout"
                  }
                )
              ] })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
export {
  Keranjang as default
};
