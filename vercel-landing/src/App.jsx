import React from 'react'

const FEATURES = [
  { id: 1, icon: '📋', title: 'Gestión de Eventos', desc: 'Crea eventos, define rutas y administra inscripciones fácilmente.' },
  { id: 2, icon: '👥', title: 'Registro de Corredores', desc: 'Los ciclistas se registran y reciben un ID único con código QR.' },
  { id: 3, icon: '📍', title: 'Tracking en Tiempo Real', desc: 'Sigue la posición de los competidores en vivo durante la carrera.' },
  { id: 4, icon: '📊', title: 'Análisis y Reportes', desc: 'Dashboards con estadísticas, tiempos y desempeño detallado.' },
  { id: 5, icon: '💳', title: 'Pagos Integrados', desc: 'Gestiona pagos de inscripciones de forma segura.' },
  { id: 6, icon: '🔔', title: 'Notificaciones', desc: 'Alertas en tiempo real para organizadores y participantes.' },
]

const STEPS = [
  { num: '01', icon: '👤', title: 'Regístrate', desc: 'Crea tu cuenta con tus datos.' },
  { num: '02', icon: '🔍', title: 'Explora Eventos', desc: 'Descubre carreras y actividades.' },
  { num: '03', icon: '✅', title: 'Inscríbete', desc: 'Participa en tu evento favorito.' },
  { num: '04', icon: '🎫', title: 'Obtén tu Número', desc: 'Recibe tu identificador y QR.' },
]

const STATS = [
  { icon: '🏆', value: '200+', label: 'Ciclistas Activos' },
  { icon: '🎯', value: '50+', label: 'Eventos Realizados' },
  { icon: '🌍', value: '5+', label: 'Ciudades' },
  { icon: '⚡', value: '24/7', label: 'Soporte' },
]

export default function App() {
  return (
    <div className="landing-container">
      {/* HERO */}
      <header className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">🚴 Plataforma de Eventos Ciclistas</div>
          <h1 className="hero-title">CycleRace Pro</h1>
          <p className="hero-subtitle">La plataforma completa para organizar, seguir y analizar carreras ciclistas de cualquier tamaño.</p>
          <div className="actions">
            <a className="btn btn-primary" href="https://taller4compiladoresproyecto.softwarecadenas.com.mx/" target="_blank" rel="noopener noreferrer">Acceder a CycleRace Pro</a>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-grid">
          {STATS.map(stat => (
            <div key={stat.value} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="main-content">
        {/* QUÉ ES */}
        <section className="about-section">
          <div className="section-header">
            <h2>¿Qué es CycleRace Pro?</h2>
          </div>
          <p>
            Una plataforma integral que centraliza todas las necesidades de tu evento ciclista.
            Desde la inscripción de participantes, seguimiento en tiempo real durante la carrera,
            hasta análisis detallado de rendimiento y generación de reportes.
          </p>
          <p>
            Diseñada para organizadores que buscan una experiencia profesional y escalable,
            sin complicaciones técnicas.
          </p>
        </section>

        {/* CARACTERÍSTICAS */}
        <section className="features-section">
          <div className="section-header">
            <h2>Características Principales</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="steps-section">
          <div className="section-header">
            <h2>¿Cómo Funciona?</h2>
          </div>
          <div className="how-it-works">
            <ol>
              <li><strong>Crea tu Cuenta:</strong> Regístrate rápidamente con tus datos.</li>
              <li><strong>Explora Eventos:</strong> Descubre carreras, paseos, talleres y más.</li>
              <li><strong>Inscríbete:</strong> Selecciona tu evento favorito y realiza la inscripción.</li>
              <li><strong>Recibe tu Acceso:</strong> Obtén tu número de competidor con código QR.</li>
              <li><strong>Compite:</strong> Participa y disfruta del tracking en tiempo real.</li>
              <li><strong>Revisa Resultados:</strong> Consulta análisis y reportes de tu desempeño.</li>
            </ol>
          </div>
          <div className="steps-grid">
            {STEPS.map(step => (
              <div key={step.num} className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECNOLOGÍA */}
        <section className="tech-section">
          <div className="section-header">
            <h2>Tecnología Confiable</h2>
          </div>
          <ul>
            <li>🎨 <strong>Frontend Moderno:</strong> React + Vite para una experiencia rápida y responsiva.</li>
            <li>🔐 <strong>Backend Escalable:</strong> Múltiples microservicios (Node.js, Python, Go).</li>
            <li>📦 <strong>Bases de Datos:</strong> MongoDB, MySQL, PostgreSQL para máxima flexibilidad.</li>
            <li>🚀 <strong>Despliegue:</strong> Docker y Docker Compose para fácil deployement.</li>
            <li>⚙️ <strong>Tracking:</strong> Sistema de seguimiento en tiempo real integrado.</li>
          </ul>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <h2>¿Listo para organizar tu evento?</h2>
          <p>Accede a CycleRace Pro y comienza ahora mismo.</p>
          <a className="btn btn-primary btn-lg" href="https://taller4compiladoresproyecto.softwarecadenas.com.mx/" target="_blank" rel="noopener noreferrer">Acceder Ahora</a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>CycleRace Pro © 2026. Plataforma para Eventos Ciclistas.</p>
      </footer>
    </div>
  )
}
