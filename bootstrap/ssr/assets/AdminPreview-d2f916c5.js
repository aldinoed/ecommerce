import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function AdminPreview() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "table-view overflow-auto", style: { height: "80%" }, children: /* @__PURE__ */ jsxs("table", { className: "table table-striped ", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { scope: "col", children: "Lihat" }),
      /* @__PURE__ */ jsx("th", { scope: "col", children: "Id Peminjaman" }),
      /* @__PURE__ */ jsx("th", { scope: "col", children: "Tanggal Peminjaman" }),
      /* @__PURE__ */ jsx("th", { scope: "col", children: "Tanggal Pengembalian" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("form", { action: "preview.php", method: "GET", children: /* @__PURE__ */ jsx("button", { className: "btn", name: "id_peminjaman", value: "<?= $user['id_peminjaman']; ?>", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "open_in_new" }) }) }) }),
      /* @__PURE__ */ jsx("td", {}),
      /* @__PURE__ */ jsx("td", {}),
      /* @__PURE__ */ jsx("td", {})
    ] }) })
  ] }) }) });
}
export {
  AdminPreview as default
};
