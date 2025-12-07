<script>
  import { goto } from "$app/navigation";

  function handleEnter() {
    goto("/files");
  }
</script>

<!-- Background Layer -->
<div
  class="
    min-h-screen
    w-full
    contrast-[200%]
    brightness-100
    bg-fixed
    bg-center
    bg-cover
    bg-grain
    bg-size-grain
    bg-[linear-gradient(142deg,rgba(231,132,255,1),rgba(103,127,199,1))]
    "
></div>

<!-- Content Layer -->
<div
  class="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 py-12"
>
  <!-- Document Card with Realistic Slide Animation -->
  <div class="w-full max-w-5xl slide-up-realistic">
    <!-- Paper texture background with aged styling -->
    <div
      class="relative rounded-sm shadow-2xl p-12 md:p-16 overflow-hidden"
      style="
        background: 
          linear-gradient(rgba(245, 237, 220, 0.98), rgba(235, 223, 203, 0.98)),
          url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 /%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23noise)%22 opacity=%220.15%22/%3E%3C/svg%3E');
        background-size: 100%, 200px 200px;
        font-family: 'Courier New', 'Courier', monospace;
      "
    >
      <!-- Document Header -->
      <div
        class="mb-8"
        style="font-family: 'Courier New', 'Courier', monospace;"
      >
        <p
          class="text-base font-bold mb-3"
          style="color: #2d2d2d; letter-spacing: 3px; font-size: 1.1rem;"
        >
          CONFIDENTIAL
        </p>
        <p class="text-base font-semibold mb-1" style="color: #2d2d2d;">
          Subject: Skyro Files
        </p>
        <p class="text-base font-semibold" style="color: #2d2d2d;">
          Classification: Top Secret – Restricted Access
        </p>
      </div>

      <!-- Document Body -->
      <div
        class="mb-10 leading-relaxed"
        style="color: #1a1a1a; font-size: 1.05rem; line-height: 1.9;"
      >
        <p class="mb-5">
          The contents of the Skyro Files pertain to highly sensitive operations
          involving cross-platform data streams, user analytics, and internal
          communications. Unauthorized disclosure could compromise system
          integrity, expose operational methodologies, and reveal proprietary
          algorithms. Access is strictly limited to personnel with Level 5
          clearance or higher. All interactions with the files are logged and
          monitored in real time. Any external transmission, duplication, or
          discussion outside approved channels is considered a severe breach of
          protocol.
        </p>
        <p class="mb-5">
          Containment procedures are in effect. All personnel are required to
          sign a non-disclosure acknowledgment before engagement. The Skyro
          Files remain under continuous review for security anomalies.
        </p>
        <p class="font-bold">End of Document.</p>
      </div>

      <!-- Enter Button -->
      <div class="flex justify-center">
        <button class="vintage-stamp px-16 py-5 text-xl" on:click={handleEnter}>
          ENTER
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes slideUpRealistic {
    0% {
      transform: translateY(120%) rotateX(8deg);
      opacity: 0;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
    }
    60% {
      transform: translateY(-3%) rotateX(-1deg);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }
    80% {
      transform: translateY(1%) rotateX(0.5deg);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
    }
    100% {
      transform: translateY(0) rotateX(0deg);
      opacity: 1;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    }
  }

  .slide-up-realistic {
    animation: slideUpRealistic 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      forwards;
    transform-origin: center bottom;
  }

  .vintage-stamp {
    position: relative;
    background: linear-gradient(135deg, #8b0000, #a52a2a);
    color: #f5edd4;
    font-family: "Courier New", "Courier", monospace;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
    border: 3px solid #6b0000;
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
</style>
