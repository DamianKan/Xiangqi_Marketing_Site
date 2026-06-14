(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <header>
    <h1>象棋 Xiangqi</h1>
    <nav>
      <a href="#features">Features</a>
      <a href="#play">Play</a>
      <a href="#learn">Learn</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Master Chinese Chess</h2>
    <p>
      Xiangqi is one of the world's oldest and most strategic board games.
      Challenge yourself, learn openings, and compete online.
    </p>
    <a href="#play" class="btn">Play Now</a>
  </section>

  <section class="features" id="features">
    <div class="feature-card">
      <h3>Play Online</h3>
      <p>Compete against players worldwide in real-time matches.</p>
    </div>
    <div class="feature-card">
      <h3>Learn the Game</h3>
      <p>Interactive tutorials from beginner to advanced strategies.</p>
    </div>
    <div class="feature-card">
      <h3>Puzzle Training</h3>
      <p>Sharpen your tactics with thousands of curated puzzles.</p>
    </div>
  </section>

  <footer>
    <p>&copy; ${new Date().getFullYear()} Xiangqi Marketing Site. All rights reserved.</p>
  </footer>
`;
