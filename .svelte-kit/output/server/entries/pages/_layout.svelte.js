import { F as store_get, G as slot, I as unsubscribe_stores, E as pop, B as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let isLandingPage;
  isLandingPage = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
  if (isLandingPage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="landing-bg svelte-19huthn"><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="document-bg svelte-19huthn"><div class="transition-container svelte-19huthn"><!---->`;
    {
      $$payload.out += `<div class="page-content svelte-19huthn"><!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!----></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
