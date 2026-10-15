
import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="dashboard">
    <header class="header">
      <div>
        <p class="eyebrow">YOUR PERSONAL MUSIC DATA</p>
        <h1>Spotify Dashboard</h1>
        <p class="subtitle">
          Explore your listening habits, one track at a time.
        </p>
      </div>

      <button id="login-button" type="button">
        Connect Spotify
      </button>
    </header>

    <section class="profile-card">
      <h2>Your listening, visualised.</h2>
      <p>
        Connect your Spotify account to retrieve your profile
        and start exploring your music.
      </p>
      <p id="status">Not connected yet</p>
    </section>

    <section class="stats">
      <article class="stat-card">
        <p>Display name</p>
        <h3 id="display-name">—</h3>
      </article>

      <article class="stat-card">
        <p>Followers</p>
        <h3 id="followers">—</h3>
      </article>

      <article class="stat-card">
        <p>Spotify ID</p>
        <h3 id="spotify-id">—</h3>
      </article>
    </section>
  </main>
`

document.querySelector('#login-button').addEventListener('click', () => {
  document.querySelector('#status').textContent =
    'BROKEN'
})
