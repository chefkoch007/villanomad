/* eslint-disable */
/* Villa Dahab Nomad — app entry */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "sand",
  "heroStyle": "framed",
  "showStars": true
}/*EDITMODE-END*/;

const PALETTES = {
  sand:    { bg: '#F2ECE1', soft: '#EDE5D6', deep: '#E4D9C4', paper: '#FAF6EE', terra: '#B8632E', sea: '#1E4A4F' },
  bone:    { bg: '#F1EEE8', soft: '#E7E2D6', deep: '#D8D0BF', paper: '#F8F5EE', terra: '#9C5731', sea: '#2A4F4C' },
  rust:    { bg: '#E8DBC9', soft: '#DDCDB6', deep: '#C9B69A', paper: '#F4EAD8', terra: '#A14A22', sea: '#264344' },
  midnight:{ bg: '#161412', soft: '#1F1B17', deep: '#2A2520', paper: '#F4ECDB', terra: '#D88554', sea: '#3A6E72' },
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.sand;
  const r = document.documentElement.style;
  r.setProperty('--bg', p.bg);
  r.setProperty('--bg-soft', p.soft);
  r.setProperty('--bg-deep', p.deep);
  r.setProperty('--paper', p.paper);
  r.setProperty('--terra', p.terra);
  r.setProperty('--sea', p.sea);
  if (name === 'midnight') {
    r.setProperty('--ink', '#F4ECDB');
    r.setProperty('--ink-soft', '#D9CFBC');
    r.setProperty('--ink-mute', '#9A8E7A');
    r.setProperty('--line', 'rgba(244,236,219,0.16)');
    r.setProperty('--line-soft', 'rgba(244,236,219,0.08)');
  } else {
    r.setProperty('--ink', '#1A1714');
    r.setProperty('--ink-soft', '#3D362F');
    r.setProperty('--ink-mute', '#6E6358');
    r.setProperty('--line', 'rgba(26, 23, 20, 0.14)');
    r.setProperty('--line-soft', 'rgba(26, 23, 20, 0.08)');
  }
}

function App() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  React.useEffect(() => {
    document.documentElement.dataset.hero = t.heroStyle || 'framed';
  }, [t.heroStyle]);
  useReveal();
  useSmoothScroll();

  return (
    <>
      <TopStrip />
      <Header />
      <Hero />
      <Intro />
      <Spaces />
      <Amenities />
      <Host />
      <Experiences />
      <Dahab />
      <Gallery />
      <Reviews />
      <BookCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakColor
            label="Theme"
            value={
              t.palette === 'midnight' ? ['#161412','#D88554','#F4ECDB'] :
              t.palette === 'rust'     ? ['#A14A22','#E8DBC9','#264344'] :
              t.palette === 'bone'     ? ['#F1EEE8','#9C5731','#2A4F4C'] :
                                         ['#F2ECE1','#B8632E','#1E4A4F']
            }
            options={[
              ['#F2ECE1','#B8632E','#1E4A4F'],
              ['#F1EEE8','#9C5731','#2A4F4C'],
              ['#A14A22','#E8DBC9','#264344'],
              ['#161412','#D88554','#F4ECDB'],
            ]}
            onChange={(v) => {
              const key = Array.isArray(v) ? v[0] : v;
              const map = { '#F2ECE1':'sand', '#F1EEE8':'bone', '#A14A22':'rust', '#161412':'midnight' };
              setT('palette', map[key] || 'sand');
            }}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakRadio
            label="Style"
            value={t.heroStyle}
            options={['framed','full']}
            onChange={(v)=> setT('heroStyle', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
