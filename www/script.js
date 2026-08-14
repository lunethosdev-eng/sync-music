/* ===== CONFIG ===== */
const API_KEY = 'AIzaSyAsjo41B4fe5JJqG_a8eJODESlj_qDsSF0';
const OPENROUTER_KEY = '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';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const CHROMO_MODEL = 'google/gemini-2.0-flash-001';
const CHANGELOG_KEY = 'simpmusic_changelog_v02';
const STORE = 'simpmusic_v6';

/* ===== AUDIO ENGINES / DOWNLOAD ===== */
const PIPED_INSTANCES = [
  'https://api.piped.private.coffee',
  'https://pipedapi.leptons.xyz',
  'https://pipedapi.reallyaweso.me',
  'https://pipedapi.drgns.space',
  'https://pipedapi.darkness.services',
  'https://pipedapi.orangenet.cc',
  'https://pipedapi.ducks.party',
];
const INVIDIOUS_INSTANCES = [
  'https://inv.nadeko.net',
  'https://invidious.materialio.us',
  'https://yewtu.be',
  'https://invidious.privacyredirect.com',
];
const USER_BACKEND = 'https://backend-1-k2na.onrender.com';

/* ===== DEMO ===== */
const DEMO = [
  { id: '4NRXx6U8ABQ', title: 'Blinding Lights', artist: 'The Weeknd', thumb: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg', high: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg' },
  { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran', thumb: 'https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg', high: 'https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg' },
  { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi', thumb: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg', high: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', thumb: 'https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg', high: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg' },
  { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen', thumb: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg', high: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg' },
  { id: 'hT_nvWreIhg', title: 'Counting Stars', artist: 'OneRepublic', thumb: 'https://i.ytimg.com/vi/hT_nvWreIhg/mqdefault.jpg', high: 'https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg' },
  { id: 'YQHsXMglC9A', title: 'Hello', artist: 'Adele', thumb: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg', high: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg' },
  { id: '2Vv-BfVoq4I', title: 'Perfect', artist: 'Ed Sheeran', thumb: 'https://i.ytimg.com/vi/2Vv-BfVoq4I/mqdefault.jpg', high: 'https://i.ytimg.com/vi/2Vv-BfVoq4I/hqdefault.jpg' },
  { id: 'DyDfgMOUjCI', title: 'bad guy', artist: 'Billie Eilish', thumb: 'https://i.ytimg.com/vi/DyDfgMOUjCI/mqdefault.jpg', high: 'https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg' },
  { id: 'gniWZxKqG3s', title: 'As It Was', artist: 'Harry Styles', thumb: 'https://i.ytimg.com/vi/gniWZxKqG3s/mqdefault.jpg', high: 'https://i.ytimg.com/vi/gniWZxKqG3s/hqdefault.jpg' },
  { id: 'H5v3kku4y6Q', title: 'Flowers', artist: 'Miley Cyrus', thumb: 'https://i.ytimg.com/vi/H5v3kku4y6Q/mqdefault.jpg', high: 'https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg' },
  { id: 'a9cyG_yfh1k', title: 'Anti-Hero', artist: 'Taylor Swift', thumb: 'https://i.ytimg.com/vi/a9cyG_yfh1k/mqdefault.jpg', high: 'https://i.ytimg.com/vi/a9cyG_yfh1k/hqdefault.jpg' },
  { id: 'tu4Hgmlcd9c', title: 'TQG', artist: 'KAROL G, Shakira', thumb: 'https://i.ytimg.com/vi/tu4Hgmlcd9c/mqdefault.jpg', high: 'https://i.ytimg.com/vi/tu4Hgmlcd9c/hqdefault.jpg' },
  { id: 'p7FCgw_GlWc', title: 'Provenza', artist: 'KAROL G', thumb: 'https://i.ytimg.com/vi/p7FCgw_GlWc/mqdefault.jpg', high: 'https://i.ytimg.com/vi/p7FCgw_GlWc/hqdefault.jpg' },
  { id: '7wtfhZwyrcc', title: 'Believer', artist: 'Imagine Dragons', thumb: 'https://i.ytimg.com/vi/7wtfhZwyrcc/mqdefault.jpg', high: 'https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg' },
  { id: 'hLQl3WQQoQ0', title: 'Someone You Loved', artist: 'Lewis Capaldi', thumb: 'https://i.ytimg.com/vi/hLQl3WQQoQ0/mqdefault.jpg', high: 'https://i.ytimg.com/vi/hLQl3WQQoQ0/hqdefault.jpg' },
  { id: 'VDvpDEvjbz4', title: 'drivers license', artist: 'Olivia Rodrigo', thumb: 'https://i.ytimg.com/vi/VDvpDEvjbz4/mqdefault.jpg', high: 'https://i.ytimg.com/vi/VDvpDEvjbz4/hqdefault.jpg' },
  { id: 'RBumgq5yVrA', title: 'Someone Like You', artist: 'Adele', thumb: 'https://i.ytimg.com/vi/RBumgq5yVrA/mqdefault.jpg', high: 'https://i.ytimg.com/vi/RBumgq5yVrA/hqdefault.jpg' },
  { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker', thumb: 'https://i.ytimg.com/vi/60ItHLz5WEA/mqdefault.jpg', high: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg' },
  { id: 'lp-EO5I60KA', title: 'Thinking Out Loud', artist: 'Ed Sheeran', thumb: 'https://i.ytimg.com/vi/lp-EO5I60KA/mqdefault.jpg', high: 'https://i.ytimg.com/vi/lp-EO5I60KA/hqdefault.jpg' },,

  { id: 'RgKAFK5djSk', title: 'See You Again', artist: 'Wiz Khalifa ft. Charlie Puth', thumb: 'https://i.ytimg.com/vi/RgKAFK5djSk/mqdefault.jpg', high: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg' },
  { id: 'CevxZvSJLk8', title: 'Roar', artist: 'Katy Perry', thumb: 'https://i.ytimg.com/vi/CevxZvSJLk8/mqdefault.jpg', high: 'https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg' },
  { id: 'kOkQ4T5WO9E', title: "God's Plan", artist: 'Drake', thumb: 'https://i.ytimg.com/vi/kOkQ4T5WO9E/mqdefault.jpg', high: 'https://i.ytimg.com/vi/kOkQ4T5WO9E/hqdefault.jpg' },
  { id: '09R8_2nJtjg', title: 'Sugar', artist: 'Maroon 5', thumb: 'https://i.ytimg.com/vi/09R8_2nJtjg/mqdefault.jpg', high: 'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg' },
  { id: 'ru0K8uYEZWw', title: "Can't Stop the Feeling", artist: 'Justin Timberlake', thumb: 'https://i.ytimg.com/vi/ru0K8uYEZWw/mqdefault.jpg', high: 'https://i.ytimg.com/vi/ru0K8uYEZWw/hqdefault.jpg' },
  { id: 'pt8VYOfr8As', title: 'Lover Girl', artist: 'Laufey', thumb: 'https://i.ytimg.com/vi/pt8VYOfr8As/mqdefault.jpg', high: 'https://i.ytimg.com/vi/pt8VYOfr8As/hqdefault.jpg' },
  { id: 'i9fDnj2USYQ', title: 'From The Start', artist: 'Laufey', thumb: 'https://i.ytimg.com/vi/i9fDnj2USYQ/mqdefault.jpg', high: 'https://i.ytimg.com/vi/i9fDnj2USYQ/hqdefault.jpg' },
];

const FEATURED = [
  { title: 'Happy Latin Pop', sub: 'KAROL G, Sebastián Yatra…', q: 'latin pop', img: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg' },
  { title: "Today's Happy Pop", sub: 'Taylor Swift, Shakira…', q: 'happy pop', img: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg' },
  { title: "Éxitos De Los '80s", sub: 'Luis Miguel, José José…', q: '80s hits', img: 'https://i.ytimg.com/vi/btPJPFnesV4/hqdefault.jpg' },
  { title: 'Los Himnos', sub: 'Bad Bunny, Selena, KAROL G', q: 'reggaeton', img: 'https://i.ytimg.com/vi/p7FCgw_GlWc/hqdefault.jpg' },
];

const MOODS = [
  { n: 'Chill', q: 'chill', c: 'linear-gradient(135deg,#ffb3c6,#ff8fab)' },
  { n: 'Christmas', q: 'christmas', c: 'linear-gradient(135deg,#c8e6c9,#81c784)' },
  { n: 'Commute', q: 'drive', c: 'linear-gradient(135deg,#ffd6e0,#f8bbd0)' },
  { n: 'Energize', q: 'energy', c: 'linear-gradient(135deg,#e1bee7,#ce93d8)' },
  { n: 'Feel good', q: 'happy', c: 'linear-gradient(135deg,#ffccbc,#ffab91)' },
  { n: 'Focus', q: 'focus', c: 'linear-gradient(135deg,#b3e5fc,#81d4fa)' },
  { n: 'Gaming', q: 'game', c: 'linear-gradient(135deg,#c8e6c9,#a5d6a7)' },
  { n: 'Party', q: 'party', c: 'linear-gradient(135deg,#f8bbd0,#f48fb1)' },
  { n: 'Romance', q: 'love', c: 'linear-gradient(135deg,#f8bbd0,#e1bee7)' },
  { n: 'Sad', q: 'sad', c: 'linear-gradient(135deg,#b0bec5,#90a4ae)' },
  { n: 'Sleep', q: 'sleep', c: 'linear-gradient(135deg,#b3e5fc,#90caf9)' },
  { n: 'Workout', q: 'workout', c: 'linear-gradient(135deg,#ffab91,#ff8a65)' },
];

const GENRES = [
  { n: 'Pop', q: 'pop', c: 'linear-gradient(135deg,#ffb3c6,#ff8fab)' },
  { n: 'Pop Latino', q: 'latin', c: 'linear-gradient(135deg,#f8bbd0,#f48fb1)' },
  { n: 'R&B', q: 'rnb', c: 'linear-gradient(135deg,#e1bee7,#ce93d8)' },
  { n: 'Rock', q: 'rock', c: 'linear-gradient(135deg,#b0bec5,#78909c)' },
  { n: 'Urbano', q: 'reggaeton', c: 'linear-gradient(135deg,#ffccbc,#ffab91)' },
  { n: 'Dance', q: 'dance', c: 'linear-gradient(135deg,#b3e5fc,#81d4fa)' },
  { n: 'Tropical', q: 'tropical', c: 'linear-gradient(135deg,#c8e6c9,#a5d6a7)' },
  { n: 'Classical', q: 'classical', c: 'linear-gradient(135deg,#f5f5f5,#e0e0e0)' },
];

const S = {
  track: null, list: [], idx: 0, playing: false,
  player: null, ready: false,
  audioEl: null,          // HTMLAudioElement for real streams (background)
  usingStream: false,     // true when playing via audioEl instead of YT
  favs: [], playlists: [], recent: [],
  theme: 'dark', openPl: null,
  lyrics: [], lastLyricIdx: -1,
  prefs: { artists: {}, tags: {}, plays: 0 },
  audioEngine: 'backend', // 'piped' | 'backend' — backend usa /api/yt-audio
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function toast(m, ms = 2200) {
  const t = $('#toast');
  t.textContent = m;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), ms);
}

function save() {
  localStorage.setItem(STORE, JSON.stringify({
    favs: S.favs,
    playlists: S.playlists,
    recent: S.recent,
    theme: S.theme,
    prefs: S.prefs,
    audioEngine: S.audioEngine || 'piped',
  }));
}

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(STORE) || '{}');
    S.favs = d.favs || [];
    S.playlists = d.playlists || [];
    S.recent = d.recent || [];
    S.theme = d.theme || 'dark';
    S.prefs = d.prefs || { artists: {}, tags: {}, plays: 0 };
    S.audioEngine = d.audioEngine === 'backend' ? 'backend' : 'piped';
    if (S.theme === 'light') document.body.classList.add('light');
  } catch (_) {}
}

function greet() {
  const h = new Date().getHours();
  if (h < 12) return 'Good Morning';
  if (h < 19) return 'Good Afternoon';
  return 'Good Evening';
}

function fmt(s) {
  if (!s || isNaN(s)) return '0:00';
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

function clean(t) {
  return (t || '').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
}

function demoSearch(query) {
  const q = (query || '').toLowerCase().trim();
  if (!q) return DEMO.slice();
  const words = q.split(/\s+/).filter(Boolean);
  // Score each track
  const scored = DEMO.map(t => {
    const hay = (t.title + ' ' + t.artist).toLowerCase();
    let score = 0;
    for (const w of words) {
      if (hay.includes(w)) score += 3;
      else if (t.title.toLowerCase().includes(w) || t.artist.toLowerCase().includes(w)) score += 2;
      // partial
      else if (words.length === 1 && (hay.includes(w.slice(0, Math.min(4, w.length))))) score += 1;
    }
    // exact title boost
    if (t.title.toLowerCase() === q) score += 10;
    if (t.title.toLowerCase().startsWith(q)) score += 5;
    return { t, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  let hits = scored.map(x => x.t);

  if (hits.length < 2) {
    const map = {
      chill: ['Counting Stars', 'Perfect', 'Thinking Out Loud', 'Someone You Loved'],
      sleep: ['Perfect', 'Someone Like You', 'Hello'],
      sad: ['Someone Like You', 'Hello', 'drivers license', 'Someone You Loved'],
      party: ['Uptown Funk', 'Despacito', 'Blinding Lights'],
      energize: ['Believer', 'Blinding Lights'],
      workout: ['Believer', 'Blinding Lights'],
      romance: ['Perfect', 'Thinking Out Loud', 'Someone Like You'],
      latin: ['Despacito', 'TQG', 'Provenza'],
      pop: ['Blinding Lights', 'Shape of You', 'Anti-Hero', 'As It Was'],
      billie: ['bad guy'],
      adele: ['Hello', 'Someone Like You'],
      taylor: ['Anti-Hero'],
      ed: ['Shape of You', 'Perfect', 'Thinking Out Loud'],
      karol: ['TQG', 'Provenza'],
      queen: ['Bohemian Rhapsody'],
    };
    for (const [k, titles] of Object.entries(map)) {
      if (q.includes(k)) {
        hits = DEMO.filter(t => titles.some(ti => t.title.toLowerCase().includes(ti.toLowerCase())));
        break;
      }
    }
  }
  return hits.length ? hits : DEMO.slice(0, 10);
}

async function searchYT(query, max = 12) {
  const q = (query || '').trim();
  if (!q) return [];

  function mapPipedItems(items) {
    return (items || [])
      .filter(it => (it.type === 'stream' || it.url || it.id) && (it.url || it.id))
      .map(it => {
        let id = it.id;
        if (!id && it.url) {
          const m = String(it.url).match(/(?:v=|\/watch\?v=|youtu\.be\/)?([a-zA-Z0-9_-]{11})/);
          id = m ? m[1] : String(it.url).replace(/^\/watch\?v=/, '').split('&')[0];
        }
        if (!id || id.length < 10) return null;
        const thumb = it.thumbnail
          || (it.thumbnails && (it.thumbnails[0]?.url || it.thumbnails[0]))
          || `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
        // Prefer direct ytimg if proxy URL is awkward
        const high = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        const thumbSafe = (typeof thumb === 'string' && thumb.includes('ytimg')) ? thumb : high.replace('hqdefault', 'mqdefault');
        return {
          id,
          title: clean(it.title || 'Sin título'),
          artist: clean(it.uploaderName || it.uploader || it.author || 'YouTube'),
          thumb: thumbSafe,
          high,
        };
      })
      .filter(Boolean)
      .slice(0, max);
  }

  function withTimeout(ms) {
    const c = new AbortController();
    setTimeout(() => c.abort(), ms);
    return c.signal;
  }

  // Piped instances that work + have CORS *
  const pipedHosts = [
    'https://api.piped.private.coffee',
    'https://pipedapi.kavin.rocks',
    'https://pipedapi.adminforge.de',
    'https://pipedapi.ducks.party',
    'https://pipedapi.reallyaweso.me',
  ];

  for (const host of pipedHosts) {
    try {
      const r = await fetch(
        host + '/search?q=' + encodeURIComponent(q) + '&filter=videos',
        { signal: withTimeout(8000) }
      );
      if (!r.ok) continue;
      const data = await r.json();
      const items = data.items || data || [];
      const mapped = mapPipedItems(items);
      if (mapped.length) return mapped;
    } catch (e) {
      console.warn('Piped fail', host, e.message || e);
    }
  }

  // Invidious fallbacks
  const invHosts = [
    'https://inv.nadeko.net',
    'https://yewtu.be',
    'https://invidious.fdn.fr',
    'https://invidious.jing.rocks',
  ];
  for (const host of invHosts) {
    try {
      const r = await fetch(
        host + '/api/v1/search?q=' + encodeURIComponent(q) + '&type=video',
        { signal: withTimeout(8000) }
      );
      if (!r.ok) continue;
      const data = await r.json();
      if (!Array.isArray(data) || !data.length) continue;
      const mapped = data.slice(0, max).map(it => {
        const id = it.videoId || it.videoID || it.id;
        if (!id) return null;
        return {
          id,
          title: clean(it.title || 'Sin título'),
          artist: clean(it.author || 'YouTube'),
          thumb: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
          high: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        };
      }).filter(Boolean);
      if (mapped.length) return mapped;
    } catch (e) {
      console.warn('Invidious fail', host, e.message || e);
    }
  }

  // Official API last (often blocked with test keys)
  if (API_KEY && API_KEY.length > 20) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${max}&q=${encodeURIComponent(q)}&key=${API_KEY}`;
      const r = await fetch(url, { signal: withTimeout(8000) });
      const j = await r.json();
      if (r.ok && j.items?.length) {
        return j.items.filter(it => it.id?.videoId).map(it => ({
          id: it.id.videoId,
          title: clean(it.snippet.title),
          artist: clean(it.snippet.channelTitle),
          thumb: (it.snippet.thumbnails.medium || it.snippet.thumbnails.default).url,
          high: (it.snippet.thumbnails.high || it.snippet.thumbnails.medium).url,
        }));
      }
    } catch (e) {
      console.warn('YT Data API fail', e);
    }
  }

  toast('No se pudo buscar. Intenta de nuevo');
  return [];
}

/* ===== LYRICS lrclib ===== */
S.lyricOffset = 0; // seconds; auto-tuned

async function fetchLyrics(artist, title) {
  const body = $('#lyrics-body');
  body.innerHTML = '<p class="lyrics-hint">Buscando letras…</p>';
  S.lyrics = [];
  S.lastLyricIdx = -1;
  S.lyricOffset = 0;
  try {
    const artistClean = (artist || '')
      .replace(/\s*[-–|].*$/, '')
      .replace(/\s*ft\.?\s*.*/i, '')
      .replace(/\s*feat\.?\s*.*/i, '')
      .replace(/,.*$/, '')
      .replace(/\(.*?\)/g, '')
      .trim();
    const titleClean = (title || '')
      .replace(/\(.*?\)/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/\s*official.*$/i, '')
      .replace(/\s*video.*$/i, '')
      .replace(/\s*lyrics.*$/i, '')
      .replace(/\s*audio.*$/i, '')
      .trim();

    let data = null;

    // Prefer search then pick best match by name
    const sr = await fetch(
      'https://lrclib.net/api/search?q=' + encodeURIComponent(titleClean + ' ' + artistClean)
    );
    const arr = await sr.json();
    if (Array.isArray(arr) && arr.length) {
      // score by title/artist similarity + prefer ones with synced lyrics
      const score = (x) => {
        let s = 0;
        const t = (x.trackName || '').toLowerCase();
        const a = (x.artistName || '').toLowerCase();
        if (t === titleClean.toLowerCase()) s += 5;
        if (t.includes(titleClean.toLowerCase()) || titleClean.toLowerCase().includes(t)) s += 3;
        if (a.includes(artistClean.toLowerCase().split(' ')[0] || '')) s += 2;
        if (x.syncedLyrics) s += 4;
        // duration match if we know it
        try {
          const dur = S.player?.getDuration?.() || 0;
          if (dur > 0 && x.duration) {
            const diff = Math.abs(x.duration - dur);
            if (diff < 3) s += 3;
            else if (diff < 8) s += 1;
            else s -= 1;
          }
        } catch (_) {}
        return s;
      };
      arr.sort((a, b) => score(b) - score(a));
      const best = arr[0];
      if (best?.id) {
        const r = await fetch('https://lrclib.net/api/get/' + best.id);
        if (r.ok) data = await r.json();
      } else if (best) {
        data = best;
      }
    }

    if (!data) {
      const q = new URLSearchParams({ artist_name: artistClean, track_name: titleClean });
      const r = await fetch('https://lrclib.net/api/get?' + q.toString());
      if (r.ok) data = await r.json();
    }

    if (!data) throw new Error('no');

    if (data.syncedLyrics) {
      S.lyrics = parseLRC(data.syncedLyrics);
      // If first lyric starts late (intro), keep times as-is.
      // If first lyric is at 0 but video has long intro, user can feel "ahead" —
      // we nudge only when first line is very early and video duration >> lyric span.
      if (S.lyrics.length >= 2) {
        const first = S.lyrics[0].t;
        const last = S.lyrics[S.lyrics.length - 1].t;
        // no automatic big offset; small lag compensation only
        S.lyricOffset = 0.25; // slight delay so lines don't feel early
      }
      renderLyrics();
      $('#lyrics-src').textContent = 'lrclib · synced';
    } else if (data.plainLyrics) {
      body.innerHTML = data.plainLyrics.split('\n').map(l =>
        `<p class="lyric-line">${l || '&nbsp;'}</p>`
      ).join('');
      $('#lyrics-src').textContent = 'lrclib';
    } else {
      body.innerHTML = '<p class="lyrics-hint">No hay letras para esta canción</p>';
    }
  } catch (_) {
    body.innerHTML = '<p class="lyrics-hint">Letras no disponibles</p>';
    $('#lyrics-src').textContent = 'lrclib';
  }
}

function parseLRC(lrc) {
  const lines = [];
  const re = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
  String(lrc).split('\n').forEach(raw => {
    const text = raw.replace(re, '').trim();
    let m;
    const times = [];
    re.lastIndex = 0;
    while ((m = re.exec(raw)) !== null) {
      const min = parseInt(m[1], 10);
      const sec = parseInt(m[2], 10);
      let ms = m[3] || '0';
      // normalize ms: "5" -> 0.5, "05" -> 0.05, "500" -> 0.500
      if (ms.length === 1) ms = parseFloat('0.' + ms);
      else if (ms.length === 2) ms = parseFloat('0.' + ms);
      else ms = parseInt(ms, 10) / 1000;
      times.push(min * 60 + sec + ms);
    }
    times.forEach(t => {
      if (text) lines.push({ t, text });
    });
  });
  lines.sort((a, b) => a.t - b.t);
  return lines;
}

function renderLyrics() {
  const body = $('#lyrics-body');
  if (!S.lyrics.length) return;
  body.innerHTML = S.lyrics.map((l, i) =>
    `<p data-i="${i}" class="lyric-line">${escapeHtml(l.text) || '…'}</p>`
  ).join('');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function syncLyrics(cur) {
  if (!S.lyrics.length) return;
  const t = cur - (S.lyricOffset || 0);
  // Find last line whose time <= t
  let active = -1;
  for (let i = 0; i < S.lyrics.length; i++) {
    if (S.lyrics[i].t <= t) active = i;
    else break;
  }
  if (active < 0) active = 0;
  if (active === S.lastLyricIdx) return;
  S.lastLyricIdx = active;

  const nodes = $$('.lyric-line');
  nodes.forEach((el, i) => {
    el.classList.toggle('active-line', i === active);
  });
  const el = nodes[active];
  if (el) {
    const body = $('#lyrics-body');
    const top = el.offsetTop - body.clientHeight * 0.35;
    body.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
}


/* ===== BACKGROUND AUDIO / MEDIA SESSION ===== */
function setupMediaSession(track) {
  if (!('mediaSession' in navigator) || !track) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'SimpMusic',
      artist: track.artist || '',
      album: 'SimpMusic',
      artwork: [
        { src: track.thumb || track.high || '', sizes: '96x96', type: 'image/jpeg' },
        { src: track.high || track.thumb || '', sizes: '512x512', type: 'image/jpeg' },
      ].filter(a => a.src),
    });
    navigator.mediaSession.playbackState = S.playing ? 'playing' : 'paused';

    navigator.mediaSession.setActionHandler('play', () => {
      S.wantPlay = true;
      if (S.usingStream && S.audioEl) {
        S.audioEl.play().catch(() => {});
      } else if (S.player && S.ready) {
        try { S.player.playVideo(); S.player.unMute(); } catch (_) {}
      }
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      if (S.usingStream && S.audioEl) {
        S.audioEl.pause();
      } else if (S.player && S.ready) {
        try { S.player.pauseVideo(); } catch (_) {}
      }
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => prev());
    navigator.mediaSession.setActionHandler('nexttrack', () => next());
    navigator.mediaSession.setActionHandler('seekto', (d) => {
      if (d.seekTime == null) return;
      if (S.usingStream && S.audioEl) {
        try { S.audioEl.currentTime = d.seekTime; } catch (_) {}
      } else if (S.player) {
        try { S.player.seekTo(d.seekTime, true); } catch (_) {}
      }
    });
  } catch (e) {
    console.warn('MediaSession', e);
  }
}

function updateMediaPosition() {
  if (!('mediaSession' in navigator) || !S.player || !S.ready) return;
  try {
    const dur = S.player.getDuration() || 0;
    const cur = S.player.getCurrentTime() || 0;
    if (dur > 0 && navigator.mediaSession.setPositionState) {
      navigator.mediaSession.setPositionState({
        duration: dur,
        playbackRate: 1,
        position: Math.min(cur, dur),
      });
    }
    navigator.mediaSession.playbackState = S.playing ? 'playing' : 'paused';
  } catch (_) {}
}

/* ===== AGGRESSIVE BACKGROUND KEEP-ALIVE ===== */
let wakeLock = null;
let bgKeepAliveTimer = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator && S.wantPlay) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (_) {}
}

function releaseWakeLock() {
  try {
    if (wakeLock) {
      wakeLock.release();
      wakeLock = null;
    }
  } catch (_) {}
}

function forcePlay() {
  if (!S.wantPlay) return;
  // Stream path (HTML audio) — this is what enables real background
  if (S.usingStream && S.audioEl) {
    try {
      if (S.audioEl.paused) S.audioEl.play().catch(() => {});
    } catch (_) {}
    return;
  }
  // YouTube fallback
  if (!S.player || !S.ready) return;
  try {
    S.player.unMute();
    S.player.setVolume(100);
    S.player.playVideo();
  } catch (_) {}
}

function startBgKeepAlive() {
  stopBgKeepAlive();
  bgKeepAliveTimer = setInterval(() => {
    if (!S.wantPlay) {
      stopBgKeepAlive();
      return;
    }
    if (S.usingStream && S.audioEl) {
      try {
        if (S.audioEl.paused) S.audioEl.play().catch(() => {});
      } catch (_) {}
      return;
    }
    if (S.player && S.ready) {
      try {
        const st = S.player.getPlayerState();
        if (st !== 1 && st !== 3) forcePlay();
      } catch (_) {
        forcePlay();
      }
    }
  }, 2500);
}

function stopBgKeepAlive() {
  if (bgKeepAliveTimer) {
    clearInterval(bgKeepAliveTimer);
    bgKeepAliveTimer = null;
  }
}

// Visibility change – most important
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    if (S.wantPlay) {
      forcePlay();
      startBgKeepAlive();
      // Try Median background audio service if available
      try {
        if (window.median?.backgroundAudio?.start) {
          window.median.backgroundAudio.start();
        }
      } catch (_) {}
    }
  } else {
    // Back to foreground
    stopBgKeepAlive();
    if (S.wantPlay) {
      forcePlay();
      requestWakeLock();
    }
  }
});

// Extra events
window.addEventListener('pagehide', () => {
  if (S.wantPlay) forcePlay();
});

window.addEventListener('blur', () => {
  if (S.wantPlay) {
    forcePlay();
    startBgKeepAlive();
  }
});

window.addEventListener('focus', () => {
  if (S.wantPlay) forcePlay();
});

// Re-acquire wake lock if page becomes visible again
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && S.wantPlay) {
    requestWakeLock();
  }
});


