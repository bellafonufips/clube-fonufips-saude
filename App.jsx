const plans = [
  {
    name: 'Essencial',
    price: 'R$ 19,90/mês',
    items: ['Carteirinha digital', 'Clube de benefícios', 'Rede de profissionais', 'Suporte'],
  },
  {
    name: 'Saúde',
    price: 'R$ 29,90/mês',
    items: ['Tudo do Essencial', 'Teleorientação', 'Descontos ampliados', 'Acesso familiar'],
  },
  {
    name: 'Premium',
    price: 'R$ 49,90/mês',
    items: ['Tudo do Saúde', 'Telemedicina', 'Prioridade no atendimento', 'Benefícios exclusivos'],
  },
]

const specialties = [
  'Fonoaudiologia',
  'Fisioterapia',
  'Psicologia',
  'Terapia Ocupacional',
  'Nutrição',
  'Telemedicina',
]

const professionals = [
  { name: 'Rede multidisciplinar FONUFIPS', area: 'Atendimento integrado', city: 'São Luís - MA', value: 'Valores especiais para associados' },
  { name: 'Telemedicina FONUFIPS', area: 'Orientação em saúde', city: 'Online', value: 'Acesso conforme plano' },
  { name: 'Equipe de reabilitação', area: 'Fono, Físio, TO e Psicologia', city: 'São Luís - MA', value: 'Condição diferenciada' },
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div>
          <div className="brand">💚 Clube FONUFIPS Saúde</div>
          <div className="subtitle">Cuidado, acolhimento e saúde acessível para você e sua família.</div>
        </div>
        <button className="primary">Entrar</button>
      </header>

      <main className="container">
        <section className="hero grid2">
          <div>
            <span className="pill">Bem-vindo ao cuidado FONUFIPS</span>
            <h1>Um aplicativo pensado para cuidar de você.</h1>
            <p className="lead">
              Aqui você encontra orientação em saúde, rede de profissionais, benefícios e serviços
              pensados para trazer mais tranquilidade para você e sua família.
            </p>
            <div className="actions">
              <button className="primary">Sou associado</button>
              <button className="secondary">Sou prestador</button>
            </div>
            <div className="stats">
              <div className="stat"><strong>São Luís - MA</strong><span>Base principal</span></div>
              <div className="stat"><strong>Rede multidisciplinar</strong><span>FONUFIPS</span></div>
            </div>
          </div>

          <div className="card highlight">
            <h3>Seu cuidado começa aqui</h3>
            <p>Acesse sua carteirinha digital, encontre profissionais e aproveite benefícios exclusivos.</p>
            <div className="search">🔎 Ex.: fisioterapia, psicologia, telemedicina</div>
            <div className="mini-grid">
              <div className="mini-card"><strong>Carteirinha digital</strong><span>Identificação rápida no atendimento.</span></div>
              <div className="mini-card"><strong>Suporte</strong><span>Equipe pronta para ajudar.</span></div>
            </div>
            <div className="chips">
              {specialties.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section>
          <h2>Benefícios do clube</h2>
          <div className="grid4">
            <article className="card"><h3>Telemedicina</h3><p>Atendimento online rápido para orientar você e sua família quando precisarem.</p></article>
            <article className="card"><h3>Clube de benefícios</h3><p>Descontos em consultas, terapias, exames, farmácia e parceiros de saúde.</p></article>
            <article className="card"><h3>Rede FONUFIPS</h3><p>Profissionais preparados para cuidar da sua saúde com atenção e acolhimento.</p></article>
            <article className="card"><h3>Agendamento fácil</h3><p>Marque atendimentos de forma simples diretamente pelo aplicativo.</p></article>
          </div>
        </section>

        <section>
          <h2>Carteirinha digital</h2>
          <div className="grid2">
            <div className="card card-id">
              <div className="id-top">Clube FONUFIPS Saúde</div>
              <h3>Associado Exemplo</h3>
              <p>Plano Saúde</p>
              <p>Nº 000245</p>
              <div className="qr">QR</div>
            </div>
            <div className="card">
              <h3>Como funciona</h3>
              <p>O associado apresenta a carteirinha digital no atendimento e valida seu acesso aos benefícios do clube.</p>
              <ul>
                <li>Identificação rápida</li>
                <li>Visual leve e acolhedor</li>
                <li>Base para integração futura com a Tenex</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Rede de profissionais</h2>
          <div className="grid3">
            {professionals.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.area}</p>
                <p>{p.city}</p>
                <p>{p.value}</p>
                <button className="secondary full">Solicitar atendimento</button>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Planos disponíveis</h2>
          <div className="grid3">
            {plans.map((plan) => (
              <article className="card" key={plan.name}>
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <ul>
                  {plan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <button className="primary full">Escolher plano</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
