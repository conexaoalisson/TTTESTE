import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">WHMCS</h1>
          <nav>
            <a href="#features">Recursos</a>
            <a href="#pricing">Preços</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Automatize Seu Negócio de Hosting</h1>
          <p className="hero-subtitle">
            WHMCS - A solução completa para gerenciar seus clientes,
            faturamento e serviços de hospedagem em um só lugar.
          </p>
          <button className="cta-button">Começar Agora</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Recursos Principais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Gestão de Clientes</h3>
              <p>Gerencie todos os seus clientes de forma centralizada</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Faturamento Automático</h3>
              <p>Automatize cobranças e pagamentos recorrentes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Suporte Integrado</h3>
              <p>Sistema de tickets e área do cliente completa</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Automação Total</h3>
              <p>Provisionamento automático de serviços</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Planos e Preços</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">99</span>
                <span className="period">/mês</span>
              </div>
              <ul className="features-list">
                <li>✓ Até 250 clientes</li>
                <li>✓ Suporte por email</li>
                <li>✓ 1 domínio</li>
              </ul>
              <button className="pricing-button">Escolher Plano</button>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Mais Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">199</span>
                <span className="period">/mês</span>
              </div>
              <ul className="features-list">
                <li>✓ Clientes ilimitados</li>
                <li>✓ Suporte prioritário</li>
                <li>✓ Domínios ilimitados</li>
                <li>✓ Módulos extras</li>
              </ul>
              <button className="pricing-button">Escolher Plano</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">399</span>
                <span className="period">/mês</span>
              </div>
              <ul className="features-list">
                <li>✓ Tudo do Professional</li>
                <li>✓ Suporte 24/7</li>
                <li>✓ Personalização</li>
                <li>✓ Gerente dedicado</li>
              </ul>
              <button className="pricing-button">Escolher Plano</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="contact-text">
            Tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <button className="cta-button">Falar com Vendas</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 WHMCS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