/* ===== MEDIAN.CO NATIVE MEDIA PLAYER BRIDGE ===== */
// Required for Native Media Player plugin (Background mode)
// Median calls these automatically when the app goes to background / returns

function isMedianApp() {
  return !!(window.median || (navigator.userAgent && /median/i.test(navigator.userAgent)));
}

// Called by Median when the app is backgrounded / paused
function getPlayerStatus() {
  try {
    if (!S.track) return null;

    let currentTime = 0;
    let url = '';

    if (S.usingStream && S.audioEl) {
      currentTime = (S.audioEl.currentTime || 0) * 1000;
      url = S.audioEl.src || '';
    } else if (S.player && S.ready) {
      try { currentTime = (S.player.getCurrentTime?.() || 0) * 1000; } catch (_) {}
    }

    return {
      currentTime: currentTime,
      isPaused: !S.playing,
      title: S.track.title || 'SimpMusic',
      artist: S.track.artist || '',
      album: 'SimpMusic',
      artwork: S.track.high || S.track.thumb || '',
      url: url
    };
  } catch (e) {
    console.warn('getPlayerStatus error', e);
    return null;
  }
}

// Called by Median when the app returns to foreground
function updatePlayerStatus(mediaPlayerStatus) {
  if (!mediaPlayerStatus || !S.player || !S.ready) return;

  try {
    if (mediaPlayerStatus.currentTime != null) {
      const seconds = mediaPlayerStatus.currentTime / 1000;
      try { S.player.seekTo(seconds, true); } catch (_) {}
    }

    if (mediaPlayerStatus.isPaused === true) {
      if (S.playing) {
        try { S.player.pauseVideo(); } catch (_) {}
        S.playing = false;
        S.wantPlay = false;
        uiPlay(false);
      }
    } else if (mediaPlayerStatus.isPaused === false) {
      S.wantPlay = true;
      try {
        S.player.playVideo();
        S.player.unMute();
      } catch (_) {}
    }
  } catch (e) {
    console.warn('updatePlayerStatus error', e);
  }
}

