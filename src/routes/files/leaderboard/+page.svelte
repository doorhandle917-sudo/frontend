<script>
  import { goto } from "$app/navigation";

  function handlePageDown() {
    goto("/files/screenshots");
  }
</script>

<div class="document-page">
  <!-- Confidential watermark -->
  <div class="watermark">CONFIDENTIAL</div>

  <div class="content-wrapper">
    <!-- Title -->
    <div class="title-section">
      <h1 class="document-title">N-word leaderboard</h1>
    </div>

    <!-- Leaderboard List -->
    <div class="leaderboard-list">
      <div class="leaderboard-item">
        <span class="name">Gabo:</span> <span class="count highlight">182</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">Samo:</span> <span class="count">92</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">Samo:</span> <span class="count">35</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">David:</span> <span class="count">23</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">Gabo:</span> <span class="count">182</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">Samo:</span> <span class="count">92</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">Samo:</span> <span class="count">35</span>
      </div>

      <div class="leaderboard-item">
        <span class="name">David:</span> <span class="count">23</span>
      </div>
    </div>

    <!-- Page Down Button -->
    <div class="button-container">
      <button class="vintage-stamp" on:click={handlePageDown}>
        page down
      </button>
    </div>
  </div>
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
  }

  /* Confidential watermark */
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
    justify-content: center;
    max-width: 64rem;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .title-section {
    margin-bottom: 4rem;
  }

  .document-title {
    font-family: "Georgia", serif;
    color: #1a1a1a;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 768px) {
    .document-title {
      font-size: 3rem;
    }
  }

  .leaderboard-list {
    width: 100%;
    max-width: 42rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .leaderboard-item {
    font-family: "Georgia", serif;
    font-size: 1.25rem;
    color: #1a1a1a;
    font-weight: bold;
    text-align: center;
  }

  .name {
    color: #1a1a1a;
  }

  .count {
    color: #2563eb;
  }

  .count.highlight {
    color: #dc2626;
  }

  .button-container {
    margin-top: 4rem;
    position: relative;
    z-index: 2;
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
</style>
