import React from 'react'

export default function App() {
  return (
    <div className="landing-root">
      <header className="hero">
        <div className="logo">CR</div>
        <div>
          <h1>CycleRace Pro</h1>
          <p className="lead">Plataforma para organizar, seguir y analizar carreras ciclistas.</p>
          <div className="actions">
            <a className="btn" href="https://taller4compiladoresproyecto.softwarecadenas.com.mx/" target="_blank" rel="noopener noreferrer">Acceder</a>
          </div>
        </div>
      </header>

      <main className="content">
        <section>
          <h2>¿Qué es CycleRace Pro?</h2>
          <p>
            CycleRace Pro centraliza inscripciones, seguimiento en tiempo real y análisis de rendimiento
            para eventos ciclistas de cualquier tamaño. Está compuesto por varios servicios (frontends
            y backends) que gestionan inscripciones, tracking, notificaciones y dashboards analíticos.
          </p>
        </section>

        <section>
          <h2>Cómo desplegar esta carpeta en Vercel</h2>
          <ol>
            <li>Sube el repositorio a GitHub/GitLab/Bitbucket.</li>
            <li>En Vercel selecciona "Import Project" y el repositorio.</li>
            <li>Como Root Directory, selecciona <strong>vercel-landing</strong>.</li>
            <li>Build command: <code>npm run build</code>. Output directory: <code>dist</code>.</li>
          </ol>
        </section>

        <section>
          <h2>Archivos incluidos</h2>
          <ul>
            <li><code>package.json</code> — scripts y dependencias</li>
            <li><code>index.html</code> — punto de entrada</li>
            <li><code>src/</code> — código React y estilos</li>
          </ul>
        </section>
      </main>

      <footer className="footer">¿Quieres que lo suba y configure el deploy? Puedo ayudar.</footer>
    </div>
  )
}