// Expose for Median (some versions look on window)
window.getPlayerStatus = getPlayerStatus;
window.updatePlayerStatus = updatePlayerStatus;


/* ===== YOUTUBE (audio) ===== */
S.pendingPlay = null;
S.wantPlay = false;

function createYTPlayer() {
  if (S.player || !window.YT || !YT.Player) return;
  if (!document.getElementById('yt')) return;

  // Detect in-app WebView (AppsGeyser, etc.)
  const ua = navigator.userAgent || '';
  const isWebView = /; wv\)|WebView|AppsGeyser|Version\/.*Chrome\/[0-9]+\.0\.0\.0 Mobile/i.test(ua)
    || (/Android/.test(ua) && /Version\/\d+\.?\d*\s+Chrome/.test(ua) && !/Chrome\/[1-9][0-9]{1,}/.test(ua));

  S.player = new YT.Player('yt', {
    height: '112',
    width: '200',
    host: 'https://www.youtube.com',
    playerVars: {
      autoplay: 0,
      controls: 1,
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
      fs: 0,
      enablejsapi: 1,
      origin: location.origin && location.origin !== 'null' ? location.origin : 'https://www.youtube.com',
      widget_referrer: location.href || 'https://www.youtube.com',
    },
    events: {
      onReady(e) {
        S.ready = true;
        try {
          e.target.unMute();
          e.target.setVolume(100);
        } catch (_) {}
        // Allow autoplay policies on the iframe
        try {
          const iframe = document.querySelector('#yt iframe') || document.querySelector('.yt-host iframe');
          if (iframe) {
            iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
            iframe.setAttribute('allowfullscreen', '1');
          }
        } catch (_) {}
        startProgressLoop();
        if (S.pendingPlay) {
          const p = S.pendingPlay;
          S.pendingPlay = null;
          play(p.track, p.list, p.index);
        }
      },
      onStateChange(e) {
        const st = e.data;
        // -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
        if (st === 1) {
          S.playing = true;
          S.wantPlay = true;
          uiPlay(true);
          try {
            S.player.unMute();
            S.player.setVolume(100);
          } catch (_) {}
          if (S.track) setupMediaSession(S.track);
          updateMediaPosition();
        } else if (st === 2) {
          S.playing = false;
          uiPlay(false);
          updateMediaPosition();
        } else if (st === 0) {
          S.playing = false;
          uiPlay(false);
          next();
        } else if (st === 5 && S.wantPlay) {
          // cued → try play (may need another user tap on mobile)
          try { S.player.playVideo(); } catch (_) {}
        }
      },
      onError(e) {
        console.warn('YT error code', e.data);
        S.playing = false;
        uiPlay(false);
        toast('Video no disponible, siguiente…');
        setTimeout(() => next(), 500);
      }
    }
  });
}

