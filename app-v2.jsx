/* eslint-disable */
/* Villa Dahab Nomad — app v2 */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "off-white",
  "heroStyle": "framed"
}/*EDITMODE-END*/;

const PALETTES = {
  'off-white': { bg:'#FAF7F1', soft:'#F4EFE6', deep:'#EBE3D2', paper:'#FEFCF7', terra:'#B8632E', sea:'#1E4A4F' },
  'bone':      { bg:'#F4F1EB', soft:'#ECE7DC', deep:'#DDD5C3', paper:'#FBF8F1', terra:'#9C5731', sea:'#2A4F4C' },
  'sand':      { bg:'#F2ECE1', soft:'#EDE5D6', deep:'#E4D9C4', paper:'#FAF6EE', terra:'#B8632E', sea:'#1E4A4F' },
  'rust':      { bg:'#E8DBC9', soft:'#DDCDB6', deep:'#C9B69A', paper:'#F4EAD8', terra:'#A14A22', sea:'#264344' },
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES['off-white'];
  const r = document.documentElement.style;
  r.setProperty('--bg', p.bg);
  r.setProperty('--bg-soft', p.soft);
  r.setProperty('--bg-deep', p.deep);
  r.setProperty('--paper', p.paper);
  r.setProperty('--terra', p.terra);
  r.setProperty('--sea', p.sea);
}

function App() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  React.useEffect(() => {
    document.documentElement.dataset.hero = t.heroStyle || 'framed';
  }, [t.heroStyle]);
  useReveal();
  useHeroParallax();
  useSmoothScroll();

  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Spaces />
      <Amenities />
      <Host />
      <Experiences />
      <Dahab />
      <Gallery />
      <VillaTour />
      <Reviews />
      <BookCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakColor
            label="Theme"
            value={
              t.palette === 'rust' ? ['#A14A22','#E8DBC9','#264344'] :
              t.palette === 'sand' ? ['#F2ECE1','#B8632E','#1E4A4F'] :
              t.palette === 'bone' ? ['#F4F1EB','#9C5731','#2A4F4C'] :
                                     ['#FAF7F1','#B8632E','#1E4A4F']
            }
            options={[
              ['#FAF7F1','#B8632E','#1E4A4F'],
              ['#F4F1EB','#9C5731','#2A4F4C'],
              ['#F2ECE1','#B8632E','#1E4A4F'],
              ['#E8DBC9','#A14A22','#264344'],
            ]}
            onChange={(v) => {
              const key = Array.isArray(v) ? v[0] : v;
              const map = { '#FAF7F1':'off-white', '#F4F1EB':'bone', '#F2ECE1':'sand', '#E8DBC9':'rust' };
              setT('palette', map[key] || 'off-white');
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
