function Arrow() { return <span className="arrow">↗</span> }

function SecondaryShell({ children, goView, switchLanguage, language }) {
  const back = language === 'zh' ? '返回首页' : language === 'ja' ? 'ホームへ' : 'Back Home'
  return (
    <div className="secondary-shell">
      <header className="secondary-nav">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); goView('home') }}><i />HAOYE<span>·</span>HUANG</a>
        <div className="nav-actions">
          <div className="language-switcher" aria-label="Language">
            <button className={language === 'zh' ? 'active' : ''} onClick={() => switchLanguage('zh')}>CH</button><span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>EN</button><span>/</span>
            <button className={language === 'ja' ? 'active' : ''} onClick={() => switchLanguage('ja')}>JP</button>
          </div>
          <button className="contact-btn" onClick={() => goView('home')}>{back} <Arrow /></button>
        </div>
      </header>
      {children}
    </div>
  )
}

export function ResumePage({ t, language, goView, switchLanguage }) {
  return (
    <SecondaryShell goView={goView} switchLanguage={switchLanguage} language={language}>
      <section className="secondary-hero">
        <p className="eyebrow"><span /> ONLINE RESUME</p>
        <h1>{language === 'zh' ? '个人在线简历' : language === 'ja' ? 'オンライン履歴書' : 'Online Resume'}</h1>
        <p>{t.intro}</p>
      </section>
      <section className="resume-grid">
        <div className="resume-profile">
          <p className="about-subtitle">{t.aboutRole}</p>
          <h2>{t.aboutName}</h2>
          <p>{t.profile}</p>
          {t.aboutBody.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="resume-skills">
          <h3>{language === 'zh' ? '核心能力' : language === 'ja' ? 'コアスキル' : 'Core Skills'}</h3>
          {t.strengthCards.map(([title, description]) => <div key={title}><b>{title}</b><p>{description}</p></div>)}
        </div>
      </section>
      <section className="resume-stats">{t.stats.map(([value, suffix, label]) => <div key={label}><b>{value}<span>{suffix}</span></b><p>{label}</p></div>)}</section>
      <section className="resume-contact">
        <h3>{language === 'zh' ? '联系方式' : language === 'ja' ? '連絡先' : 'Contact'}</h3>
        <a href="mailto:hanabihuang@outlook.com">hanabihuang@outlook.com <Arrow /></a>
        <a href="tel:18688632031">+86 186 8863 2031 <Arrow /></a>
      </section>
    </SecondaryShell>
  )
}

const extraProjects = [
  { src: '/project-alpine-a525.png', no: '04', zh: 'BWT Alpine F1 A525 · 赛道', en: 'BWT Alpine F1 A525 · Race', ja: 'BWTアルピーヌ F1 A525 · レース', detail: '1:8 / F1' },
  { src: '/project-lotus-green.png', no: '05', zh: 'Lotus Exige Cup 430 · 绿色', en: 'Lotus Exige Cup 430 · Green', ja: 'ロータス Exige Cup 430 · 緑', detail: '1:8' },
  { src: '/project-renault-r5.png', no: '06', zh: 'Renault 5 Turbo', en: 'Renault 5 Turbo', ja: 'ルノー 5 ターボ', detail: '1:24' },
  { src: '/project-renault-sport.png', no: '07', zh: 'Renault Sport', en: 'Renault Sport', ja: 'ルノー スポーツ', detail: '1:24' },
  { src: '/project-renault-race.png', no: '08', zh: 'Renault R.S. 01 · 赛道', en: 'Renault R.S. 01 · Race', ja: 'ルノー R.S. 01 · レース', detail: '1:24' },
]

export function OtherProjectsPage({ t, language, goView, switchLanguage, projects }) {
  const mainProjects = projects.map((p, i) => ({ src: p.image, no: p.no, title: t.projectTitle[i], detail: t.projectDetail[i] }))
  const extras = extraProjects.map((e) => ({ src: e.src, no: e.no, title: language === 'en' ? e.en : language === 'ja' ? e.ja : e.zh, detail: e.detail }))
  const gallery = [...mainProjects, ...extras]
  return (
    <SecondaryShell goView={goView} switchLanguage={switchLanguage} language={language}>
      <section className="secondary-hero">
        <p className="eyebrow"><span /> SELECTED WORK</p>
        <h1>{language === 'zh' ? '主导项目' : language === 'ja' ? '主要プロジェクト' : 'Featured Projects'}</h1>
        <p>{t.selectedDesc}</p>
      </section>
      <section className="other-project-grid">
        {gallery.map((p) => <figure className="other-project" key={p.no}><img src={p.src} alt={p.title} /><figcaption><b>{p.no}</b><h3>{p.title}</h3><small>{p.detail}</small></figcaption></figure>)}
      </section>
    </SecondaryShell>
  )
}