import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, Users, ShieldCheck } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';

const VALUES = [
	{
		icon: Target,
		title: 'Senior, always',
		desc: 'The consultant who scopes the work is the one who delivers it. No bait-and-switch, no junior bench.',
	},
	{
		icon: ShieldCheck,
		title: 'Vendor-neutral',
		desc: 'We are independent of IFS the vendor. We recommend what fits your operation — including when that means pushing back.',
	},
	{
		icon: Users,
		title: 'Adoption is the project',
		desc: 'A system nobody uses is a failed project, however clean the configuration. We stay until IFS is simply how the company works.',
	},
];

const METRICS = [
	{ v: 2009, suffix: '', label: 'Founded' },
	{ v: 140, suffix: '+', label: 'IFS programmes delivered' },
	{ v: 12, suffix: '', label: 'Countries served' },
	{ v: 41, suffix: '', label: 'Consultants, zero salespeople' },
];

export default function AboutPage() {
	return (
		<div>
			<Helmet>
				<title>About us — Independent IFS ERP Consultants | Ledgerline</title>
				<meta
					name="description"
					content="Ledgerline is an independent IFS ERP consulting firm. Senior consultants, vendor-neutral advice, and adoption treated as the project — not the afterthought."
				/>
			</Helmet>

			{/* ── Page hero ────────────────────────────────────────── */}
			<section className="relative overflow-hidden border-b border-border">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -left-24 -top-24 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
					style={{ background: 'radial-gradient(circle, hsl(var(--blue) / 0.5), transparent 65%)' }}
				/>
				<div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
					<Reveal>
						<div className="mb-5 text-sm font-medium text-teal">About us</div>
						<h1 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-mist">
							Consultants first.{' '}
							<span className="text-gradient">Salespeople never.</span>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
							Ledgerline is an independent IFS ERP consulting firm. We have spent fifteen years
							selecting, implementing, architecting and supporting IFS for asset-heavy,
							project-driven operations — and we employ exactly zero salespeople.
						</p>
					</Reveal>
				</div>
			</section>

			{/* ── Story ────────────────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32">
					<Reveal>
						<div className="space-y-6 text-[17px] leading-relaxed text-mist-dim">
							<p>
								Ledgerline was founded in 2009 by a group of IFS consultants who had spent too
								long watching good programmes get hollowed out by staffing models — senior
								names on the proposal, junior bodies on the ground.
							</p>
							<p>
								We built the opposite. A firm where the person who scopes the work is the
								person who delivers it, where adoption is treated as the project rather than
								the afterthought, and where we are independent enough to tell a client not to
								buy something when that is the honest answer.
							</p>
							<p>
								Fifteen years on, we have delivered 140+ IFS programmes across manufacturing,
								aerospace &amp; defense, project-based engineering, supply chain and
								distribution — in twelve countries, always on-site, always senior.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* ── Metrics ──────────────────────────────────────────── */}
			<section className="border-y border-border bg-navy-2/40">
				<div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-12 md:grid-cols-4 md:px-8 md:py-16">
					{METRICS.map((s, i) => (
						<Reveal key={i} delay={i * 0.05}>
							<div className="px-2 py-4 md:px-6">
								<div className="font-display text-3xl font-semibold text-gradient md:text-4xl">
									<CountUp value={s.v} suffix={s.suffix} />
								</div>
								<p className="mt-2 text-xs leading-relaxed tracking-wide text-muted-foreground md:text-sm">
									{s.label}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* ── Values ───────────────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<Reveal>
						<div className="mb-16 max-w-2xl">
							<div className="mb-4 text-sm font-medium text-teal">What we believe</div>
							<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-mist md:text-5xl">
								Three rules we don't break
							</h2>
						</div>
					</Reveal>

					<div className="grid gap-6 md:grid-cols-3">
						{VALUES.map((v, i) => (
							<Reveal key={v.title} delay={i * 0.06}>
								<div className="h-full rounded-3xl border border-border bg-navy-2/50 p-8 shadow-soft transition-colors hover:border-teal/40">
									<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient-soft">
										<v.icon className="h-5 w-5 text-teal" strokeWidth={1.75} />
									</div>
									<h3 className="font-display text-lg font-semibold text-mist">{v.title}</h3>
									<p className="mt-3 text-sm leading-relaxed text-mist-dim">{v.desc}</p>
								</div>
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
									Talk to a consultant, not a pipeline.
								</h2>
								<p className="mt-3 max-w-lg text-[15px] leading-relaxed text-mist-dim">
									The first call is with someone who has delivered IFS programmes — not a
									business development rep reading a script.
								</p>
							</div>
							<Link
								to="/contact"
								className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Book a call
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