function onYouTubeIframeAPIReady() {
  createYTPlayer();
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function setCover(track) {
  const url = track.high || track.thumb;
  const cover = $('#full-cover');
  if (cover) {
    cover.style.opacity = '0';
    cover.onload = () => { cover.style.opacity = '1'; };
    cover.onerror = () => { cover.style.opacity = '1'; };
    cover.src = url;
  }
  const mi = $('#mini-img');
  if (mi) mi.src = track.thumb || url;
  const bg = $('#full-bg');
  if (bg) bg.style.backgroundImage = `url(${url})`;
}

function ensureAudioEl() {
  if (S.audioEl) return S.audioEl;
  const a = new Audio();
  a.preload = 'auto';
  a.crossOrigin = 'anonymous';
  a.addEventListener('playing', () => {
    S.playing = true;
    S.usingStream = true;
    uiPlay(true);
    setupMediaSession(S.track);
    requestWakeLock();
    startBgKeepAlive();
  });
  a.addEventListener('pause', () => {
    if (S.usingStream) {
      S.playing = false;
      uiPlay(false);
    }
  });
  a.addEventListener('ended', () => {
    if (S.usingStream) next();
  });
  a.addEventListener('timeupdate', () => {
    if (!S.usingStream || !S.audioEl) return;
    const dur = S.audioEl.duration || 0;
    const cur = S.audioEl.currentTime || 0;
    if (dur > 0) {
      const p = Math.min(100, (cur / dur) * 100);
      const mf = $('#mini-fill');
      const ff = $('#ffill');
      if (mf) mf.style.width = p + '%';
      if (ff) ff.style.width = p + '%';
      const tc = $('#tcur');
      const td = $('#tdur');
      if (tc) tc.textContent = fmt(cur);
      if (td) td.textContent = fmt(dur);
      if (S.playing) syncLyricsBoth(cur);
      updateMediaPositionFromAudio();
    }
  });
  a.addEventListener('error', () => {
    if (S.usingStream && S.track) {
      console.warn('audio stream error, fallback YT');
      S.usingStream = false;
      playViaYouTube(S.track);
    }
  });
  S.audioEl = a;
  return a;
}

function updateMediaPositionFromAudio() {
  if (!('mediaSession' in navigator) || !S.audioEl) return;
  try {
    const dur = S.audioEl.duration || 0;
    const cur = S.audioEl.currentTime || 0;
    if (dur > 0 && navigator.mediaSession.setPositionState) {
      navigator.mediaSession.setPositionState({
        duration: dur,
        playbackRate: 1,
        position: Math.min(cur, dur),
      });
    }
    navigator.mediaSession.playbackState = S.playing ? 'playing' : 'paused';
  } catch (_) {}
}

function stopStreamAudio() {
  if (S.audioEl) {
    try { S.audioEl.pause(); S.audioEl.removeAttribute('src'); S.audioEl.load(); } catch (_) {}
  }
  S.usingStream = false;
}

async function playViaStream(track) {
  toast('Cargando stream…', 4000);
  const info = await fetchAudioUrl(track.id);
  if (!info || !info.url) {
    toast('Sin stream → YouTube (sin background)', 2500);
    return false;
  }

  // Pause YT if active
  try { if (S.player) S.player.pauseVideo(); } catch (_) {}

  const a = ensureAudioEl();
  try {
    a.pause();
  } catch (_) {}
  a.src = info.url;
  S.usingStream = true;
  try {
    await a.play();
    S.playing = true;
    S.wantPlay = true;
    uiPlay(true);
    setupMediaSession(track);
    toast('Stream activo ✓ (background OK)', 2500);
    try {
      if (window.median && window.median.backgroundMedia && window.median.backgroundMedia.playTrack) {
        window.median.backgroundMedia.playTrack({
          url: info.url,
          title: track.title || 'SimpMusic',
          artist: track.artist || '',
          album: 'SimpMusic',
          artwork: track.high || track.thumb || '',
        });
      }
    } catch (_) {}
    return true;
  } catch (e) {
    console.warn('stream play failed', e);
    S.usingStream = false;
    toast('Stream falló → YouTube', 2500);
    return false;
  }
}

function playViaYouTube(track) {
  S.usingStream = false;
  stopStreamAudio();
  if (!S.player || !S.ready) {
    if (!S.player) createYTPlayer();
    S.pendingPlay = { track, list: S.list, index: S.idx };
    return;
  }
  try {
    S.player.loadVideoById(track.id);
    try {
      S.player.unMute();
      S.player.setVolume(100);
    } catch (_) {}
    const tryPlay = () => {
      try {
        S.player.unMute();
        S.player.setVolume(100);
        S.player.playVideo();
      } catch (_) {}
    };
    tryPlay();
    setTimeout(tryPlay, 300);
    setTimeout(tryPlay, 800);
  } catch (e) {
    console.error(e);
    toast('Error al reproducir');
  }
}

function play(track, list, index) {
  if (!track || !track.id) return;

  S.track = track;
  S.wantPlay = true;
  if (list) {
    S.list = list;
    S.idx = index ?? 0;
  }

  requestWakeLock();
  startBgKeepAlive();
  try {
    if (window.median?.backgroundAudio?.start) {
      window.median.backgroundAudio.start();
    }
  } catch (_) {}

  setCover(track);
  setupMediaSession(track);
  $('#mini-title').textContent = track.title;
  $('#mini-artist').textContent = track.artist;
  $('#full-title').textContent = track.title;
  $('#full-artist').textContent = track.artist;
  $('#mini').classList.remove('hidden');
  S.playing = false;
  uiPlay(false);
  updateLike();
  fetchLyrics(track.artist, track.title);

  learnFromTrack(track);
  S.recent = [track, ...S.recent.filter(x => x.id !== track.id)].slice(0, 40);
  save();
  renderRecent();

  // Prefer real audio stream (enables true background) when engine is piped/backend
  // Fall back to YouTube iframe if stream fails
  (async () => {
    const ok = await playViaStream(track);
    if (!ok) {
      // Ensure YT is ready
      if (!window.YT || !YT.Player) {
        S.pendingPlay = { track, list, index };
        toast('Cargando YouTube…');
        return;
      }
      if (!S.player) {
        S.pendingPlay = { track, list, index };
        createYTPlayer();
        return;
      }
      if (!S.ready) {
        S.pendingPlay = { track, list, index };
        return;
      }
      playViaYouTube(track);
    }
  })();
}

function toggle() {
  if (!S.track) {
    toast('Elige una canción');
    return;
  }

  // Stream (HTML audio) path
  if (S.usingStream && S.audioEl) {
    if (!S.audioEl.paused) {
      S.audioEl.pause();
      S.playing = false;
      S.wantPlay = false;
      uiPlay(false);
      stopBgKeepAlive();
      releaseWakeLock();
    } else {
      S.wantPlay = true;
      S.audioEl.play().catch(() => {});
      requestWakeLock();
      startBgKeepAlive();
    }
    return;
  }

  // YouTube path
  if (!S.player || !S.ready) {
    play(S.track, S.list, S.idx);
    return;
  }
  try {
    const st = S.player.getPlayerState();
    if (st === 1 || st === 3) {
      S.player.pauseVideo();
      S.playing = false;
      S.wantPlay = false;
      uiPlay(false);
      stopBgKeepAlive();
      releaseWakeLock();
    } else {
      S.wantPlay = true;
      S.player.unMute();
      S.player.setVolume(100);
      S.player.playVideo();
      requestWakeLock();
      startBgKeepAlive();
      setTimeout(() => {
        try {
          if (S.player.getPlayerState() !== 1) {
            S.player.loadVideoById(S.track.id);
            S.player.playVideo();
            S.player.unMute();
          }
        } catch (_) {}
      }, 500);
    }
  } catch (e) {
    console.warn(e);
    play(S.track, S.list, S.idx);
  }
}

let progressTimer = null;
function startProgressLoop() {
  if (progressTimer) return;
  progressTimer = setInterval(() => {
    if (!S.player || !S.ready) return;
    try {
      const dur = S.player.getDuration() || 0;
      const cur = S.player.getCurrentTime() || 0;
      if (dur > 0) {
        const p = Math.min(100, (cur / dur) * 100);
        const mf = $('#mini-fill');
        const ff = $('#ffill');
        if (mf) mf.style.width = p + '%';
        if (ff) ff.style.width = p + '%';
        const tc = $('#tcur');
        const td = $('#tdur');
        if (tc) tc.textContent = fmt(cur);
        if (td) td.textContent = fmt(dur);
        if (S.playing) syncLyricsBoth(cur);
        updateMediaPosition();
      }
      // sync UI icon with real state
      const st = S.player.getPlayerState();
      if (st === 1 && !S.playing) {
        S.playing = true;
        uiPlay(true);
      } else if ((st === 2 || st === 0 || st === 5) && S.playing) {
        S.playing = false;
        uiPlay(false);
      }
    } catch (_) {}
  }, 300);
}

function next() {
  if (!S.list.length) return;
  S.idx = (S.idx + 1) % S.list.length;
  play(S.list[S.idx], S.list, S.idx);
}

function prev() {
  if (!S.list.length) return;
  S.idx = (S.idx - 1 + S.list.length) % S.list.length;
  play(S.list[S.idx], S.list, S.idx);
}

function uiPlay(on) {
  const set = (root, playing) => {
    const p = root.querySelector('.ic-play');
    const pa = root.querySelector('.ic-pause');
    if (p && pa) {
      p.classList.toggle('hidden', playing);
      pa.classList.toggle('hidden', !playing);
    }
  };
  set($('#mini-play'), on);
  set($('#btn-play'), on);
}

function updateLike() {
  const liked = S.track && S.favs.some(f => f.id === S.track.id);
  $('#btn-like').classList.toggle('liked', !!liked);
  $('#mini-like').classList.toggle('liked', !!liked);
}


/* ===== FAV / PLAYLISTS ===== */
function toggleLike() {
  if (!S.track) return;
  const i = S.favs.findIndex(f => f.id === S.track.id);
  if (i >= 0) { S.favs.splice(i, 1); toast('Quitado de favoritos'); }
  else { S.favs.unshift(S.track); toast('Añadido a favoritos'); }
  save(); updateLike();
}

function addToPl() {
  if (!S.track) { toast('No hay canción'); return; }
  if (!S.playlists.length) {
    // create flow
    $('#modal').classList.remove('hidden');
    $('#modal').classList.add('show');
    $('#pl-input').value = '';
    $('#pl-input').dataset.afterCreate = '1';
    setTimeout(() => $('#pl-input')?.focus(), 80);
    toast('Crea tu primera playlist');
    return;
  }
  if (S.playlists.length === 1 && !S.openPl) {
    addTrackToPlaylist(S.playlists[0].id);
    return;
  }
  if (S.openPl) {
    addTrackToPlaylist(S.openPl);
    return;
  }
  openPlaylistPicker();
}

function addTrackToPlaylist(plId) {
  const pl = S.playlists.find(p => p.id === plId);
  if (!pl || !S.track) return;
  if (pl.tracks.some(t => t.id === S.track.id)) {
    toast('Ya está en "' + pl.name + '"');
    closePlaylistPicker();
    return;
  }
  pl.tracks.push({ ...S.track });
  save();
  toast('Añadida a "' + pl.name + '"');
  closePlaylistPicker();
  if (S.openPl === plId) openPl(plId);
  renderPlList();
}

function openPlaylistPicker() {
  const el = $('#pl-picker');
  if (!el) return;
  $('#picker-track').textContent = S.track ? (S.track.title + ' — ' + S.track.artist) : '';
  const list = $('#picker-list');
  list.innerHTML = '';
  S.playlists.forEach(pl => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'picker-item';
    b.innerHTML = `<div class="pi-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>
      <div><div class="pi-name">${pl.name}</div><div class="pi-count">${pl.tracks.length} canciones</div></div>`;
    b.addEventListener('click', () => addTrackToPlaylist(pl.id));
    list.appendChild(b);
  });
  el.classList.remove('hidden');
  el.classList.add('show');
}

