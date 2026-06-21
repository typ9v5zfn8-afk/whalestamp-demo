import '../node_modules/@whalestamp/ds/dist/index.css';
import './App.css';

const ALERTS = [
  {
    type: 'buy',
    emoji: '🐋',
    title: '0x91f…3ac bought $4.2M ETH',
    sub: 'Uniswap V3 · score 971',
    ctx: 'This wallet has been right 11 times in a row',
    amount: '+$4.2M',
    time: '2m ago',
  },
  {
    type: 'sell',
    emoji: '📉',
    title: '0xf3c…8bb dumped $890K PEPE',
    sub: '1inch · score 964',
    ctx: 'Sold 40 min before the crash',
    amount: '-$890K',
    time: '5m ago',
  },
  {
    type: 'move',
    emoji: '🔀',
    title: 'Diamond.eth moved $11.7M BTC',
    sub: 'On-chain transfer · score 958',
    ctx: 'Last time they moved this much: +300% followed',
    amount: '$11.7M',
    time: '9m ago',
  },
];

const WHALES = [
  { cat: 'DeFi degen',    addr: '0x4f2a…9bc1', name: 'Anon Ape',     wr: '94%', pnl: '$18M', score: 971, top: true },
  { cat: 'NFT flipper',   addr: '0x7d1c…22f4', name: 'FlipKing.eth', wr: '88%', pnl: '$6.4M', score: 922, top: false },
  { cat: 'OG blue-chip',  addr: '0x0d9a…f3e7', name: 'Diamond.eth',  wr: '79%', pnl: '$41M', score: 958, top: false },
  { cat: 'Meme trader',   addr: '0xb88f…4a12', name: 'MemeGod.eth',  wr: '71%', pnl: '$3.1M', score: 929, top: false },
];

const TOP_TODAY = [
  { rank: '#1', addr: '0x91f…3ac',   score: 971 },
  { rank: '#2', addr: '0xf3c…8bb',   score: 964 },
  { rank: '#3', addr: 'Diamond.eth', score: 958 },
  { rank: '#4', addr: '0x22a…d41',   score: 941 },
  { rank: '#5', addr: 'MemeGod.eth', score: 929 },
];

