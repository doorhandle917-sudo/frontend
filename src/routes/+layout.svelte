<script>
  import "../app.postcss";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  $: isLandingPage = $page.url.pathname === "/";
</script>


<!-- Landing page with gradient background -->
{#if isLandingPage}
  <div class="landing-bg">
    <slot />
  </div>
{:else}
  <!-- Document pages with PERMANENT static aged paper background -->
  <div class="document-bg">
    <div class="transition-container">
      {#key $page.url.pathname}
        <div
          class="page-content"
          in:fly={{ y: 1000, duration: 600, opacity: 1, easing: cubicOut }}
          out:fly={{ y: -1000, duration: 600, opacity: 1, easing: cubicOut }}
        >
          <slot />
        </div>
      {/key}
    </div>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #f0e6d2;
  }

  /* Landing page gradient background */
  .landing-bg {
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(
      142deg,
      rgba(231, 132, 255, 1),
      rgba(103, 127, 199, 1)
    );
    position: relative;
    z-index: 10;
  }

  /* Document pages with aged paper background */
  .document-bg {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #f0e6d2;
    /* High quality parchment texture using CSS gradients */
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0) 20%
      ),
      radial-gradient(circle at 50% 0, rgba(0, 0, 0, 0.05), transparent 70%),
      radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.05), transparent 70%),
      url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23f0e6d2' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E");
    background-size:
      100%,
      100%,
      100%,
      200px 200px;
    z-index: 1;
    overflow-y: auto;
  }

  /* Vintage vignette and stains */
  .document-bg::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    background: radial-gradient(
        circle at 50% 50%,
        transparent 60%,
        rgba(139, 90, 43, 0.1) 100%
      ),
      url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='stains'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.004' numOctaves='5'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23stains)' opacity='0.03'/%3E%3C/svg%3E");
  }

  /* CRT scanlines effect - reduced for clarity */
  .document-bg::after {
    content: "";
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.02) 0px,
      rgba(0, 0, 0, 0.02) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 100;
  }

  @keyframes flicker {
    0% {
      opacity: 0.97;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.97;
    }
  }

  .transition-container {
    position: relative;
    width: 100%;
    min-height: 100%;
    z-index: 5;
  }

  /* Important for smooth transition: content overlaps absolutely */
  .page-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
  }

  /* Global vintage document styles */
  :global(.document-bg) {
    font-family: "Courier New", "Courier", monospace;
  }
</style>