function closePlaylistPicker() {
  const el = $('#pl-picker');
  if (!el) return;
  el.classList.remove('show');
  setTimeout(() => el.classList.add('hidden'), 250);
}

function createPl(name) {
  name = (name || '').trim();
  if (!name) return;
  const id = 'pl' + Date.now();
  S.playlists.unshift({ id, name, tracks: [] });
  save(); renderPlList();
  toast('Playlist creada');
  const inp = $('#pl-input');
  if (inp?.dataset.afterCreate === '1' && S.track) {
    inp.dataset.afterCreate = '';
    addTrackToPlaylist(id);
  }
}

function openPl(id) {
  const pl = S.playlists.find(p => p.id === id);
  if (!pl) return;
  S.openPl = id;
  $('#pl-detail').classList.remove('hidden');
  $$('#library > :not(#pl-detail)').forEach(el => el.classList.add('hidden'));
  $('#pl-name').textContent = pl.name;
  $('#pl-count').textContent = pl.tracks.length + ' canciones';
  renderPlTracks(pl);
}

function closePl() {
  S.openPl = null;
  $('#pl-detail').classList.add('hidden');
  $$('#library > :not(#pl-detail)').forEach(el => el.classList.remove('hidden'));
}

function renderPlTracks(pl) {
  const box = $('#pl-tracks');
  box.innerHTML = '';
  if (!pl.tracks.length) {
    box.innerHTML = '<p class="empty">Vacía — usa + Playlist en el player</p>';
    return;
  }
  pl.tracks.forEach((t, i) => {
    const d = document.createElement('div');
    d.className = 'ptrack';
    d.innerHTML = `
      <img src="${t.thumb}" alt="" />
      <div class="meta"><div class="t">${t.title}</div><div class="a">${t.artist}</div></div>
      <div class="acts">
        <button type="button" class="mbtn" data-m="up" aria-label="Up">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
        <button type="button" class="mbtn" data-m="down" aria-label="Down">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <button type="button" class="mbtn" data-m="del" aria-label="Remove">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>`;
    d.querySelector('img').addEventListener('click', () => play(t, pl.tracks, i));
    d.querySelector('.meta').addEventListener('click', () => play(t, pl.tracks, i));
    d.querySelectorAll('.mbtn').forEach(b => {
      b.addEventListener('click', e => {
        e.stopPropagation();
        const m = b.dataset.m;
        if (m === 'del') {
          pl.tracks.splice(i, 1); save();
          $('#pl-count').textContent = pl.tracks.length + ' canciones';
          renderPlTracks(pl);
        } else {
          const to = m === 'up' ? i - 1 : i + 1;
          if (to < 0 || to >= pl.tracks.length) return;
          const [x] = pl.tracks.splice(i, 1);
          pl.tracks.splice(to, 0, x); save();
          renderPlTracks(pl);
        }
      });
    });
    box.appendChild(d);
  });
}

/* ===== RENDER ===== */
function card(f) {
  const d = document.createElement('div');
  d.className = 'pcard';
  d.innerHTML = `
    <div class="pcard-art">
      <img src="${f.img}" alt="" loading="lazy" onerror="this.style.opacity=.3" />
      <div class="ov">${f.title}</div>
    </div>
    <div class="pcard-t">${f.title}</div>
    <div class="pcard-s">${f.sub}</div>`;
  d.addEventListener('click', async () => {
    toast('Cargando…');
    const list = await searchYT(f.q, 12);
    if (list.length) play(list[0], list, 0);
  });
  return d;
}

