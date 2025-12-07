import { C as getContext, D as store_get, E as slot, F as unsubscribe_stores, B as pop, z as push } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
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
