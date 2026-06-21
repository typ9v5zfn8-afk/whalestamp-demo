import '../node_modules/@whalestamp/ds/dist/index.css';
import { Button, Badge, Card, Input, Heading, Text } from '@whalestamp/ds';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <div className="demo-page">
      <header className="demo-header">
        <Heading level={1}>Whalestamp DS</Heading>
        <Text color="muted">A demo of the published <code>@whalestamp/ds</code> package.</Text>
      </header>

      <section className="demo-section">
        <Heading level={3}>Buttons</Heading>
        <div className="demo-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" loading>Saving…</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
        <div className="demo-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="demo-section">
        <Heading level={3}>Badges</Heading>
        <div className="demo-row">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="error" dot>Failed</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </section>

      <section className="demo-section">
        <Heading level={3}>Cards</Heading>
        <div className="demo-row demo-row--wrap">
          {[
            { label: 'Shipments', value: '1,240', trend: '+12%' },
            { label: 'Revenue', value: '$48k', trend: '+8%' },
            { label: 'On-time rate', value: '97.3%', trend: '+2%' },
          ].map((m) => (
            <Card key={m.label} padding="md" style={{ minWidth: 160 }}>
              <Text size="sm" color="muted">{m.label}</Text>
              <Text size="3xl" weight="bold">{m.value}</Text>
              <Badge variant="success">{m.trend}</Badge>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <Heading level={3}>Form</Heading>
        <Card padding="lg" style={{ maxWidth: 400 }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <Badge variant="success" dot>Subscribed!</Badge>
              <Text color="muted" style={{ marginTop: 8 }}>Thanks — we'll be in touch.</Text>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                hint="We'll never share your email."
                fullWidth
              />
              <Button type="submit" variant="primary" loading={loading} fullWidth>
                Subscribe
              </Button>
            </form>
          )}
        </Card>
      </section>
    </div>
  );
}