function gcard(item) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'gcard';
  b.style.background = item.c;
  b.innerHTML = `<span>${item.n}</span><span class="pi"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>`;
  b.addEventListener('click', async () => {
    toast(item.n + '…');
    const list = await searchYT(item.q, 12);
    if (list.length) play(list[0], list, 0);
  });
  return b;
}

function songItem(t, list, i) {
  const d = document.createElement('div');
  d.className = 'sitem';
  d.innerHTML = `<img src="${t.thumb}" alt="" /><div class="meta"><div class="t">${t.title}</div><div class="a">${t.artist}</div></div>`;
  d.addEventListener('click', () => play(t, list, i));
  return d;
}

function renderHome() {
  const happy = $('#row-happy'), clas = $('#row-classics');
  happy.innerHTML = ''; clas.innerHTML = '';
  FEATURED.slice(0, 2).forEach(f => happy.appendChild(card(f)));
  FEATURED.slice(2).forEach(f => clas.appendChild(card(f)));
  const mg = $('#mood-grid'); mg.innerHTML = '';
  MOODS.forEach(m => mg.appendChild(gcard(m)));
}

function renderSearchBrowse() {
  $('#moods-browse').innerHTML = '';
  $('#genres-browse').innerHTML = '';
  MOODS.forEach(m => $('#moods-browse').appendChild(gcard(m)));
  GENRES.forEach(g => $('#genres-browse').appendChild(gcard(g)));
}

function renderRecent() {
  const box = $('#recent');
  if (!S.recent.length) {
    box.innerHTML = '<p class="empty">Aún no hay canciones</p>';
    return;
  }
  box.innerHTML = '';
  S.recent.forEach((t, i) => box.appendChild(songItem(t, S.recent, i)));
}

function renderPlList() {
  const box = $('#pl-list');
  if (!S.playlists.length) {
    box.innerHTML = '<p class="empty">Crea tu primera playlist</p>';
    return;
  }
  box.innerHTML = '';
  S.playlists.forEach(pl => {
    const d = document.createElement('div');
    d.className = 'plitem';
    d.innerHTML = `<div class="plart"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>
      <div class="plinfo"><div class="n">${pl.name}</div><div class="c">${pl.tracks.length} canciones</div></div>`;
    d.addEventListener('click', () => openPl(pl.id));
    box.appendChild(d);
  });
}

function showResults(list) {
  const box = $('#results');
  box.classList.remove('hidden');
  $('#browse').classList.add('hidden');
  box.innerHTML = '';
  if (!list.length) {
    box.innerHTML = '<p class="empty">Sin resultados</p>';
    return;
  }
  list.forEach((t, i) => box.appendChild(songItem(t, list, i)));
}

function hideResults() {
  $('#results').classList.add('hidden');
  $('#browse').classList.remove('hidden');
}

function go(page) {
  $$('.page').forEach(p => p.classList.remove('active'));
  $('#' + page).classList.add('active');
  $$('.navi').forEach(n => n.classList.toggle('on', n.dataset.page === page));
  if (page !== 'library' && S.openPl) closePl();
}

