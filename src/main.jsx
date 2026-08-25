import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ResumePage, OtherProjectsPage } from './pages.jsx'

const projectAssets = [
  { no: '01', type: 'FLAGSHIP PRODUCT', image: '/a525-real.png', featured: true, hover: '/a525-brick.png' },
  { no: '02', type: 'FLAGSHIP PRODUCT', image: '/lotus-real.png', featured: true, hover: '/lotus-brick.png' },
  { no: '03', type: 'FLAGSHIP PRODUCT', image: '/renault-real.png', featured: true, hover: '/renault-brick.png' },
]

const copy = {
  zh: { nav: ['首页', '关于我', '项目', '优势', '联系'], contact: '联系我', portrait: ['以热爱', '驱动创新'], heroLead: '让产品成为', heroAccent: '被选择的理由', role: '市场经理 / 产品经理', roleDetail: '将洞察转化为增长与落地', intro: '我是一名以市场洞察驱动产品落地的产品经理。关注用户、趋势与商业结果之间那些真正发生作用的连接。', profile: '日本留学背景，拥有大型集团实习经历及产品经理专项培训经验；擅长跨部门协同，能够在复杂、不确定的业务环境下驱动项目推进落地。', aboutName: '黄浩烨', aboutRole: '产品经理 • 商品开发负责人', aboutBody: ['深度参与市场竞品与用户调研，依托销售数据强化市场洞察，输出产品优化策略，参与新品创意规划及合作商定制方案搭建。', '具备从用户研究、商品企划、系列设计，到供应链对接和销售复盘的完整开发经验。'], stats: [['50', '+', '管理产品'], ['20', '+', '已上市产品'], ['300', '万+', '新品订单销售额']], projectTitle: ['BWT 阿尔派 F1 A525', '莲花跑车 Exige Cup 430', '雷诺 5 Turbo / R.S. 01'], projectDetail: ['1:8 / 1:24', '1:8 / 1:24', '1:24'], selected: '精选', selectedAccent: '项目', selectedDesc: '以商业目标为锚点，从洞察到上市，让每个环节持续产生价值。', strength: '把复杂的问题', strengthAccent: '做成清晰的路径。', strengthDesc: '我的工作方法，始终围绕“理解 - 定义 - 推进 - 复盘”展开。', strengthCards: [['市场与用户洞察', '拆解趋势、竞品、销售和一线反馈，寻找有价值的需求信号。', 'INSIGHT'], ['产品全周期管理', '从立项、定义、开发到上市，兼顾产品体验、进度与结果。', 'PRODUCT'], ['跨部门协同', '连接设计、研发、生产、销售与合作方，让目标成为共同语言。', 'ALIGNMENT'], ['数据复盘迭代', '以市场反馈和经营数据校准方向，持续打磨产品与策略。', 'ITERATION'], ['始终以热爱驱动创新', '以长期主义与内在热爱为源，让每一次创新都源于对用户与产品本质的坚持。', 'PASSION']], closeLead: '开始一段', closeAccent: '有结果的合作' },
  en: { nav: ['Home', 'About', 'Work', 'Strengths', 'Contact'], contact: 'Contact', portrait: ['DRIVEN BY', 'PASSION'], heroLead: 'Make products', heroAccent: 'worth choosing', role: 'PRODUCT / MARKETING MANAGER', roleDetail: 'Turning insight into growth and execution', intro: 'I am a product manager who turns market insight into product outcomes. I focus on the connections that make users, trends and business results work together.', profile: 'With a study background in Japan, large-group internship experience and specialized product-manager training, I build cross-functional alignment and drive projects forward in complex, uncertain environments.', aboutName: 'HAOYE HUANG', aboutRole: 'Product Manager • Head of Merchandise Development', aboutBody: ['Deeply involved in market competitor and user research, strengthening market insight with sales data, delivering product optimization strategies, and contributing to new product creative planning and partner customization solutions.', 'Complete development experience spanning user research, product planning, series design, supply chain coordination, and sales review.'], stats: [['50', '+', 'Products managed'], ['20', '+', 'Launched products'], ['RMB 3M', '+', 'New-product order sales']], projectTitle: ['BWT Alpine F1 A525', 'Lotus Exige Cup 430', 'Renault 5 Turbo / R.S. 01'], projectDetail: ['1:8 / 1:24', '1:8 / 1:24', '1:24'], selected: 'Selected', selectedAccent: 'work', selectedDesc: 'Anchored in commercial goals, from insight to launch, every step should create value.', strength: 'Make complex problems', strengthAccent: 'a clear path.', strengthDesc: 'My process is built around understanding, defining, advancing and reflecting.', strengthCards: [['Market & User Insight', 'Read trends, competitors, sales and frontline feedback to surface valuable signals.', 'INSIGHT'], ['End-to-End Product Management', 'Balance product experience, progress and outcomes from concept to launch.', 'PRODUCT'], ['Cross-Functional Alignment', 'Connect design, R&D, production, sales and partners through shared goals.', 'ALIGNMENT'], ['Data-Led Iteration', 'Use market feedback and performance data to refine product and strategy.', 'ITERATION'], ['Always Innovate with Passion', 'Ground every idea in long-term thinking and genuine care for users and products.', 'PASSION']], closeLead: 'Let’s start', closeAccent: 'a meaningful collaboration' },
  ja: { nav: ['ホーム', '私について', 'プロジェクト', '強み', '連絡'], contact: '連絡する', portrait: ['情熱で', '革新を'], heroLead: 'プロダクトを', heroAccent: '選ばれる理由に', role: 'プロダクト / マーケティングマネージャー', roleDetail: '洞察を成長と実行につなげる', intro: '市場の洞察をプロダクトの成果へ変えるプロダクトマネージャーです。ユーザー、トレンド、事業成果をつなぐ本質的な関係に注目しています。', profile: '日本留学の背景を持ち、大手グループでのインターン経験とプロダクトマネージャー専門研修を経て、部門横断の連携を得意とし、複雑で不確実な環境でもプロジェクトを推進します。', aboutName: 'コウ　コウヨウ', aboutRole: 'プロダクトマネージャー • 商品開発責任者', aboutBody: ['市場の競合・ユーザー調査に深く関わり、販売データで市場洞察を強化し、プロダクト最適化戦略を立案。新製品の企画やパートナー向けカスタム提案にも携わります。', 'ユーザーリサーチ、商品企画、シリーズ設計から、サプライチェーン連携、販売振り返りまで、開発の全工程を経験しています。'], stats: [['50', '+', '管理製品数'], ['20', '+', '上市済み製品'], ['300', '万+', '新製品の受注売上']], projectTitle: ['BWT Alpine F1 A525', 'ロータス Exige Cup 430', 'ルノー 5 Turbo / R.S. 01'], projectDetail: ['1:8 / 1:24', '1:8 / 1:24', '1:24'], selected: '注目', selectedAccent: 'プロジェクト', selectedDesc: '事業目標を軸に、洞察から上市まで、各工程で価値を生み出します。', strength: '複雑な課題を', strengthAccent: '明確な道筋に。', strengthDesc: '理解、定義、推進、振り返りを中心に仕事を進めます。', strengthCards: [['市場とユーザーの洞察', 'トレンド、競合、販売、現場の声を分析し、価値あるシグナルを見つけます。', 'INSIGHT'], ['製品ライフサイクル管理', '企画から上市まで、製品体験・進行・成果のバランスを取ります。', 'PRODUCT'], ['部門横断の連携', 'デザイン、開発、生産、営業、パートナーを共通目標でつなぎます。', 'ALIGNMENT'], ['データによる改善', '市場の反応と実績データで、製品と戦略を継続的に磨きます。', 'ITERATION'], ['常に情熱で革新を', '長期的な視点と本物の熱量を原動力に、ユーザーとプロダクトへの愛を革新につなげる。', 'PASSION']], closeLead: '成果につながる', closeAccent: '協働を始めましょう' },
}

