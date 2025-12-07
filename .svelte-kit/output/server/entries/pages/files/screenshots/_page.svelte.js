import { L as ensure_array_like, M as attr, N as bind_props, E as pop, B as push, O as stringify } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  function getRotation(index) {
    const rotations = [-4, 3, -5, 2, 5, -3, 4, -2, 6, -6];
    return rotations[index % rotations.length];
  }
  function getOffset(index) {
    const offsets = [-10, 15, -5, 20, -15, 10];
    return offsets[index % offsets.length];
  }
  $$payload.out += `<div class="document-page svelte-tyqcfk"><div class="watermark svelte-tyqcfk">CONFIDENTIAL</div> <div class="content-wrapper svelte-tyqcfk"><div class="title-section svelte-tyqcfk"><h1 class="document-title svelte-tyqcfk">Skyrofiles screenshots</h1></div> <div class="gallery-container svelte-tyqcfk">`;
  if (data.images.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="empty-state svelte-tyqcfk">No screenshots found in static/screenshots</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(data.images);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let image = each_array[i];
      $$payload.out += `<button class="photo-item svelte-tyqcfk"${attr("style", `transform: rotate(${stringify(getRotation(i))}deg) translateX(${stringify(getOffset(i))}px);`)}${attr("aria-label", `View screenshot ${stringify(i + 1)}`)}><img${attr("src", image)}${attr("alt", `Screenshot ${stringify(i + 1)}`)} class="photo-img svelte-tyqcfk"></button>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> <div class="button-container svelte-tyqcfk"><button class="vintage-stamp svelte-tyqcfk">page down</button></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