export default function App() {
  return (
    <div className="ws-page">
      {/* NAV */}
      <nav className="ws-nav">
        <div className="ws-logo">Whale<span>stamp</span></div>
        <div className="ws-nav-links">
          <a href="#score">Score</a>
          <a href="#feed">Feed</a>
          <a href="#copy">Copy</a>
        </div>
        <a href="#score" className="ws-btn-primary ws-nav-cta">Get your score</a>
      </nav>

      {/* HERO */}
      <section className="ws-hero" id="score">
        <div className="ws-hero-badge">
          <span className="ws-dot" />
          14,302 wallets stamped today
        </div>
        <h1>Are you a whale<br />or just <em>pretending?</em></h1>
        <p className="ws-hero-sub">
          Paste your wallet. Get a public score based on real on-chain performance.{' '}
          <strong>Then make your friends feel bad about theirs.</strong>
        </p>
        <p className="ws-social-proof">
          Top scorer today: <b>0x91f…3ac</b> — score <b>971</b> · $4.2M PnL this month 🔥
        </p>

        <div className="ws-wallet-input">
          <input placeholder="0x… or .eth — no wallet connect needed" />
          <button className="ws-btn-primary">Stamp me</button>
        </div>

        <div className="ws-score-card">
          <div className="ws-score-header">
            <span className="ws-score-wallet">0x4a3b…f91c</span>
            <span className="ws-score-rank">Top 4% globally</span>
          </div>
          <div className="ws-score-tier">Category: <strong>Diamond hands</strong></div>
          <div className="ws-score-number">847<span className="ws-score-max">/1000</span></div>
          <div className="ws-score-label">Whale score — better than 96% of wallets</div>
          <div className="ws-score-grid">
            <div className="ws-metric"><div className="ws-metric-val">91%</div><div className="ws-metric-lbl">Win rate</div></div>
            <div className="ws-metric"><div className="ws-metric-val">14 mo</div><div className="ws-metric-lbl">Longest hold</div></div>
            <div className="ws-metric"><div className="ws-metric-val">-18%</div><div className="ws-metric-lbl">Max drawdown</div></div>
            <div className="ws-metric"><div className="ws-metric-val">$2.4M</div><div className="ws-metric-lbl">PnL all-time</div></div>
          </div>
          <button className="ws-share-btn">🐦 Post my stamp — let them cope</button>
          <p className="ws-shame">Average wallet scores <b>312</b>. You're not average.</p>
        </div>
      </section>

      {/* LEADERBOARD STRIP */}
      <div className="ws-lb-strip">
        <span className="ws-lb-label">Today's top stamps</span>
        <div className="ws-lb-items">
          {TOP_TODAY.map((t) => (
            <div key={t.rank} className="ws-lb-item">
              <span className="ws-lb-rank">{t.rank}</span>
              <span className="ws-lb-addr">{t.addr}</span>
              <span className="ws-lb-score">{t.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ALERT FEED */}
      <section className="ws-section" id="feed">
        <div className="ws-section-tag"><span className="ws-dot" /> Updating now</div>
        <h2>Whale alert feed —<br /><em>nothing escapes us</em></h2>
        <p className="ws-section-sub">
          Every massive on-chain move, the second it happens. Each alert is a ready-to-post card. Be first on your timeline.
        </p>

        <div className="ws-day-winner">
          <div>
            <div className="ws-dw-label">Biggest mover today</div>
            <div className="ws-dw-name">0x91f…3ac — bought ETH at the exact bottom</div>
          </div>
          <div className="ws-dw-pnl">+$4.2M</div>
        </div>

        <div className="ws-feed">
          {ALERTS.map((a) => (
            <div key={a.title} className={`ws-alert-card ws-alert-card--${a.type}`}>
              <div className={`ws-alert-icon ws-alert-icon--${a.type}`}>{a.emoji}</div>
              <div className="ws-alert-info">
                <div className="ws-alert-title">{a.title}</div>
                <div className="ws-alert-sub">{a.sub}</div>
                <div className="ws-alert-ctx">{a.ctx}</div>
              </div>
              <div className="ws-alert-right">
                <div className="ws-alert-amount">{a.amount}</div>
                <div className="ws-alert-time">{a.time}</div>
                <div className="ws-alert-share">Share</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COPY THE WHALE */}
      <section className="ws-section" id="copy">
        <div className="ws-section-tag">Copy the whale</div>
        <h2>These wallets print money.<br /><em>Study them.</em></h2>
        <p className="ws-section-sub">
          Public profiles of the best on-chain traders, sorted by category. No login. No wallet connect. Just alpha.
        </p>
        <div className="ws-whale-grid">
          {WHALES.map((w) => (
            <div key={w.addr} className={`ws-whale-card${w.top ? ' ws-whale-card--top' : ''}`}>
              <div className="ws-whale-cat">{w.cat}</div>
              <div className="ws-whale-addr">{w.addr}</div>
              <div className="ws-whale-name">{w.name}</div>
              <div className="ws-whale-stats">
                <div className="ws-wstat"><div className="ws-wstat-v">{w.wr}</div><div className="ws-wstat-l">Win rate</div></div>
                <div className="ws-wstat"><div className="ws-wstat-v">{w.pnl}</div><div className="ws-wstat-l">PnL</div></div>
                <div className="ws-wstat"><div className="ws-wstat-v">{w.score}</div><div className="ws-wstat-l">Score</div></div>
              </div>
              <button className="ws-copy-btn">View their moves</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="ws-cta-strip">
        <h2>Your wallet has a story.<br />What does yours say?</h2>
        <p>14,302 wallets stamped today. Most people are scared to check theirs.</p>
        <a href="#score" className="ws-btn-white">Stamp my wallet — it's free</a>
        <p className="ws-cta-proof">No wallet connect · No sign up · Instant results</p>
      </div>

      <footer className="ws-footer">
        <span>© 2026 Whalestamp</span>
        <span>Real on-chain data · No wallet connect required</span>
      </footer>
    </div>
  );
}