function bind() {
  $$('.navi').forEach(n => n.addEventListener('click', () => go(n.dataset.page)));

  $$('#mood-pills .pill').forEach(p => {
    p.addEventListener('click', async () => {
      $$('#mood-pills .pill').forEach(x => x.classList.remove('on'));
      p.classList.add('on');
      if (!p.dataset.q) return;
      toast('Cargando…');
      const list = await searchYT(p.dataset.q, 12);
      if (list.length) play(list[0], list, 0);
    });
  });

  let st;
  const inp = $('#q');
  async function doSearch(v) {
    if (!v) { hideResults(); return; }
    const box = $('#results');
    box.classList.remove('hidden');
    $('#browse').classList.add('hidden');
    box.innerHTML = '<p class="empty">Buscando…</p>';
    try {
      const list = await searchYT(v, 18);
      showResults(list);
      if (!list.length) toast('Sin resultados');
    } catch (e) {
      console.error(e);
      showResults(demoSearch(v));
    }
  }
  inp.addEventListener('input', () => {
    clearTimeout(st);
    const v = inp.value.trim();
    $('#q-clear').classList.toggle('hidden', !v);
    if (!v) { hideResults(); return; }
    st = setTimeout(() => doSearch(v), 280);
  });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearTimeout(st);
      doSearch(inp.value.trim());
      inp.blur();
    }
  });
  $('#q-clear').addEventListener('click', () => {
    inp.value = '';
    $('#q-clear').classList.add('hidden');
    hideResults();
  });

  $('#btn-chart').addEventListener('click', async () => {
    toast('Chart…');
    const list = await searchYT('top hits', 15);
    if (list.length) play(list[0], list, 0);
  });

  $('#mini').addEventListener('click', e => {
    if (e.target.closest('#mini-play') || e.target.closest('#mini-like')) return;
    openFull();
  });
  $('#mini-play').addEventListener('click', e => { e.stopPropagation(); toggle(); });
  $('#mini-like').addEventListener('click', e => { e.stopPropagation(); toggleLike(); });

  $('#full-close').addEventListener('click', closeFull);
  $('#btn-play').addEventListener('click', toggle);
  $('#btn-next').addEventListener('click', next);
  $('#btn-prev').addEventListener('click', prev);
  $('#btn-like').addEventListener('click', toggleLike);
  $('#btn-add').addEventListener('click', addToPl);
  $('#btn-shuf').addEventListener('click', () => {
    if (S.list.length < 2) return;
    for (let i = S.list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [S.list[i], S.list[j]] = [S.list[j], S.list[i]];
    }
    S.idx = 0;
    play(S.list[0], S.list, 0);
    toast('Shuffle');
  });
  $('#btn-rep').addEventListener('click', () => toast('Repeat'));
  // btn-more handled below (context menu)

  $('#fbar').addEventListener('click', e => {
    if (!S.player?.getDuration) return;
    const r = e.currentTarget.getBoundingClientRect();
    S.player.seekTo(S.player.getDuration() * ((e.clientX - r.left) / r.width), true);
  });

  $$('.qcard').forEach(c => {
    c.addEventListener('click', () => {
      const a = c.dataset.act;
      if (a === 'fav') {
        if (!S.favs.length) return toast('Sin favoritos');
        play(S.favs[0], S.favs, 0);
      } else if (a === 'most' || a === 'dl') {
        if (!S.recent.length) return toast('Escucha algo primero');
        play(S.recent[0], S.recent, 0);
      } else toast('Pronto');
    });
  });

  $('#btn-new-pl').addEventListener('click', () => {
    $('#modal').classList.remove('hidden');
    $('#modal').classList.add('show');
    $('#pl-input').value = '';
    setTimeout(() => $('#pl-input').focus(), 80);
  });
  $('#modal-cancel').addEventListener('click', () => {
    $('#modal').classList.remove('show');
    setTimeout(() => $('#modal').classList.add('hidden'), 250);
  });
  $('#modal-ok').addEventListener('click', () => {
    createPl($('#pl-input').value);
    $('#modal').classList.remove('show');
    setTimeout(() => $('#modal').classList.add('hidden'), 250);
  });

  $('#btn-pl-back').addEventListener('click', closePl);
  $('#btn-pl-play').addEventListener('click', () => {
    const pl = S.playlists.find(p => p.id === S.openPl);
    if (!pl?.tracks.length) return toast('Playlist vacía');
    play(pl.tracks[0], pl.tracks, 0);
  });
  $('#btn-pl-dl')?.addEventListener('click', () => {
    const pl = S.playlists.find(p => p.id === S.openPl);
    if (!pl) return;
    downloadPlaylist(pl);
  });

  $('#btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('light');
    S.theme = document.body.classList.contains('light') ? 'light' : 'dark';
    save();
    toast(S.theme === 'light' ? 'Modo claro' : 'Modo oscuro');
  });
  $('#btn-bell').addEventListener('click', () => toast('Sin notificaciones'));
  $('#btn-settings').addEventListener('click', openSettings);
  $('#settings-close')?.addEventListener('click', closeSettings);
  $('#settings-backdrop')?.addEventListener('click', closeSettings);

  // Audio engine radios
  $$('input[name="audio-engine"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (!radio.checked) return;
      S.audioEngine = radio.value === 'backend' ? 'backend' : 'piped';
      save();
      toast(S.audioEngine === 'piped'
        ? 'Motor: Piped (recomendado)'
        : 'Motor: Mi Backend');
    });
  });

  // Context menu
  $('#btn-more')?.addEventListener('click', openCtxMenu);
  $('#ctx-backdrop')?.addEventListener('click', closeCtxMenu);
  $('#ctx-close')?.addEventListener('click', closeCtxMenu);
  $('#ctx-download')?.addEventListener('click', () => {
    closeCtxMenu();
    if (S.track) downloadTrack(S.track);
    else toast('No hay canción sonando');
  });
  $('#ctx-add-pl')?.addEventListener('click', () => {
    closeCtxMenu();
    addToPl();
  });
  $('#ctx-share')?.addEventListener('click', async () => {
    closeCtxMenu();
    if (!S.track) return toast('No hay canción');
    const url = `https://www.youtube.com/watch?v=${S.track.id}`;
    const text = `${S.track.title} — ${S.track.artist}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: text, text, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast('Enlace copiado');
      }
    } catch (_) {
      toast('No se pudo compartir');
    }
  });
}

function openSettings() {
  const el = $('#settings');
  if (!el) return;
  // Sync current value
  const radios = $$('input[name="audio-engine"]');
  radios.forEach(r => {
    r.checked = r.value === (S.audioEngine || 'piped');
  });
  el.classList.remove('hidden');
}

function closeSettings() {
  const el = $('#settings');
  if (!el) return;
  el.classList.add('hidden');
}

/* ===== CONTEXT MENU + DOWNLOAD ===== */
function openCtxMenu() {
  const el = $('#ctx-menu');
  if (!el) return;
  el.classList.remove('hidden');
}
function closeCtxMenu() {
  const el = $('#ctx-menu');
  if (!el) return;
  el.classList.add('hidden');
}

function sanitizeFilename(name) {
  return (name || 'track').replace(/[<>:"/\\|?*\x00-\x1F]/g, '').trim().slice(0, 80) || 'track';
}

async function fetchAudioUrl(videoId) {
  const tryJson = async (url, timeout = 12000) => {
    const res = await fetch(url, { signal: AbortSignal.timeout(timeout) });
    if (!res.ok) throw new Error('bad status');
    return res.json();
  };

  // 1) User backend /api/yt-audio — use streamUrl (proxied, CORS-safe)
  try {
    const data = await tryJson(USER_BACKEND + '/api/yt-audio?id=' + encodeURIComponent(videoId), 15000);
    if (data && data.ok && (data.streamUrl || data.url)) {
      return {
        // Prefer proxied stream so <audio> works without CORS errors
        url: data.streamUrl || (USER_BACKEND + '/api/yt-stream?id=' + encodeURIComponent(videoId)),
        directUrl: data.url || null,
        mime: data.mime || 'audio/mp4',
        quality: data.quality,
        source: data.source || 'backend',
        kind: data.kind || 'audio',
      };
    }
  } catch (_) {}

  // 2) Direct Piped fallback (client-side)
  for (const base of PIPED_INSTANCES) {
    try {
      const data = await tryJson(base + '/streams/' + videoId, 8000);
      const streams = data.audioStreams || [];
      if (streams.length) {
        streams.sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));
        const best = streams.find(s => /mp4|m4a/i.test(s.mimeType || '')) || streams[0];
        if (best && best.url) {
          return { url: best.url, mime: best.mimeType || 'audio/mp4', quality: best.quality, source: 'piped' };
        }
      }
      // video+audio fallback
      const vids = (data.videoStreams || []).filter(v => v && v.url && v.videoOnly === false);
      if (vids.length) {
        vids.sort((a, b) => (parseInt(a.quality) || 999) - (parseInt(b.quality) || 999));
        return { url: vids[0].url, mime: vids[0].mimeType || 'video/mp4', quality: vids[0].quality, source: 'piped', kind: 'video+audio' };
      }
    } catch (_) {}
  }

  return null;
}

async function downloadTrack(track) {
  if (!track?.id) {
    toast('No hay canción seleccionada');
    return;
  }
  toast('Buscando audio…', 4000);
  try {
    const info = await fetchAudioUrl(track.id);
    if (!info?.url) {
      toast('No se pudo obtener el audio. Prueba otra canción o cambia el motor en Ajustes.');
      return;
    }

    toast('Descargando…', 8000);
    const dlUrl = info.directUrl || info.url;
    const res = await fetch(dlUrl, { signal: AbortSignal.timeout(90000) });
    if (!res.ok) throw new Error('fetch fail');
    const blob = await res.blob();
    const ext = (info.mime || '').includes('webm') ? 'webm' : 'm4a';
    const filename = `${sanitizeFilename(track.artist)} - ${sanitizeFilename(track.title)}.${ext}`;

    // Prefer File System Access API (lets user choose folder on supported browsers)
    if (window.showSaveFilePicker) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [{ description: 'Audio', accept: { [info.mime || 'audio/mp4']: [`.${ext}`] } }],
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        toast('Descargado ✓');
        return;
      } catch (e) {
        if (e.name === 'AbortError') {
          toast('Descarga cancelada');
          return;
        }
        // fall through to classic download
      }
    }

    // Classic download (goes to Downloads folder on most phones)
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 2000);
    toast('Descarga iniciada → carpeta Descargas');
  } catch (e) {
    console.warn('download error', e);
    toast('Error al descargar. Intenta de nuevo.');
  }
}

async function downloadPlaylist(pl) {
  if (!pl?.tracks?.length) {
    toast('Playlist vacía');
    return;
  }
  const total = pl.tracks.length;
  toast(`Descargando playlist (1/${total})…`, 6000);
  let ok = 0;
  for (let i = 0; i < total; i++) {
    const t = pl.tracks[i];
    toast(`Descargando ${i + 1}/${total}: ${t.title?.slice(0, 28) || '…'}`, 5000);
    try {
      await downloadTrack(t);
      ok++;
      // small delay to avoid hammering
      await new Promise(r => setTimeout(r, 1200));
    } catch (_) {}
  }
  toast(`Playlist: ${ok}/${total} descargadas`);
}

function openFull() {
  const f = $('#full');
  f.classList.remove('hidden');
  requestAnimationFrame(() => f.classList.add('show'));
}
function closeFull() {
  const f = $('#full');
  f.classList.remove('show');
  setTimeout(() => f.classList.add('hidden'), 480);
}



/* ===== LISTENING PREFS / RECS ===== */
const GENRE_HINTS = [
  ['reggaeton', /bad bunny|karol g|j balvin|feid|rauw|ozuna|anuel|mambo|titi me|dákiti|provenza/i],
  ['latin pop', /luis fonsi|shakira|enrique|ricky martin|sebastian yatra|despacito/i],
  ['pop', /taylor|swift|ariana|dua lipa|harry styles|olivia|billie|ed sheeran|adele|weeknd|blinding/i],
  ['rock', /queen|imagine dragons|coldplay|nirvana|metallica|foo fighters|rock/i],
  ['r&b', /rnb|r&b|sza|the weeknd|frank ocean|daniel caesar/i],
  ['hip hop', /drake|kendrick|travis|kanye|rap|hip.?hop|eminem/i],
  ['electronic', /calvin harris|avicii|martin garrix|electronic|edm|house|techno/i],
  ['indie', /laufey|indie|alternative|arctic monkeys|tame impala/i],
  ['salsa', /salsa|marc anthony|grupo frontera|fuerza regida|regional|corridos/i],
  ['k-pop', /bts|blackpink|kpop|k-pop|twice|stray kids/i],
  ['chill', /chill|lofi|lo-fi|ambient|relax|sleep|acoustic/i],
];

function inferTags(track) {
  const hay = ((track.title || '') + ' ' + (track.artist || '')).toLowerCase();
  const tags = [];
  for (const [tag, re] of GENRE_HINTS) {
    if (re.test(hay)) tags.push(tag);
  }
  if (!tags.length) tags.push('pop');
  return tags;
}

function learnFromTrack(track) {
  if (!track) return;
  if (!S.prefs) S.prefs = { artists: {}, tags: {}, plays: 0 };
  const artist = (track.artist || 'Unknown').split(',')[0].trim();
  S.prefs.artists[artist] = (S.prefs.artists[artist] || 0) + 1;
  inferTags(track).forEach(t => {
    S.prefs.tags[t] = (S.prefs.tags[t] || 0) + 1;
  });
  S.prefs.plays = (S.prefs.plays || 0) + 1;
  save();
}

function topPrefs(n = 3) {
  const tags = Object.entries(S.prefs?.tags || {}).sort((a, b) => b[1] - a[1]).slice(0, n);
  const artists = Object.entries(S.prefs?.artists || {}).sort((a, b) => b[1] - a[1]).slice(0, n);
  return { tags, artists };
}

function prefsBlurb() {
  const { tags, artists } = topPrefs(3);
  if (!S.prefs?.plays) return 'El usuario aún no tiene historial.';
  return `Historial: ${S.prefs.plays} plays. Géneros favoritos: ${tags.map(t => t[0]+'('+t[1]+')').join(', ') || 'n/d'}. Artistas: ${artists.map(a => a[0]+'('+a[1]+')').join(', ') || 'n/d'}.`;
}

async function loadRecommendations() {
  const box = $('#rec-row');
  if (!box) return;
  const { tags, artists } = topPrefs(2);
  let q = 'trending music';
  if (artists.length) q = artists[0][0] + ' mix';
  else if (tags.length) q = tags[0][0] + ' hits';
  box.innerHTML = '<p class="empty" style="padding:8px">Personalizando…</p>';
  try {
    const list = await searchYT(q, 10);
    box.innerHTML = '';
    if (!list.length) {
      box.innerHTML = '<p class="empty">Escucha más para mejorar recomendaciones</p>';
      return;
    }
    list.forEach((t, i) => {
      const d = document.createElement('div');
      d.className = 'pcard';
      d.innerHTML = `
        <div class="pcard-art">
          <img src="${t.thumb}" alt="" loading="lazy" />
          <div class="ov">${t.title}</div>
        </div>
        <div class="pcard-t">${t.title}</div>
        <div class="pcard-s">${t.artist}</div>`;
      d.addEventListener('click', () => play(t, list, i));
      box.appendChild(d);
    });
  } catch (_) {
    box.innerHTML = '<p class="empty">No se pudieron cargar recomendaciones</p>';
  }
}


/* ===== CHANGELOG ===== */
function showChangelog() {
  if (localStorage.getItem(CHANGELOG_KEY)) return;
  const el = $('#changelog');
  if (!el) return;
  el.classList.remove('hidden');
}
function closeChangelog() {
  const el = $('#changelog');
  if (!el) return;
  el.classList.add('hidden');
  localStorage.setItem(CHANGELOG_KEY, '1');
}

/* ===== FULL LYRICS ===== */
function openFullLyrics() {
  const body = $('#lf-body');
  const src = $('#lyrics-body');
  if (!src) return;
  body.innerHTML = src.innerHTML;
  $('#lf-title').textContent = (S.track?.title || 'Lyrics');
  const el = $('#lyrics-full');
  el.classList.remove('hidden');
  // re-apply active
  if (S.lastLyricIdx >= 0) {
    $$('#lf-body .lyric-line').forEach((n, i) => n.classList.toggle('active-line', i === S.lastLyricIdx));
  }
}
function closeFullLyrics() {
  $('#lyrics-full').classList.add('hidden');
}

// Patch syncLyrics to also update full view
const _syncLyricsOrig = typeof syncLyrics === 'function' ? syncLyrics : null;
function syncLyricsBoth(cur) {
  if (typeof syncLyrics === 'function') {
    // call existing logic by duplicating active on full view after
  }
  if (!S.lyrics.length) return;
  const t = cur - (S.lyricOffset || 0);
  let active = -1;
  for (let i = 0; i < S.lyrics.length; i++) {
    if (S.lyrics[i].t <= t) active = i;
    else break;
  }
  if (active < 0) active = 0;
  if (active === S.lastLyricIdx) {
    // still update full view scroll if open
  } else {
    S.lastLyricIdx = active;
    $$('#lyrics-body .lyric-line').forEach((el, i) => el.classList.toggle('active-line', i === active));
    const el = $(`#lyrics-body .lyric-line[data-i="${active}"]`) || $$('#lyrics-body .lyric-line')[active];
    if (el) {
      const body = $('#lyrics-body');
      if (body) {
        const top = el.offsetTop - body.clientHeight * 0.35;
        body.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    }
  }
  // full lyrics overlay
  const full = $('#lyrics-full');
  if (full && !full.classList.contains('hidden')) {
    $$('#lf-body .lyric-line').forEach((el, i) => el.classList.toggle('active-line', i === active));
    const fel = $$('#lf-body .lyric-line')[active];
    if (fel) {
      const body = $('#lf-body');
      const top = fel.offsetTop - body.clientHeight * 0.4;
      body.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }
}

/* ===== CHROMO AI ===== */
const CHROMO_SYSTEM = `Eres Chromo AI, el asistente de la app de música SimpMusic.
Hablas en español, de forma breve, amable y kawaii pero útil.
Puedes controlar la app respondiendo con un bloque JSON al final cuando necesites una acción.

Acciones disponibles (usa solo estas):
{"action":"search","query":"texto"}
{"action":"play_search","query":"texto"}  // busca y reproduce el primer resultado
{"action":"pause"}
{"action":"resume"}
{"action":"next"}
{"action":"prev"}
{"action":"navigate","page":"home|search|library"}
{"action":"like"}
{"action":"create_playlist","name":"nombre"}
{"action":"now_playing"}
{"action":"recommend"}

Reglas:
- Si el usuario pide música, usa play_search.
- Si solo pregunta, responde sin JSON.
- Si haces acción, escribe 1 frase amable y luego el JSON solo en una línea.
- Nunca inventes videoIds; usa search/play_search.
Estado actual y gustos del usuario se te dan en el mensaje extra.
Si el usuario pide recomendaciones, usa play_search con un query basado en sus géneros/artistas favoritos.
Sé proactivo: si pregunta qué escuchar, sugiere según su historial.`;

function chromoOpen() {
  $('#chromo').classList.remove('hidden');
  const msgs = $('#chromo-msgs');
  if (msgs && !msgs.children.length) {
    chromoAdd('ai', '¡Hola! Soy Chromo AI. Puedo buscar canciones, reproducir, pausar, ir a Library… ¿Qué necesitas?');
  }
  setTimeout(() => $('#chromo-input')?.focus(), 200);
}
function chromoClose() {
  $('#chromo').classList.add('hidden');
}
function chromoAdd(role, text) {
  const box = $('#chromo-msgs');
  if (!box) return null;
  const d = document.createElement('div');
  d.className = 'cm ' + (role === 'user' ? 'user' : 'ai');
  d.textContent = text;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
  return d;
}

function chromoStateBlurb() {
  const t = S.track;
  return `Now playing: ${t ? t.title + ' — ' + t.artist : 'nada'}. Playing: ${S.playing}. ${prefsBlurb()}`;
}

async function chromoSend(text) {
  text = (text || '').trim();
  if (!text) return;
  chromoAdd('user', text);
  const typing = chromoAdd('ai', '…');
  if (typing) typing.classList.add('typing');

  try {
    const r = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + OPENROUTER_KEY,
        'Content-Type': 'application/json',
        'HTTP-Referer': location.origin || 'https://simpmusic.app',
        'X-Title': 'SimpMusic Chromo AI',
      },
      body: JSON.stringify({
        model: CHROMO_MODEL,
        messages: [
          { role: 'system', content: CHROMO_SYSTEM + '\n' + chromoStateBlurb() },
          { role: 'user', content: text },
        ],
        temperature: 0.6,
        max_tokens: 400,
      }),
    });
    const j = await r.json();
    if (!r.ok) throw new Error(j?.error?.message || 'OpenRouter error');
    let reply = j.choices?.[0]?.message?.content || 'No pude responder.';
    // extract action JSON
    let action = null;
    const m = reply.match(/\{[\s\S]*?"action"[\s\S]*?\}/);
    if (m) {
      try {
        action = JSON.parse(m[0]);
        reply = reply.replace(m[0], '').trim();
      } catch (_) {}
    }
    if (typing) typing.remove();
    chromoAdd('ai', reply || 'Listo.');
    if (action) await chromoRun(action);
  } catch (e) {
    console.warn(e);
    if (typing) typing.remove();
    // local fallback commands
    const low = text.toLowerCase();
    if (/pausa|pause|para/.test(low)) {
      if (S.playing) toggle();
      chromoAdd('ai', 'Pausado.');
    } else if (/play|reproduce|pon |escuch/.test(low)) {
      const q = text.replace(/^(reproduce|pon|play|escucha)\s*/i, '').trim() || text;
      chromoAdd('ai', 'Buscando “' + q + '”…');
      await chromoRun({ action: 'play_search', query: q });
    } else if (/biblioteca|library/.test(low)) {
      go('library');
      chromoAdd('ai', 'Abrí tu biblioteca.');
    } else if (/busca|search/.test(low)) {
      const q = text.replace(/^(busca|search)\s*/i, '').trim();
      await chromoRun({ action: 'search', query: q });
      chromoAdd('ai', 'Aquí tienes resultados de “' + q + '”.');
    } else {
      chromoAdd('ai', 'No pude conectar con OpenRouter. Prueba: “reproduce chill”, “busca adele”, “pausa”.');
    }
  }
}

