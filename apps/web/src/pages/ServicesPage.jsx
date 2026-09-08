import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

const SERVICES = [
	{
		n: '01',
		title: 'IFS ERP Implementation',
		desc: 'Full-lifecycle IFS deployment from blueprint to go-live. We translate your operating model into a configured IFS environment — phased, rehearsed and owned end-to-end by senior consultants who stay past cutover.',
		points: ['Blueprinting & fit-gap', 'Configuration & UAT', 'Data migration', 'Rehearsed cutover & go-live'],
	},
	{
		n: '02',
		title: 'Support',
		desc: 'Post-go-live hypercare and managed support with a named consultant who knows your IFS environment, extensions and chart of accounts by heart. Tickets answered by people, not queues.',
		points: ['Hypercare & stabilisation', 'Managed support tiers', 'Release & patch management', 'Super-user training'],
	},
	{
		n: '03',
		title: 'Solution Architecture',
		desc: 'IFS solution design and integration architecture that fits your operating model — platform strategy, data model and interface inventory decided before a single component is built.',
		points: ['Platform & landscape design', 'Integration architecture', 'Data model & master data', 'Upgrade roadmap'],
	},
	{
		n: '04',
		title: 'Development',
		desc: 'Custom IFS development, extensions and reporting built inside vendor guardrails — upgrade-safe, documented and owned by you from day one. No black boxes, no orphaned customisations.',
		points: ['Custom extensions', 'Reports & dashboards', 'Workflows & automations', 'API & integration build'],
	},
];

export default function ServicesPage() {
	return (
		<div>
			<Helmet>
				<title>Services — IFS ERP Implementation, Support, Architecture & Development | Ledgerline</title>
				<meta
					name="description"
					content="IFS ERP implementation, support, solution architecture and custom development — delivered by one accountable senior consulting team."
				/>
			</Helmet>

			{/* ── Page hero ────────────────────────────────────────── */}
			<section className="relative overflow-hidden border-b border-border">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
					style={{ background: 'radial-gradient(circle, hsl(var(--teal) / 0.5), transparent 65%)' }}
				/>
				<div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
					<Reveal>
						<div className="mb-5 text-sm font-medium text-teal">Services</div>
						<h1 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-mist">
							IFS, delivered by people who{' '}
							<span className="text-gradient">stay.</span>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
							Four disciplines covering the full IFS lifecycle — from first blueprint to
							year-five support — under one accountable team.
						</p>
					</Reveal>
				</div>
			</section>

			{/* ── Services list ────────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<div className="space-y-6">
						{SERVICES.map((s, i) => (
							<Reveal key={s.title} delay={(i % 2) * 0.05}>
								<div className="grid gap-8 rounded-3xl border border-border bg-navy-2/50 p-8 shadow-soft transition-colors hover:border-teal/40 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12 md:p-12">
									<span className="font-display text-4xl font-semibold text-gradient md:text-5xl">
										{s.n}
									</span>
									<div>
										<h2 className="font-display text-2xl font-semibold leading-snug text-mist md:text-3xl">
											{s.title}
										</h2>
										<p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mist-dim md:text-base">
											{s.desc}
										</p>
										<ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
											{s.points.map((p) => (
												<li key={p} className="flex items-center gap-2 text-sm text-mist">
													<Check className="h-4 w-4 text-teal" strokeWidth={2} />
													{p}
												</li>
											))}
										</ul>
									</div>
									<Link
										to="/contact"
										className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-full border border-border bg-navy-2/40 px-5 py-2.5 text-sm font-medium text-mist transition-colors hover:border-teal/60 hover:text-teal active:scale-[0.98]"
									>
										Enquire
										<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
									</Link>
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
									Not sure which service you need?
								</h2>
								<p className="mt-3 max-w-lg text-[15px] leading-relaxed text-mist-dim">
									Tell us where the programme stands. We'll map it to the right discipline —
									or tell you honestly if you don't need us yet.
								</p>
							</div>
							<Link
								to="/contact"
								className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Talk to a consultant
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
