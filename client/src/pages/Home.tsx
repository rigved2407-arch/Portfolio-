import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Circle,
  ExternalLink,
  Instagram,
  Linkedin,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const artworkPath = "/editorial-art.jpg";

const projects = [
  {
    index: "01",
    title: "Ethima",
    category: "Digital experience / Brand presence",
    year: "2026",
    description: "A clear, expressive digital home built around a confident brand point of view.",
    accent: "lime",
    link: "https://ethima.in",
    image: "/portfolio-sites/ethima.webp",
  },
  {
    index: "02",
    title: "Hair Master Kishor",
    category: "Personal brand / Service experience",
    year: "2026",
    description: "A polished, personality-led website designed to turn expertise into bookings.",
    accent: "blue",
    link: "https://hairmasterkishor.business/",
    image: "/portfolio-sites/hairmaster-kishor.webp",
  },
  {
    index: "03",
    title: "House of Hobos",
    category: "Lifestyle / Digital identity",
    year: "2026",
    description: "A memorable digital front door for a brand with an unconventional spirit.",
    accent: "ink",
    link: "https://house-of-hobos.vercel.app?_vercel_share=oaWMUae486gIKdJX7vXHvEcCMwPKbvAm",
    image: "/portfolio-sites/house-of-hobos.webp",
  },
  {
    index: "04",
    title: "Treasure Box",
    category: "E-commerce / Product storytelling",
    year: "2026",
    description: "A playful storefront that makes discovery feel tactile, simple, and rewarding.",
    accent: "gold",
    link: "https://treasurebox-1.vercel.app/",
    image: "/portfolio-sites/treasure-box.webp",
  },
  {
    index: "05",
    title: "Goyal & Co.",
    category: "Professional services / Trust-building",
    year: "2026",
    description: "A focused, credible web presence for a team that values clarity and detail.",
    accent: "rust",
    link: "https://goyal-and-co.vercel.app/#projects",
    image: "/portfolio-sites/goyal-and-co.webp",
  },
];

