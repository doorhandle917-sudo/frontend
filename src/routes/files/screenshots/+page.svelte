<script>
  export let data;
  import { fade, scale } from "svelte/transition";

  /** @type {string|null} */
  let selectedImage = null;

  // Deterministic random rotation based on index to avoid hydration mismatch
  // or use a simple modulo logic for consistency without complex seeding
  /** @param {number} index */
  function getRotation(index) {
    // Generates a rotation between -6 and 6 degrees
    const rotations = [-4, 3, -5, 2, 5, -3, 4, -2, 6, -6];
    return rotations[index % rotations.length];
  }

  /** @param {number} index */
  function getOffset(index) {
    // Slight horizontal offset
    const offsets = [-10, 15, -5, 20, -15, 10];
    return offsets[index % offsets.length];
  }

  /** @param {string} image */
  function openImage(image) {
    selectedImage = image;
  }

  function closeImage() {
    selectedImage = null;
  }
</script>

<svelte:window on:keydown={(e) => e.key === "Escape" && closeImage()} />

<div class="document-page">
  <!-- Confidential watermark -->
  <div class="watermark">CONFIDENTIAL</div>

  <div class="content-wrapper">
    <!-- Title -->
    <div class="title-section">
      <h1 class="document-title">Skyrofiles screenshots</h1>
    </div>

    <!-- Gallery -->
    <div class="gallery-container">
      {#if data.images.length === 0}
        {#each data.images as image, i}
          <button
            class="photo-item"
            style="transform: rotate({getRotation(i)}deg) translateX({getOffset(
              i,
            )}px);"
            in:fade={{ duration: 500, delay: i * 100 }}
            on:click={() => openImage(image)}
            aria-label="View screenshot {i + 1}"
          >
            <img src={image} alt="Screenshot {i + 1}" class="photo-img" />
          </button>
        {/each}
      {:else}
        {#each data.images as image, i}
          <button
            class="photo-item"
            style="transform: rotate({getRotation(i)}deg) translateX({getOffset(
              i,
            )}px);"
            in:fade={{ duration: 500, delay: i * 100 }}
            on:click={() => openImage(image)}
            aria-label="View screenshot {i + 1}"
          >
            <img src={image} alt="Screenshot {i + 1}" class="photo-img" />
          </button>
        {/each}
      {/if}
    </div>

    <!-- Page Down Button -->
    <div class="button-container">
      <button class="vintage-stamp"> page down </button>
    </div>
  </div>

  <!-- Image Modal -->
  {#if selectedImage}
    <div
      class="modal-backdrop"
      on:click={closeImage}
      on:keydown={(e) =>
        e.key === "Enter" || e.key === " " ? closeImage() : null}
      role="button"
      tabindex="0"
      transition:fade={{ duration: 200 }}
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div
        class="modal-content"
        on:click|stopPropagation
        role="document"
        transition:scale={{ duration: 300, start: 0.9 }}
      >
        <img src={selectedImage} alt="Full view" class="modal-img" />
        <button class="close-btn" on:click={closeImage}>&times;</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .document-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 1.5rem;
    position: relative;
    /* allow vertical scrolling */
    overflow-y: visible;
  }

  .watermark {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 8rem;
    font-family: "Courier New", "Courier", monospace;
    font-weight: bold;
    color: rgba(139, 90, 43, 0.08);
    letter-spacing: 1rem;
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }

  .content-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .title-section {
    margin-bottom: 6rem;
    text-align: center;
  }

  .document-title {
    font-family: "Georgia", serif;
    color: #1a1a1a;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
  }

  @media (min-width: 768px) {
    .document-title {
      font-size: 3rem;
    }
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 100%;
    max-width: 60rem;
    padding-bottom: 4rem;
  }

  .photo-item {
    position: relative;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
    max-width: 90%;
    background: none;
    border: none;
    padding: 0;
    cursor: zoom-in;
  }

  .photo-item:hover {
    transform: scale(1.02) rotate(0deg) !important;
    z-index: 10;
    filter: drop-shadow(0 12px 16px rgba(0, 0, 0, 0.4));
  }

  .photo-img {
    display: block;
    max-width: 100%;
    height: auto;
    border: 8px solid #fff;
    border-radius: 2px;
    background: #fff;
    pointer-events: none; /* Let the button handle clicks */
  }

  .empty-state {
    font-family: "Courier New", "Courier", monospace;
    font-size: 1.2rem;
    color: #666;
    margin: 4rem 0;
  }

  .button-container {
    margin-top: 2rem;
    position: relative;
    z-index: 2;
    padding-bottom: 2rem;
  }

  .vintage-stamp {
    background: linear-gradient(135deg, #8b0000, #a52a2a);
    color: #f5edd4;
    font-family: "Courier New", "Courier", monospace;
    font-weight: bold;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    border: 3px solid #6b0000;
    padding: 1rem 2.5rem;
    border-radius: 0.125rem;
    cursor: pointer;
    box-shadow:
      inset 0 0 0 2px #f5edd4,
      inset 0 0 0 4px #8b0000,
      0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  .vintage-stamp:hover {
    background: linear-gradient(135deg, #a52a2a, #c04040);
    transform: translateY(-2px);
    box-shadow:
      inset 0 0 0 2px #f5edd4,
      inset 0 0 0 4px #a52a2a,
      0 6px 12px rgba(0, 0, 0, 0.4);
  }

  .vintage-stamp:active {
    transform: translateY(0);
    box-shadow:
      inset 0 0 0 2px #f5edd4,
      inset 0 0 0 4px #6b0000,
      0 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Modal Styles */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 2rem;
  }

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .modal-img {
    display: block;
    max-height: 85vh;
    max-width: 100%;
    object-fit: contain;
    border: 12px solid #fff;
    border-radius: 2px;
  }

  .close-btn {
    position: absolute;
    top: -2rem;
    right: -2rem;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    padding: 0 1rem;
    line-height: 1;
    font-family: "Courier New", monospace;
    transition: transform 0.2s;
  }

  .close-btn:hover {
    transform: scale(1.1);
    color: #ffcccc;
  }
</style>
