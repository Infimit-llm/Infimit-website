import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';

const ARTICLES = [
	{
		cat: 'Implementation',
		title: 'Why IFS blueprints fail — and the two-week fix',
		excerpt: 'Most IFS programmes stall in blueprint because the operating model was never written down. Here is the diagnostic we run before any configuration begins.',
		read: '8 min',
		date: 'Aug 2026',
	},
	{
		cat: 'Architecture',
		title: 'Integration architecture for IFS: build vs buy vs bore',
		excerpt: 'A decision framework for the interfaces every IFS programme eventually faces — MES, WMS, CRM and the spreadsheets nobody admits to.',
		read: '11 min',
		date: 'Jul 2026',
	},
	{
		cat: 'Aerospace & Defense',
		title: 'Configuration control in IFS for regulated programmes',
		excerpt: 'How to structure IFS for serialised traceability and export control without turning every engineering change into a three-week approval.',
		read: '9 min',
		date: 'Jun 2026',
	},
	{
		cat: 'Support',
		title: 'Hypercare that actually stabilises — not just babysits',
		excerpt: 'The difference between hypercare and a helpdesk. What to measure in the first 90 days after IFS go-live, and what to ignore.',
		read: '7 min',
		date: 'May 2026',
	},
	{
		cat: 'Manufacturing',
		title: 'Tuning IFS MRP to the reality of your shop floor',
		excerpt: 'Default IFS MRP parameters are a starting point, not a strategy. A practical guide to scheduling, capacity and the messages worth acting on.',
		read: '10 min',
		date: 'Apr 2026',
	},
	{
		cat: 'Development',
		title: 'Upgrade-safe IFS customisation: the guardrails that matter',
		excerpt: 'Customisations that survive an upgrade and ones that do not. How we keep your IFS extensions owned by you, not by us.',
		read: '8 min',
		date: 'Mar 2026',
	},
];

export default function InsightsPage() {
	return (
		<div>
			<Helmet>
				<title>Insights — IFS ERP Field Notes | Ledgerline</title>
				<meta
					name="description"
					content="Field notes on IFS ERP implementation, architecture, development and support — written by the consultants who do the work."
				/>
			</Helmet>

			{/* ── Page hero ────────────────────────────────────────── */}
			<section className="relative overflow-hidden border-b border-border">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
					style={{ background: 'radial-gradient(circle, hsl(var(--teal) / 0.5), transparent 65%)' }}
				/>
				<div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
					<Reveal>
						<div className="mb-5 text-sm font-medium text-teal">Insights</div>
						<h1 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-mist">
							Field notes from the{' '}
							<span className="text-gradient">shop floor.</span>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
							Practical writing on IFS implementation, architecture, development and support —
							from the consultants who do the work, not the ones who sell it.
						</p>
					</Reveal>
				</div>
			</section>

			{/* ── Articles ─────────────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{ARTICLES.map((a, i) => (
							<Reveal key={a.title} delay={(i % 3) * 0.06}>
								<article className="group flex h-full flex-col rounded-3xl border border-border bg-navy-2/50 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft-lg">
									<div className="mb-5 flex items-center justify-between">
										<span className="rounded-full bg-brand-gradient-soft px-3 py-1 text-[11px] font-medium tracking-wide text-teal">
											{a.cat}
										</span>
										<span className="flex items-center gap-1.5 text-[11px] tracking-wide text-muted-foreground">
											<Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
											{a.read}
										</span>
									</div>
									<h2 className="font-display text-lg font-semibold leading-snug text-mist">
										{a.title}
									</h2>
									<p className="mt-3 flex-1 text-sm leading-relaxed text-mist-dim">{a.excerpt}</p>
									<div className="mt-6 flex items-center justify-between border-t border-border pt-4">
										<span className="text-[11px] tracking-wide text-muted-foreground">{a.date}</span>
										<span className="inline-flex items-center gap-1 text-sm font-medium text-teal transition-transform group-hover:translate-x-0.5">
											Read
											<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
										</span>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA ──────────────────────────────────────────────── */}
			<section className="border-t border-border bg-navy-2/30">
				<div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
					<Reveal>
						<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
							<div>
								<h2 className="font-display text-2xl font-semibold tracking-tight text-mist md:text-3xl">
									Want the next note in your inbox?
								</h2>
								<p className="mt-3 max-w-lg text-[15px] leading-relaxed text-mist-dim">
									We publish a short field note every few weeks. No vendor pitches, no
									newsletter automations — just what we are seeing on live programmes.
								</p>
							</div>
							<Link
								to="/contact"
								className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Get in touch
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