function Arrow() { return <span className="arrow">↗</span> }

function App() {
  const initialLanguage = new URLSearchParams(window.location.search).get('lang')
  const [language, setLanguage] = useState(initialLanguage === 'en' || initialLanguage === 'ja' ? initialLanguage : 'zh')
  const [active, setActive] = useState('hero')
  const t = copy[language]
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('load')
  const [ready, setReady] = useState(false)
  const [view, setView] = useState(new URLSearchParams(window.location.search).get('view') || 'home')
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    if (phase !== 'load') return
    let raf
    const start = performance.now()
    const duration = 2100
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const value = p >= 1 ? 100 : Math.min(99, eased * 100 + Math.random() * 1.2)
      setProgress(value)
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setPhase('wipe'), 1000)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase])
  useEffect(() => {
    if (phase === 'wipe') {
      const t = setTimeout(() => setPhase('done'), 720)
      return () => clearTimeout(t)
    }
    if (phase === 'done') {
      const t = setTimeout(() => setReady(true), 560)
      return () => clearTimeout(t)
    }
  }, [phase])
  useEffect(() => {
    const onScroll = () => {
      const ids = [['hero'], ['about'], ['projects'], ['strengths'], ['contact']]
      const current = ids.findLast(([id]) => document.getElementById(id)?.getBoundingClientRect().top < window.innerHeight * .42)
      if (current) setActive(current[0])
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const navTimer = useRef(null)
  const goView = (v) => {
    if (v === view || leaving) return
    setLeaving(true)
    if (navTimer.current) clearTimeout(navTimer.current)
    navTimer.current = setTimeout(() => {
      setView(v)
      setLeaving(false)
      const q = new URLSearchParams(window.location.search)
      if (v === 'home') q.delete('view'); else q.set('view', v)
      const s = q.toString()
      window.history.pushState({}, '', `${window.location.pathname}${s ? '?' + s : ''}`)
      window.scrollTo(0, 0)
    }, 600)
  }
  useEffect(() => {
    const onPop = () => setView(new URLSearchParams(window.location.search).get('view') || 'home')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const nav = ['hero', 'about', 'projects', 'strengths', 'contact']
  const switchLanguage = (next) => {
    setLanguage(next)
    const q = new URLSearchParams(window.location.search)
    if (next === 'zh') q.delete('lang'); else q.set('lang', next)
    const s = q.toString()
    window.history.replaceState({}, '', `${window.location.pathname}${s ? '?' + s : ''}`)
  }
  if (view !== 'home') {
    return <main className={`secondary ${leaving ? 'is-leaving' : ''}`}>{view === 'resume' ? <ResumePage t={t} language={language} goView={goView} switchLanguage={switchLanguage} Arrow={Arrow} /> : <OtherProjectsPage t={t} language={language} goView={goView} switchLanguage={switchLanguage} Arrow={Arrow} projects={projectAssets} />}</main>
  }
  return <>
    {!ready && <div className={`fofa-loader${phase === 'wipe' || phase === 'done' ? ' is-wiping' : ''}${phase === 'done' ? ' is-hidden' : ''}`} role="status" aria-live="polite" aria-hidden={phase === 'done'}>
      <div className="loader-track" />
      <div className="loader-fill" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress)} style={{ height: `${progress}%` }} />
      <div className="loader-brand">
        <span className="loader-eyebrow">HAOYE &middot; HUANG</span>
        <strong>FOFA</strong>
        <span className="loader-sub">PRODUCT &times; MARKET</span>
      </div>
      <div className="loader-readout">
        <span className="loader-count">{Math.round(progress)}%</span>
        <span className="loader-caption">资源加载中 &middot; LOADING</span>
      </div>
      <div className="loader-tagline">MAKE PRODUCTS WORTH CHOOSING</div>
      <div className="loader-wipe" />
    </div>}
    <main className={`${ready ? 'is-loaded' : ''} ${leaving ? 'is-leaving' : ''}`}>
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1900&q=85">
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
      <header className="nav shell is-floating">
        <a className="brand" href="#about" onClick={(e) => { e.preventDefault(); go('about') }}><i />HAOYE<span>·</span>HUANG</a>
        <nav aria-label="主导航">{nav.map((id, index) => <a aria-current={active === id ? 'page' : undefined} className={active === id ? 'active' : ''} key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); go(id) }}>{t.nav[index]}</a>)}</nav>
        <div className="nav-actions"><div className="language-switcher" aria-label="Language"><button className={language === 'zh' ? 'active' : ''} onClick={() => switchLanguage('zh')}>CH</button><span>/</span><button className={language === 'en' ? 'active' : ''} onClick={() => switchLanguage('en')}>EN</button><span>/</span><button className={language === 'ja' ? 'active' : ''} onClick={() => switchLanguage('ja')}>JP</button></div><button className="contact-btn" onClick={() => go('contact')}>{t.contact} <Arrow /></button></div>
      </header>
      <div className="hero-copy shell">
        <p className="eyebrow"><span /> PRODUCT × MARKET</p>
        <h1>{t.heroLead}<br /><em>{t.heroAccent}</em></h1>
        <div className="hero-bottom"><button onClick={() => go('projects')} className="round-button" aria-label="查看项目">↓</button></div>
      </div>
          </section>

    <section className="about section shell" id="about">
      <div className="section-kicker">01 / ABOUT ME</div>
      <div className="about-grid">
        <div className="portrait"><div className="portrait-copy">{t.portrait[0]}<br />{t.portrait[1]}</div><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85" alt="协作讨论场景" /></div>
        <div className="about-content">
          <div className="about-head"><p className="large-intro">{t.aboutName}</p><p className="about-subtitle">{t.aboutRole}</p><div className="about-body">{t.aboutBody.map((p, i) => <p key={i}>{p}</p>)}</div></div>
          <div className="about-detail"><div><span>PROFILE</span><p>{t.profile}</p></div><div><span>CONTACT</span><a href="mailto:hanabihuang@outlook.com">hanabihuang@outlook.com <Arrow /></a><a href="tel:18688632031">+86 186 8863 2031 <Arrow /></a></div></div>
          <div className="about-extra"><a className="page-link-card" href="?view=resume" onClick={(e) => { e.preventDefault(); goView('resume') }}>个人在线简历 <span className="arrow">→</span></a></div>
        </div>
      </div>
      <div className="stats">{t.stats.map(([value, suffix, label]) => <div key={label}><b>{value}<span>{suffix}</span></b><p>{label}</p></div>)}</div>
    </section>

    <section className="projects section" id="projects"><div className="shell"><div className="section-head"><div className="section-kicker">02 / SELECTED WORK</div><h2>{t.selected}<span>{t.selectedAccent}</span></h2><p>{t.selectedDesc}</p></div><div className="project-list">{projectAssets.map((p, index) => <article className="project" key={p.no}><div className={`project-image ${p.gallery ? 'project-gallery' : ''}`}>{p.gallery ? <div className="gallery-stack">{p.gallery.map((image, imageIndex) => <img key={image} src={image} alt={`${t.projectTitle[index]} ${imageIndex + 1}`} />)}</div> : <><img className={`${p.featured ? 'featured-project-image' : ''}${p.hover ? ' fit-car' : ''}`} src={p.image} alt={t.projectTitle[index]} />{p.hover && <img className="project-hover" src={p.hover} alt="" />}</>}<div className="project-shade" /><span>{p.no}</span></div><div className="project-meta"><p>{p.type}</p><h3>{t.projectTitle[index]}</h3><small>{t.projectDetail[index]}</small></div></article>)}</div><div className="project-extra"><a className="page-link-card" href="?view=other" onClick={(e) => { e.preventDefault(); goView('other') }}>其他项目 <span className="arrow">→</span></a></div></div></section>

    <section className="strengths section shell" id="strengths"><div className="section-kicker">03 / HOW I WORK</div><div className="strengths-title"><h2>{t.strength}<br /><span>{t.strengthAccent}</span></h2><p>{t.strengthDesc}</p></div><div className="strength-grid">{t.strengthCards.map(([title, description, label], index) => <article key={label}><b>{String(index + 1).padStart(2, '0')}</b><h3>{title}</h3><p>{description}</p><i>{label}</i></article>)}</div></section>

    <section className="contact" id="contact"><div className="contact-noise" /><div className="shell contact-inner"><div><p className="eyebrow"><span /> LET'S BUILD WHAT'S NEXT</p><h2>{t.closeLead}<br /><em>{t.closeAccent}</em></h2></div><a className="email" href="mailto:hanabihuang@outlook.com">hanabihuang<br />@outlook.com <Arrow /></a><footer><span>© 2026 HAOYE HUANG</span><a href="#hero" onClick={(e) => { e.preventDefault(); go('hero') }}>BACK TO TOP ↑</a></footer></div></section>
    </main>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
