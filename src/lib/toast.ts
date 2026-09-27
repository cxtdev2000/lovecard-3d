import { $ } from "./dom";

let timer = 0;

/** Shows a short status message at the bottom of the screen. */
export function toast(message: string) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(timer);
  timer = window.setTimeout(() => el.classList.remove("show"), 2600);
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older WebViews (Zalo/Facebook in-app browsers) lack the async clipboard API.
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;opacity:0;top:0";
    document.body.append(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}
