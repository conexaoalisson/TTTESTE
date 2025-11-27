import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <h1 className="logo">TechSuper</h1>
            <p className="tagline">Soluções em Telefonia IP</p>
          </div>
          <nav>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
            <a href="#area-cliente" className="btn-login">Área do Cliente</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">PABX NAS NUVENS</h1>
            <p className="hero-subtitle">
              Sistema completo de telefonia empresarial com tecnologia VoIP.
              Reduza custos e aumente a produtividade da sua empresa.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">Falar com Vendas</button>
              <button className="cta-button secondary">Teste Grátis</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-illustration">📞</div>
          </div>
        </div>
      </section>

      {/* DID Explanation */}
      <section className="did-section">
        <div className="container">
          <div className="info-card">
            <h2>O que é DID (Número Virtual)?</h2>
            <p>
              Direct Inward Dialing permite que sua empresa tenha números de telefone
              sem necessidade de linhas físicas. Receba chamadas de qualquer lugar
              através da internet com qualidade profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="features">
        <div className="container">
          <h2 className="section-title">Funcionalidades Principais</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>URA Inteligente</h3>
              <p>Atendimento automático personalizado com menu de opções</p>
              <span className="check">✅</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Transferência de Chamadas</h3>
              <p>Transfira ligações entre ramais com facilidade</p>
              <span className="check">✅</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Relatórios Completos</h3>
              <p>Acompanhe métricas e estatísticas em tempo real</p>
              <span className="check">✅</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Integração WhatsApp</h3>
              <p>Conecte seu PABX com WhatsApp Business</p>
              <span className="check">✅</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎧</div>
              <h3>Gravação de Chamadas</h3>
              <p>Grave e armazene todas as conversas importantes</p>
              <span className="check">✅</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Softphone Móvel</h3>
              <p>Atenda de qualquer lugar pelo celular ou computador</p>
              <span className="check">✅</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="pricing">
        <div className="container">
          <h2 className="section-title">Planos e Preços</h2>
          <p className="pricing-subtitle">Escolha o plano ideal para sua empresa</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Básico</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">79</span>
                <span className="period">/mês</span>
              </div>
              <ul className="features-list">
                <li>✓ Até 5 ramais</li>
                <li>✓ 1 número DID incluso</li>
                <li>✓ URA básica</li>
                <li>✓ Suporte por email</li>
                <li>✓ 1.000 minutos/mês</li>
              </ul>
              <button className="pricing-button">Contratar</button>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Mais Popular</div>
              <h3>Profissional</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">149</span>
                <span className="period">/mês</span>
              </div>
              <ul className="features-list">
                <li>✓ Até 20 ramais</li>
                <li>✓ 3 números DID inclusos</li>
                <li>✓ URA avançada</li>
                <li>✓ Suporte prioritário</li>
                <li>✓ 5.000 minutos/mês</li>
                <li>✓ Gravação de chamadas</li>
                <li>✓ Relatórios completos</li>
              </ul>
              <button className="pricing-button">Contratar</button>
            </div>
            <div className="pricing-card">
              <h3>Empresarial</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">299</span>
                <span className="period">/mês</span>
              </div>
              <ul className="features-list">
                <li>✓ Ramais ilimitados</li>
                <li>✓ DIDs ilimitados</li>
                <li>✓ URA personalizada</li>
                <li>✓ Suporte 24/7</li>
                <li>✓ Minutos ilimitados</li>
                <li>✓ Integração WhatsApp</li>
                <li>✓ Gerente dedicado</li>
                <li>✓ API completa</li>
              </ul>
              <button className="pricing-button">Contratar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="contact-text">
            Nossa equipe está pronta para atender sua empresa!
          </p>
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>(11) 9999-9999</p>
              <button className="contact-button whatsapp">Chamar no WhatsApp</button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>contato@techsuper.com.br</p>
              <button className="contact-button email">Enviar Email</button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Telefone</h3>
              <p>0800 123 4567</p>
              <button className="contact-button phone">Ligar Agora</button>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget Placeholder */}
      <div className="chat-widget">
        <button className="chat-button">💬</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>TechSuper Telecom</h4>
              <p>Soluções completas em telefonia IP para sua empresa</p>
            </div>
            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#planos">Planos</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TechSuper Telecom. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
