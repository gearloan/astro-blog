/** @jsxImportSource preact */
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

type Props = {
  showEditorial?: boolean;
  showMag?: boolean;
  showUI?: boolean;
};

export default function FontSwitcher({
  showEditorial = true,
  showMag = true,
  showUI = false,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  const applyEditorial = (v: string) => {
    const r = document.documentElement;
    if (v) r.setAttribute("data-editorial", v);
    else r.removeAttribute("data-editorial");
    try { localStorage.setItem("fontset:editorial", v); } catch {}
    console.debug("[FontSwitcher] applied editorial:", v);
  };
  const applyMag = (v: string) => {
    const r = document.documentElement;
    if (v) r.setAttribute("data-mag", v);
    else r.removeAttribute("data-mag");
    try { localStorage.setItem("fontset:mag", v); } catch {}
    console.debug("[FontSwitcher] applied mag:", v);
  };
  const applyUI = (v: string) => {
    const r = document.documentElement;
    if (v) r.setAttribute("data-ui", v);
    else r.removeAttribute("data-ui");
    try { localStorage.setItem("fontset:ui", v); } catch {}
    console.debug("[FontSwitcher] applied ui:", v);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // init values from storage/DOM
    const r = document.documentElement;
    const e0 = localStorage.getItem("fontset:editorial") ?? r.dataset.editorial ?? "";
    const m0 = localStorage.getItem("fontset:mag") ?? r.dataset.mag ?? "";
    const u0 = localStorage.getItem("fontset:ui") ?? r.dataset.ui ?? "";
    const ed = root.querySelector('select[data-ed]') as HTMLSelectElement | null;
    const mg = root.querySelector('select[data-mag]') as HTMLSelectElement | null;
    const ui = root.querySelector('select[data-ui]') as HTMLSelectElement | null;
    if (ed) ed.value = e0;
    if (mg) mg.value = m0;
    if (ui) ui.value = u0;
    console.debug("[FontSwitcher] init", { e0, m0, u0 });

    // delegated native listeners (capture phase so wrappers/labels can't swallow them)
    const handler = (e: Event) => {
      const t = e.target as Element | null;
      if (!t || t.tagName !== "SELECT") return;
      const sel = t as HTMLSelectElement;
      const val = sel.value;
      if (sel.hasAttribute("data-ed")) {
        console.debug("[FontSwitcher] change editorial", val);
        applyEditorial(val);
      } else if (sel.hasAttribute("data-mag")) {
        console.debug("[FontSwitcher] change mag", val);
        applyMag(val);
      } else if (sel.hasAttribute("data-ui")) {
        console.debug("[FontSwitcher] change ui", val);
        applyUI(val);
      }
    };

    root.addEventListener("input", handler, true);
    root.addEventListener("change", handler, true);

    return () => {
      root.removeEventListener("input", handler, true);
      root.removeEventListener("change", handler, true);
    };
  }, []);

  // Uncontrolled selects; values set in effect
  return h(
    "div",
    { ref: rootRef, class: "flex items-center gap-3 text-sm pointer-events-auto" },
    showEditorial &&
      h(
        "label",
        { class: "flex items-center gap-2 pointer-events-auto" },
        h("span", { class: "ui-label" }, "Editorial"),
        h(
          "select",
          { "data-ed": "", class: "border rounded px-2 py-1 pointer-events-auto" },
          h("option", { value: "" }, "Editorial: Default (Mercury)"),
          h("option", { value: "noe" }, "Editorial: Noe"),
          h("option", { value: "canela" }, "Editorial: Canela")
        )
      ),
    showMag &&
      h(
        "label",
        { class: "flex items-center gap-2 pointer-events-auto" },
        h("span", { class: "ui-label" }, "Magazine"),
        h(
          "select",
          { "data-mag": "", class: "border rounded px-2 py-1 pointer-events-auto" },
          h("option", { value: "" }, "Magazine: Default (Gotham)"),
          h("option", { value: "soehne-fat" }, "Magazine: Soehne Extrafett"),
          h("option", { value: "soehne-schmal" }, "Magazine: Soehne Schmal Buch")
        )
      ),
    showUI &&
      h(
        "label",
        { class: "flex items-center gap-2 pointer-events-auto" },
        h("span", { class: "ui-label" }, "UI"),
        h(
          "select",
          { "data-ui": "", class: "border rounded px-2 py-1 pointer-events-auto" },
          h("option", { value: "" }, "UI: Default (Gotham)"),
          h("option", { value: "soehne" }, "UI: Soehne"),
          h("option", { value: "system" }, "UI: System")
        )
      )
  );
}
