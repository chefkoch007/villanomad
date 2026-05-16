/* eslint-disable */
/* Villa Dahab Nomad — sections v2 */

const AIRBNB_URL = "https://www.airbnb.de/rooms/1678802870553109690?unique_share_id=1e95772f-9461-46d0-8f32-02cd07ca52fd&viralityEntryPoint=1&s=76&source_impression_id=p3_1778677642_P3T--i2akjxz0SVt";
const GOOGLE_URL = "https://www.google.com/maps/place/Dahab+Villa+Nomad/@28.5104548,34.5087084,784m/data=!3m2!1e3!4b1!4m11!1m4!8m3!1e1!3m1!1e1!3m5!1s0x15ab4b52a6c8c355:0x5248df358741faeb!8m2!3d28.5104548!4d34.5112833!16s%2Fg%2F11z1sz85jj";

/* ---------- Reveal hook ---------- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Smooth scroll ---------- */
function useSmoothScroll() {
  React.useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

/* ---------- Subtle parallax on hero ---------- */
function useHeroParallax() {
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const img = document.querySelector('.hero-img');
      const title = document.querySelector('.hero-title');
      if (img) img.style.transform = `translateY(${y * 0.18}px) scale(${1 + y * 0.0002})`;
      if (title) title.style.transform = `translateY(${y * -0.04}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

/* ---------- Icons ---------- */
const Ico = {
  arrow: () =>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>,
  wave: () => <svg viewBox="0 0 32 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"><path d="M1 4c4 0 4 4 8 4s4-4 8-4 4 4 8 4 4-4 6-4" /></svg>,
  pool: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 17c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1M3 20c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1M7 14V6a2 2 0 012-2M17 14V6a2 2 0 00-2-2" /></svg>,
  bed: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 18V8M21 18V12a3 3 0 00-3-3H3M3 18h18M7 12h.01" /></svg>,
  wifi: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 19.5h.01" /></svg>,
  bath: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3zM6 12V6a2 2 0 014 0M3 12h18M6 19l-1 2M18 19l1 2" /></svg>,
  kitchen: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 3h14v18H5zM5 9h14M9 5h.01M9 7h.01" /></svg>,
  ac: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 7h18M3 12h18M3 17h18M7 7v10M12 7v10M17 7v10" /></svg>,
  car: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 16v-3l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5v3M3 16h18M3 16v2M21 16v2M7 13h10" /><circle cx="7.5" cy="16" r="1.2" /><circle cx="16.5" cy="16" r="1.2" /></svg>,
  flame: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3s5 4 5 9a5 5 0 11-10 0c0-3 2-4 2-6 0 0 3 1 3 4" /></svg>,
  star: (filled = true) =>
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4" width="14" height="14">
      <path d="M12 3l2.6 5.5 6 .9-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.9L12 3z" />
    </svg>,
  ext: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M9 7h8v8" /></svg>,
  close: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  chevLeft: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>,
  chevRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>,
  grid: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  menu: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 8h16M4 16h16" /></svg>,
};

/* ---------- Gallery data ---------- */
const GALLERY_IMAGES = [
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 1.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 2.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 3.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 4.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 5.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 6.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 7.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 8.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 9.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 10.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 11.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 12.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 13.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 14.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 15.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 16.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 17.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 18.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 19.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Villa Outside and Pool/Outside 20.jpg', category: 'Villa & Pool' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 1.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 2.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 3.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 4.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 5.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 6.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 7.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 8.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 9.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Master Bedroom/Bedroom 10.jpg', category: 'Master Bedroom' },
  { src: 'Bilder Franz Website/Bedroom 1/Bedroom 1.jpg', category: 'Bedroom 1' },
  { src: 'Bilder Franz Website/Bedroom 1/Bedroom 2.jpg', category: 'Bedroom 1' },
  { src: 'Bilder Franz Website/Bedroom 1/Bedroom 3.jpg', category: 'Bedroom 1' },
  { src: 'Bilder Franz Website/Bedroom 1/Bedroom 4.jpg', category: 'Bedroom 1' },
  { src: 'Bilder Franz Website/Bedroom 1/Bedroom 5.jpg', category: 'Bedroom 1' },
  { src: 'Bilder Franz Website/Bedroom 1/Bedroom 6.jpg', category: 'Bedroom 1' },
  { src: 'Bilder Franz Website/Bedroom 2/Bedroom 1.jpg', category: 'Bedroom 2' },
  { src: 'Bilder Franz Website/Bedroom 2/Bedroom 2.jpg', category: 'Bedroom 2' },
  { src: 'Bilder Franz Website/Bedroom 2/Bedroom 3.jpg', category: 'Bedroom 2' },
  { src: 'Bilder Franz Website/Bedroom 2/Bedroom 4.jpg', category: 'Bedroom 2' },
  { src: 'Bilder Franz Website/Bedroom 2/Bedroom 5.jpg', category: 'Bedroom 2' },
  { src: 'Bilder Franz Website/Kitchen/Kitchen Main.jpg', category: 'Kitchen' },
  { src: 'Bilder Franz Website/Kitchen/Kitchen 1.jpg', category: 'Kitchen' },
  { src: 'Bilder Franz Website/Kitchen/Kitchen 2.jpg', category: 'Kitchen' },
  { src: 'Bilder Franz Website/Kitchen/Kitchen 3.jpg', category: 'Kitchen' },
  { src: 'Bilder Franz Website/Kitchen/Kitchen 4.jpg', category: 'Kitchen' },
  { src: 'Bilder Franz Website/Kitchen/Kitchen 5.jpg', category: 'Kitchen' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer Main.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer 1.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer 2.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer 3.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer 4.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer 5.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Wohnzimmer/Wohnimmer 6.jpg', category: 'Living Room' },
  { src: 'Bilder Franz Website/Bad/Bad Main.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bad/Bad 1.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bad/Bad 2.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bad/Bad 4.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bad/Bad 5.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bad/Bad 6.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bath Outside/Bath Outside 1.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bath Outside/Bath Outside 2.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Bath Outside/Bath Outside 3.jpg', category: 'Bathroom' },
  { src: 'Bilder Franz Website/Whirlpool/Whirlpool Pool.jpg', category: 'Whirlpool' },
  { src: 'Bilder Franz Website/Pool Whirlpool/Pool Whirlpool.jpg', category: 'Whirlpool' },
  { src: 'Bilder Franz Website/Mood/Mood 1.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 2.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 3.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 4.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 5.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 6.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 7.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 8.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Mood/Mood 9.jpg', category: 'Mood' },
  { src: 'Bilder Franz Website/Dive the Red Sea/Red Sea.jpeg', category: 'Experiences' },
  { src: 'Bilder Franz Website/Camels at dusk /Camels 1.jpg', category: 'Experiences' },
  { src: 'Bilder Franz Website/Sinai by night/sinai by night.jpeg', category: 'Experiences' },
  { src: 'Bilder Franz Website/Daycamp/Daycamp.jpeg', category: 'Experiences' },
  { src: 'Bilder Franz Website/Lagoon Sunrise/Lagoon Sunrise.jpeg', category: 'Experiences' },
];

/* ---------- Gallery Component ---------- */
function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [filter, setFilter] = React.useState('All');
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(i => i.category)))];
  const filtered = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(i => i.category === filter);

  const openGallery = (idx) => { setCurrentIdx(idx); setOpen(true); document.body.style.overflow = 'hidden'; };
  const closeGallery = () => { setOpen(false); document.body.style.overflow = ''; };
  const next = () => setCurrentIdx((currentIdx + 1) % filtered.length);
  const prev = () => setCurrentIdx((currentIdx - 1 + filtered.length) % filtered.length);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, currentIdx, filtered.length]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  return (
    <>
      <section className="section gallery-section" id="gallery">
        <div className="gallery-head">
          <div data-reveal="left">
            <div className="eyebrow">Gallery</div>
            <h2 className="section-title">Every corner,<br/>every <em>detail</em>.</h2>
          </div>
          <button className="gallery-open-btn" data-reveal="right" style={{'--rd':'120ms'}} onClick={() => openGallery(0)}>
            <span className="ico"><Ico.grid /></span>
            <span>View all photos</span>
          </button>
        </div>
        <div className="gallery-preview" data-reveal="fade" style={{'--rd':'160ms'}}>
          {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
            <div key={i} className="gallery-preview-item" onClick={() => openGallery(i)}>
              <img src={img.src} alt={img.category} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {open && (
        <div className="gallery-lightbox" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div className="gallery-lightbox-header">
            <div className="gallery-filter-bar">
              {categories.map(cat => (
                <button key={cat} className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => { setFilter(cat); setCurrentIdx(0); }}>{cat}</button>
              ))}
            </div>
            <button className="gallery-close-btn" onClick={closeGallery}><Ico.close /></button>
          </div>
          <div className="gallery-lightbox-body">
            <button className="gallery-nav gallery-nav-prev" onClick={prev}><Ico.chevLeft /></button>
            <div className="gallery-lightbox-img">
              <img src={filtered[currentIdx]?.src} alt={filtered[currentIdx]?.category} />
            </div>
            <button className="gallery-nav gallery-nav-next" onClick={next}><Ico.chevRight /></button>
          </div>
          <div className="gallery-lightbox-footer">
            <span className="gallery-lightbox-title">{filtered[currentIdx]?.category}</span>
            <span className="gallery-lightbox-count">{currentIdx + 1} / {filtered.length}</span>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Dialog Component ---------- */
function Dialog({ open, onClose, title, children }) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h3>{title}</h3>
          <button className="dialog-close" onClick={onClose}><Ico.close /></button>
        </div>
        <div className="dialog-body">{children}</div>
      </div>
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="Villa Dahab Nomad">
          <span className="brand-name">Villa Dahab</span>
          <span className="brand-wave"><Ico.wave /></span>
          <span className="brand-name" style={{ fontStyle: 'italic', fontFamily: 'var(--serif)', textTransform: 'none', letterSpacing: '0.02em', fontSize: 13 }}>nomad</span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#villa" onClick={() => setMenuOpen(false)}>Villa</a>
          <a href="#host" onClick={() => setMenuOpen(false)}>Host</a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="#dahab" onClick={() => setMenuOpen(false)}>Dahab</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        </nav>
        <div className="header-actions">
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="cta-pill">
            <span>Book on Airbnb</span>
            <Ico.arrow />
          </a>
          <button className={`icon-btn menu-only ${menuOpen ? 'menu-active' : ''}`} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}><Ico.menu /></button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-frame">
        <img className="hero-img" src="Bilder Franz Website/Hero/Hero Image.jpg" alt="Villa Dahab Nomad" />
        <div className="hero-tint"></div>
        <div className="hero-vignette"></div>

        <div className="hero-content">
          <div className="hero-top">
            <span className="htop-l">N 28°30' · E 34°31'</span>
            <span className="htop-c">RED SEA · SOUTH SINAI</span>
            <span className="htop-r">EST. 2024</span>
          </div>
          <div className="hero-center">
            <h1 className="hero-title">VILLA DAHAB <em>nomad</em></h1>
            <p className="hero-sub">
              A private retreat between desert and sea —
              three bedrooms, a quiet pool, a whirlpool under the stars.
            </p>
          </div>
          <div className="hero-bottom">
            <div className="hero-meta">
              <span><span className="num">6</span>Sleeps</span>
              <span><span className="num">3</span>Bedrooms</span>
              <span><span className="num">2</span>Bathrooms</span>
              <span><span className="num">400<small style={{ fontSize: '0.55em' }}>m²</small></span>Indoor + outdoor</span>
              <span><span className="num">4'</span>To the sea</span>
            </div>
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="hero-cta">
              <span>Check availability</span>
              <span className="arrow"><Ico.arrow /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Intro ---------- */
function Intro() {
  return (
    <section className="section" id="villa">
      <div className="intro">
        <div data-reveal="left">
          <div className="eyebrow">Welcome</div>
          <h2 className="serif intro-quote">
            A slow stay in <em>Dahab</em> — where the desert meets the
            most luminous water on the Red&nbsp;Sea.
          </h2>
        </div>
        <div className="intro-right" data-reveal="right" style={{ '--rd': '120ms' }}>
          <p className="lead">
            Villa Dahab Nomad is a private home built for travellers who want more
            than a hotel. Wake up to the sound of a quiet pool, breakfast on the
            sun deck, drift into the village for fresh juice, and end the day in
            the whirlpool under a sky thick with stars.
          </p>
          <p className="lead">
            Built and run by a local dive instructor who's lived here for years —
            so your stay comes with the kind of recommendations and access you
            don't get on any booking platform.
          </p>
        </div>
      </div>
      <div className="stat-row" data-reveal="fade" style={{ '--rd': '200ms' }}>
        <div className="stat"><span className="v">6</span><span className="l">Guests · Sleeps up to</span></div>
        <div className="stat"><span className="v">3</span><span className="l">Bedrooms · 2 Bathrooms</span></div>
        <div className="stat"><span className="v">400<span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>m²</span></span><span className="l">Indoor + outdoor</span></div>
        <div className="stat"><span className="v">4<span style={{ fontSize: '0.5em' }}> min</span></span><span className="l">Walk to the sea</span></div>
      </div>
    </section>
  );
}

/* ---------- Spaces ---------- */
function Spaces() {
  const rooms = [
    { corner: '01 / Pool & Terrace', img: 'Bilder Franz Website/Villa Outside and Pool/Outside 1.jpg' },
    { corner: '02 / Bathroom', img: 'Bilder Franz Website/Bad/Bad Main.jpg' },
    { corner: '03 / Master Bedroom', img: 'Bilder Franz Website/Master Bedroom/Bedroom 1.jpg' },
    { corner: '04 / Whirlpool', img: 'Bilder Franz Website/Pool Whirlpool/Pool Whirlpool.jpg' },
    { corner: '05 / Kitchen', img: 'Bilder Franz Website/Kitchen/Kitchen Main.jpg' },
    { corner: '06 / Living Room', img: 'Bilder Franz Website/Wohnzimmer/Wohnimmer Main.jpg' },
  ];
  const reveals = ['left','right','left','zoom','right','fade'];
  return (
    <section className="section spaces">
      <div className="spaces-head">
        <div data-reveal="left">
          <div className="eyebrow">The Villa</div>
          <h2 className="section-title">Six rooms,<br/>one long <em>exhale</em>.</h2>
        </div>
        <div data-reveal="right" style={{ '--rd': '120ms', maxWidth: '38ch' }}>
          <p className="lead">
            Pool deck, hot tub, three quiet bedrooms, a kitchen built for long
            dinners, and a living room to unwind. Explore the full gallery below.
          </p>
        </div>
      </div>
      <div className="spaces-grid">
        {rooms.map((room, i) => (
          <div className={`tile tile-${i+1}`} key={i} data-reveal={reveals[i]} style={{ '--rd': `${i * 60}ms` }}>
            <img src={room.img} alt={room.corner} loading="lazy" />
            <span className="tile-corner">{room.corner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Amenities ---------- */
function Amenities() {
  const items = [
    { ico: 'pool', n: 'Private pool', d: 'Sun all day. Sun loungers, towels, plunge-cool.' },
    { ico: 'flame', n: 'Outdoor whirlpool', d: 'Warm jets under a sky full of southern stars.' },
    { ico: 'bed', n: '3 bedrooms · 6 guests', d: 'Linen sheets, blackout curtains, ceiling fans.' },
    { ico: 'bath', n: '2 full bathrooms', d: 'Rainfall shower, gentle pressure, hot water always.' },
    { ico: 'kitchen', n: 'Cook-in kitchen', d: 'Espresso, gas hob, oven, all the boring tools done right.' },
    { ico: 'ac', n: 'Cool air, smart climate', d: 'Split AC in every room. Whisper-quiet at night.' },
    { ico: 'wifi', n: 'Fast wifi · workable', d: 'Fibre line. Good for video calls and remote work.' },
    { ico: 'car', n: 'Parking + airport pick-up', d: 'On-site parking. SSH transfer arranged on request.' },
  ];
  return (
    <section className="section">
      <div className="amenities">
        <div data-reveal="left">
          <div className="eyebrow">What's inside</div>
          <h2 className="section-title">The boring stuff,<br/>done <em>properly</em>.</h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: '34ch' }}>
            The villa is fully self-contained — bring a swimsuit and a book.
            Everything else is here.
          </p>
        </div>
        <div className="amenity-list" data-reveal="right" style={{ '--rd': '120ms' }}>
          {items.map((a, i) => {
            const Svg = Ico[a.ico];
            return (
              <div className="amenity" key={i}>
                <span className="ico"><Svg /></span>
                <div><div className="a-name">{a.n}</div><div className="a-desc">{a.d}</div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Host ---------- */
function Host() {
  return (
    <section className="section host" id="host">
      <div className="host-grid">
        <div className="host-portrait" data-reveal="left">
          <img src="Bilder Franz Website/Host Profile Image/Host.jpg" alt="Your host" />
          <div className="host-stamps">
            <span className="stamp">DIVE INSTRUCTOR</span>
            <span className="stamp">10+ yrs in Dahab</span>
            <span className="stamp">DE · EN · AR</span>
          </div>
        </div>
        <div className="host-body" data-reveal="right" style={{ '--rd': '140ms' }}>
          <div className="eyebrow">Meet your host</div>
          <h2 className="section-title">Not just a key —<br/>a <em>local friend</em>.</h2>
          <p>Hi, I'm your host. I built this villa as the kind of place I wished existed when I first arrived in Dahab — quiet, well-made, close to the water, and run by someone who actually picks up the phone.</p>
          <p>By day I'm a certified dive instructor. By evening I'm the person who knows which Bedouin camp is doing the best fire-grilled fish this week, which reef is glassy at sunrise, and which tailor can stitch you a galabeya by tomorrow morning.</p>
          <p>Stay with us and you tap into all of it. No upsells, no commissions — just the network.</p>
          <div className="host-sign">
            — Franz Balazs
            <small>Founder · Villa Dahab Nomad</small>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experiences ---------- */
function Experiences() {
  const exps = [
    { num:'01', tag:'In-house', img:'Bilder Franz Website/Dive the Red Sea/Red Sea.jpeg', title:<>Dive the <em>Red Sea</em></>, desc:'World-class dive sites, certifications, and private guides — all run by your host. Reefs minutes from the door.' },
    { num:'02', tag:'Network', img:'Bilder Franz Website/Camels at dusk /Camels 1.jpg', title:<>Camels at <em>dusk</em></>, desc:'Bedouin guides take you up into the canyons. Tea brewed on a wood fire, dunes in golden light.' },
    { num:'03', tag:'Network', img:'Bilder Franz Website/Sinai by night/sinai by night.jpeg', title:<>Sinai by <em>night</em></>, desc:'Coloured Canyon, White Canyon, a night in a black-sky desert camp. We pick the right guide for the weather.' },
    { num:'04', tag:'Local', img:'Bilder Franz Website/Daycamp/Daycamp.jpeg', title:<>Stay at <em>Daycamp</em></>, desc:'A day trip or overnight at a Bedouin beach camp — fire, sea, sand, and nothing else. The real Sinai experience.' },
  ];
  return (
    <section className="section" id="experiences">
      <div className="experiences-head">
        <div data-reveal="left">
          <div className="eyebrow">Beyond the villa</div>
          <h2 className="section-title">Experiences,<br/>arranged <em>quietly</em>.</h2>
        </div>
        <p className="lead" data-reveal="right" style={{ '--rd': '120ms', maxWidth: '42ch' }}>
          From desert trips and snorkelling to diving certifications, overnight camps,
          hotel resort excursions, or simply trusted recommendations from your host —
          everything is possible. Years on the ground means the right guide, the right
          boat, the right camp — without the tourist mark-up.
        </p>
      </div>
      <div className="exp-grid">
        {exps.map((e, i) => (
          <article className="exp-card" key={i} data-reveal="zoom" style={{ '--rd': `${i * 120}ms` }}>
            <img src={e.img} alt="" loading="lazy" />
            <div className="exp-card-content">
              <div className="exp-card-top">
                <span className="exp-num">{e.num}</span>
                <span className="exp-tag">{e.tag}</span>
              </div>
              <div><h3>{e.title}</h3><p>{e.desc}</p></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Dahab ---------- */
function Dahab() {
  return (
    <section className="section dahab" id="dahab">
      <div className="dahab-grid">
        <div className="dahab-body" data-reveal="left">
          <div className="eyebrow">The town</div>
          <h2 className="section-title">Dahab moves at <em>its own</em> pace.</h2>
          <p>A Bedouin fishing village that grew, gently, into the soul of the Sinai. Barefoot cafés on the seafront, world-class reefs ten metres from the shore, mountains behind you, an immense quiet desert one short drive away.</p>
          <p>We're in Mashraba — quiet, residential, four minutes' walk to the promenade, ten to the Lighthouse reef. Close enough for everything, far enough to actually sleep.</p>
          <div className="dahab-list">
            <div><span className="min">4'</span> Sea promenade</div>
            <div><span className="min">10'</span> Lighthouse reef</div>
            <div><span className="min">15'</span> Assalah cafés</div>
            <div><span className="min">25'</span> Blue Hole</div>
            <div><span className="min">40'</span> Coloured Canyon</div>
            <div><span className="min">1h 20'</span> Sharm Airport (SSH)</div>
          </div>
        </div>
        <div className="dahab-img" data-reveal="right" style={{ '--rd': '120ms' }}>
          <img src="Bilder Franz Website/Lagoon Sunrise/Lagoon Sunrise.jpeg" alt="Dahab Lagoon at sunrise" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Villa Tour (Video) ---------- */
function VillaTour() {
  return (
    <section className="section villa-tour" id="tour">
      <div className="villa-tour-inner">
        <div className="villa-tour-text" data-reveal="left">
          <div className="eyebrow">Villa Tour</div>
          <h2 className="section-title">Step <em>inside</em>.</h2>
          <p className="lead">A walk through the villa — from the sun-drenched terrace into the heart of the house. No narration, just the space speaking for itself.</p>
        </div>
        <div className="villa-tour-video" data-reveal="right" style={{ '--rd': '120ms' }}>
          <video autoPlay loop muted playsInline>
            <source src="Bilder Franz Website/Video/villa-tour.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews (Google Reviews) ---------- */
function Reviews() {
  const reviews = [
    { q: "Really lovely stay in this villa. Clean rooms, all time access to the pool, outdoor shower, awesome kitchen, private space and many more things. The host is always available for help and also a great cook. He is also very well connected in Dahab which gives you a way better experience overall. Thank you very much for the stay.", n: "Sebastian K.", m: "Google Review", i: "S", stars: 5 },
    { q: "A truly wonderful accommodation with excellent amenities and tasteful furnishings throughout the entire house. The host was very friendly and helpful, offering many valuable tips about the town as well as activities and excursions in the surrounding area. The accommodation is only about five minutes from the sea. Absolute recommendation.", n: "A Ha", m: "Google Review", i: "A", stars: 5 },
    { q: "Located in a very quiet street in Asala. A fantastic place to stay with an extremely friendly owner. The rooms are very comfortable and the bathroom is high-quality equipped. Comfortable, large couch and a beautiful garden with pool and whirlpool invite you to relax.", n: "Phanendra D.", m: "Google Review", i: "P", stars: 5 },
  ];
  return (
    <section className="section reviews" id="reviews">
      <div className="reviews-head">
        <div data-reveal="left">
          <div className="eyebrow">Google Reviews</div>
          <h2 className="section-title">What our <em>guests</em> say.</h2>
          <div className="review-score">
            <span className="big">5.0</span>
            <div>
              <div className="stars" style={{ display: 'flex', gap: 3 }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>{Ico.star(true)}</span>)}
              </div>
              <div className="label">Google Reviews</div>
            </div>
          </div>
        </div>
        <div data-reveal="right" style={{ '--rd': '120ms' }}>
          <div className="review-platforms">
            <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="platform-pill">
              <span className="badge" style={{ background: '#1E4A4F' }}>G</span>
              <span>Read on Google</span>
              <Ico.ext />
            </a>
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="platform-pill">
              <span className="badge">A</span>
              <span>Book on Airbnb</span>
              <Ico.ext />
            </a>
          </div>
        </div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review" key={i} data-reveal="fade" style={{ '--rd': `${i * 120}ms` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="stars">{Array.from({ length: r.stars }).map((_, j) => <span key={j}>{Ico.star(true)}</span>)}</div>
              <span className="src">via Google</span>
            </div>
            <p className="review-quote">"{r.q}"</p>
            <div className="review-author">
              <span className="review-avatar">{r.i}</span>
              <div><div className="nm">{r.n}</div><div className="mt">{r.m}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Big CTA ---------- */
function BookCTA() {
  return (
    <section className="book-cta">
      <div className="book-cta-inner">
        <div className="book-cta-grid">
          <div data-reveal="left"><h2>Take the <em>nomad</em><br/>route home.</h2></div>
          <div data-reveal="right" style={{ '--rd': '160ms' }}>
            <p>Availability, dates and pricing live on Airbnb — the way you already book. Instant confirmation, full protection, no fuss.</p>
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="big-btn">
              <span>Check dates on Airbnb</span>
              <span className="arrow"><Ico.arrow /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const [impressum, setImpressum] = React.useState(false);
  const [datenschutz, setDatenschutz] = React.useState(false);
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="serif">Villa Dahab <em>Nomad</em></div>
          <p>A private retreat in Mashraba, Dahab — South Sinai, Egypt. Bookings handled through Airbnb.</p>
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <a href="#villa">The villa</a>
          <a href="#host">Your host</a>
          <a href="#experiences">Experiences</a>
          <a href="#dahab">Dahab</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="footer-col">
          <h4>Book</h4>
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Airbnb listing &rarr;</a>
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Contact via Airbnb</a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <button className="footer-link-btn" onClick={() => setImpressum(true)}>Impressum</button>
          <button className="footer-link-btn" onClick={() => setDatenschutz(true)}>Datenschutz</button>
        </div>
      </div>
      <div className="footer-bot">
        <span>&copy; 2026 Villa Dahab Nomad</span>
        <span>Dahab · 28°30'N 34°31'E</span>
        <span>Made with care in Sinai</span>
      </div>

      <Dialog open={impressum} onClose={() => setImpressum(false)} title="Impressum">
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p>Villa Dahab Nomad<br/>Mashraba, Dahab<br/>South Sinai, Egypt</p>
        <p><strong>Vertreten durch:</strong><br/>[Name des Betreibers]</p>
        <p><strong>Kontakt:</strong><br/>E-Mail: [E-Mail-Adresse]<br/>Telefon: [Telefonnummer]</p>
        <p><strong>Haftungsausschluss:</strong></p>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
      </Dialog>
      <Dialog open={datenschutz} onClose={() => setDatenschutz(false)} title="Datenschutzerklärung">
        <p><strong>1. Datenschutz auf einen Blick</strong></p>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        <p><strong>2. Datenerfassung auf dieser Website</strong></p>
        <p>Diese Website verwendet keine Cookies und sammelt keine personenbezogenen Daten. Externe Links führen zu Airbnb, deren eigene Datenschutzrichtlinien gelten.</p>
        <p><strong>3. Externe Links</strong></p>
        <p>Unsere Website enthält Links zu externen Websites (Airbnb). Auf deren Inhalte und Datenschutzpraktiken haben wir keinen Einfluss.</p>
      </Dialog>
    </footer>
  );
}

/* ---------- export ---------- */
Object.assign(window, {
  Header, Hero, Intro, Spaces, Amenities, Host, Experiences,
  Dahab, Reviews, BookCTA, Footer, Gallery, VillaTour, Dialog,
  useReveal, useHeroParallax, useSmoothScroll, AIRBNB_URL,
});