const services = [
  "Creative direction",
  "Web design & development",
  "Brand systems",
  "Digital experiences",
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function ProjectArtwork({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <div className="project-site-preview">
        <img src={project.image} alt={`${project.title} website preview`} />
        <div className="project-site-preview__shade" />
        <span className="project-site-preview__label">Live site / click to visit <ExternalLink size={14} /></span>
      </div>
    );
  }

  return (
    <div className={`project-art project-art--${project.accent}`} aria-hidden="true">
      {project.accent === "lime" && (
        <>
          <div className="art-window art-window--lime">
            <div className="art-window__bar"><span /><span /><span /></div>
            <div className="art-window__body">
              <div className="art-koyo-word">KŌYŌ</div>
              <div className="art-koyo-line" />
              <div className="art-koyo-circle" />
            </div>
          </div>
          <div className="art-vertical-label">A PLACE TO ARRIVE</div>
        </>
      )}
      {project.accent === "blue" && (
        <>
          <div className="art-blue-field" />
          <div className="art-object art-object--left" />
          <div className="art-object art-object--right" />
          <div className="art-blue-copy">OBJECTS<br /><em>with a history</em></div>
          <div className="art-blue-caption">VOL. 04 / 2025</div>
        </>
      )}
      {project.accent === "gold" && (
        <>
          <div className="art-gold-sun" />
          <div className="art-gold-card">
            <div className="art-gold-card__top"><span>TREASURE</span><span>BOX / 01</span></div>
            <div className="art-gold-card__title">Little<br /><i>finds.</i></div>
            <div className="art-gold-card__rule" />
            <div className="art-gold-card__foot">a collection of good things</div>
          </div>
          <div className="art-gold-label">OPEN / DISCOVER / KEEP</div>
        </>
      )}
      {project.accent === "ink" && (
        <>
          <div className="art-field-notes">
            <div className="art-field-notes__top">FIELD NOTES <span>NO. 08</span></div>
            <div className="art-field-notes__title">HOW TO<br /><i>notice</i><br />more.</div>
            <div className="art-field-notes__rule" />
            <div className="art-field-notes__foot">A publication for the in-between.</div>
          </div>
          <div className="art-orbit" />
        </>
      )}
      {project.accent === "rust" && (
        <>
          <div className="art-rust-panel">
            <div className="art-rust-panel__top"><span>GOYAL &amp; CO.</span><span>EST. 1998</span></div>
            <div className="art-rust-panel__title">Clarity<br /><i>in practice.</i></div>
            <div className="art-rust-panel__line" />
          </div>
          <div className="art-rust-shape art-rust-shape--one" />
          <div className="art-rust-shape art-rust-shape--two" />
          <div className="art-rust-caption">TRUST / DETAIL / DIRECTION</div>
        </>
      )}
      <div className="project-art__grain" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site-shell">
      <header className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
        <a className="brand" href="#top" aria-label="Rigved home">
          <span className="brand-mark"><span /></span>
          <span>RIGVED<span className="brand-dot">.</span></span>
        </a>

        <nav className="desktop-links" aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#services">Capabilities</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-right">
          <span className="availability"><span className="availability-dot" /> Taking on select projects</span>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>
            Let&apos;s talk <ArrowUpRight size={15} strokeWidth={2.2} />
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#work" onClick={() => setMenuOpen(false)}>Selected work <ArrowUpRight size={18} /></a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Capabilities <ArrowUpRight size={18} /></a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About <ArrowUpRight size={18} /></a>
            <button onClick={() => scrollTo("contact")}>Start a conversation <ArrowUpRight size={18} /></button>
          </div>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal className="eyebrow-row"><span className="eyebrow-dot" /> Independent digital designer <span className="eyebrow-year">© 2026</span></Reveal>
            <Reveal delay={80}>
              <h1>Websites with<br /><em>a point of view.</em></h1>
            </Reveal>
            <Reveal delay={160} className="hero-subrow">
              <p className="hero-lede">I build expressive, easy-to-love digital spaces for brands with something to say.</p>
              <button className="round-arrow" onClick={() => scrollTo("work")} aria-label="Explore selected work"><ArrowDownRight size={26} strokeWidth={1.5} /></button>
            </Reveal>
          </div>
          <Reveal delay={220} className="hero-art-wrap">
            <div className="hero-art" style={{ backgroundImage: `url(${artworkPath})` }}>
              <div className="hero-art-overlay" />
              <div className="hero-art-caption"><span>Selected texture / 001</span><span>Scroll to explore ↓</span></div>
            </div>
            <div className="hero-stamp"><Sparkles size={15} /><span>Made<br />with intent</span></div>
          </Reveal>
        </div>
        <div className="container hero-bottomline">
          <span>Scroll / discover</span>
          <span className="hero-bottomline__line" />
          <span>Based everywhere, working anywhere</span>
        </div>
      </section>

      <div className="ticker" aria-label="Studio principles">
        <div className="ticker-track">
          <span>Less noise, more signal</span><Circle size={8} fill="currentColor" /><span>Digital, but human</span><Circle size={8} fill="currentColor" /><span>Built to be remembered</span><Circle size={8} fill="currentColor" /><span>Less noise, more signal</span><Circle size={8} fill="currentColor" /><span>Digital, but human</span><Circle size={8} fill="currentColor" /><span>Built to be remembered</span><Circle size={8} fill="currentColor" />
        </div>
      </div>

      <section className="work-section section-pad" id="work">
        <div className="container">
          <Reveal className="section-heading">
            <div><span className="section-kicker">01 / Selected work</span><h2>A few things<br /><em>worth seeing.</em></h2></div>
            <p>Every project starts with a question, not a template. Here are a few answers.</p>
          </Reveal>
          <div className="project-list">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 90} className={`project-card project-card--${i === 0 ? "featured" : "standard"}`}>
                <a href={project.link === "#" ? "#contact" : project.link} target={project.link === "#" ? undefined : "_blank"} rel={project.link === "#" ? undefined : "noreferrer"} className="project-card__link">
                  <ProjectArtwork project={project} />
                  <div className="project-card__meta">
                    <div><span className="project-index">{project.index}</span><h3>{project.title}</h3><p>{project.category}</p></div>
                    <div className="project-card__right"><span>{project.year}</span><span className="project-link"><ExternalLink size={16} /> View project</span></div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="work-note" delay={120}>
            <span className="work-note__asterisk">✳</span>
            <p>More projects are currently in the making.<br /><a href="#contact">Ask me what&apos;s next <ArrowUpRight size={14} /></a></p>
          </Reveal>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container services-grid">
          <Reveal><span className="section-kicker">02 / Capabilities</span><h2>Small studio.<br /><em>Big thinking.</em></h2><p className="services-intro">I partner with people who care about the details, move with intention, and want their digital presence to feel unmistakably theirs.</p></Reveal>
          <Reveal delay={100} className="services-list-wrap">
            <span className="services-list-label">What I can help with</span>
            <ul className="services-list">{services.map((service, i) => <li key={service}><span className="service-number">0{i + 1}</span><span>{service}</span><ArrowUpRight size={18} /></li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="statement-section">
        <div className="container statement-inner">
          <Reveal><span className="section-kicker section-kicker--light">03 / The approach</span><p className="statement">Good design should feel <em>clear</em> at first glance, then give you a reason to stay.</p></Reveal>
          <Reveal delay={100} className="statement-side"><span>Strategy →</span><span>Structure →</span><span>Surprise →</span><span>Signal</span></Reveal>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="container about-grid">
          <Reveal className="about-mark"><div className="about-mark__circle">N</div><span>Independent<br />by design.</span></Reveal>
          <Reveal delay={100} className="about-copy"><span className="section-kicker">04 / About</span><h2>Hi, I&apos;m your<br /><em>digital partner.</em></h2><p>I&apos;m an independent website designer who likes good typography, brave ideas, and the moment a messy thought becomes a clear experience.</p><p>From the first sketch to the final line of code, I bring strategy, art direction, and craft into the same room.</p><a className="text-link" href="#contact">Tell me what you&apos;re working on <ArrowUpRight size={17} /></a></Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" />
        <div className="container contact-inner">
          <Reveal><span className="section-kicker section-kicker--light">05 / Start something</span><h2>Have a good<br /><em>feeling about this?</em></h2></Reveal>
          <Reveal delay={100} className="contact-bottom"><div className="contact-copy"><p>Tell me a little about the idea, the ambition, or simply the thing that&apos;s not working yet.</p><a className="contact-email" href="mailto:rigved2407@gmail.com">rigved2407@gmail.com <ArrowUpRight size={22} /></a></div><span className="contact-manual">Email directly / no form needed</span></Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 Rigved</span><span>Designed with intent / built for the web</span><div className="footer-socials"><a href="#top" aria-label="Instagram"><Instagram size={16} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={16} /></a></div>
        </div>
      </footer>
    </main>
  );
}

export { Check, MoveUpRight };