async function chromoRun(action) {
  if (!action || !action.action) return;
  const a = action.action;
  try {
    if (a === 'search' && action.query) {
      go('search');
      const inp = $('#q');
      if (inp) inp.value = action.query;
      const list = await searchYT(action.query, 18);
      showResults(list);
      toast('Resultados: ' + action.query);
    } else if (a === 'play_search' && action.query) {
      toast('Chromo busca…');
      const list = await searchYT(action.query, 12);
      if (list.length) {
        play(list[0], list, 0);
        openFull();
        toast('▶ ' + list[0].title);
      } else toast('Sin resultados');
    } else if (a === 'pause') {
      if (S.playing) toggle();
    } else if (a === 'resume') {
      if (!S.playing && S.track) toggle();
    } else if (a === 'next') next();
    else if (a === 'prev') prev();
    else if (a === 'navigate' && action.page) go(action.page);
    else if (a === 'like') toggleLike();
    else if (a === 'create_playlist' && action.name) createPl(action.name);
    else if (a === 'recommend') {
      const { tags, artists } = topPrefs(2);
      const q = artists[0]?.[0] || tags[0]?.[0] || 'pop hits';
      await chromoRun({ action: 'play_search', query: q + ' mix' });
    } else if (a === 'now_playing') {
      chromoAdd('ai', S.track ? `Suena: ${S.track.title} — ${S.track.artist}` : 'No hay nada reproduciéndose.');
    }
  } catch (e) {
    console.warn('chromoRun', e);
    toast('Chromo no pudo ejecutar la acción');
  }
}

function bindChromo() {
  $('#picker-cancel')?.addEventListener('click', closePlaylistPicker);
  $('#picker-new')?.addEventListener('click', () => {
    closePlaylistPicker();
    $('#modal').classList.remove('hidden');
    $('#modal').classList.add('show');
    $('#pl-input').value = '';
    $('#pl-input').dataset.afterCreate = '1';
    setTimeout(() => $('#pl-input')?.focus(), 80);
  });
  $('#pl-picker')?.addEventListener('click', e => {
    if (e.target.id === 'pl-picker') closePlaylistPicker();
  });

  $('#chromo-fab')?.addEventListener('click', chromoOpen);
  $('#chromo-close')?.addEventListener('click', chromoClose);
  $('#chromo')?.addEventListener('click', e => {
    if (e.target.id === 'chromo') chromoClose();
  });
  $('#chromo-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const inp = $('#chromo-input');
    const v = inp.value;
    inp.value = '';
    chromoSend(v);
  });
  $$('.cq').forEach(b => b.addEventListener('click', () => chromoSend(b.dataset.q)));
  $('#changelog-ok')?.addEventListener('click', closeChangelog);
  $('#btn-full-lyrics')?.addEventListener('click', openFullLyrics);
  $('#lf-close')?.addEventListener('click', closeFullLyrics);
}


function init() {
  load();
  $('#greet').textContent = greet();
  renderHome();
  renderSearchBrowse();
  renderRecent();
  renderPlList();
  bind();
  bindChromo();
  showChangelog();
  setTimeout(loadRecommendations, 600);
  // boot YouTube player ASAP
  if (window.YT && YT.Player) createYTPlayer();
  else {
    // API may load later via onYouTubeIframeAPIReady
    let tries = 0;
    const wait = setInterval(() => {
      tries++;
      if (window.YT && YT.Player) {
        clearInterval(wait);
        createYTPlayer();
      } else if (tries > 40) clearInterval(wait);
    }, 250);
  }
  setTimeout(() => {
    $('#splash').classList.add('hide');
    setTimeout(() => { try { $('#splash').remove(); } catch (_) {} }, 550);
  }, 1600);
}

document.addEventListener('DOMContentLoaded', init);
