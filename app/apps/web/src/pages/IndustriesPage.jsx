import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const INDUSTRIES = [
	{
		n: '01',
		title: 'Manufacturing',
		desc: 'Discrete, batch and mixed-mode manufacturers running IFS for routing, BOM, shop-floor control and quality. We tune IFS to the reality of your floor — not the other way round.',
		cap: ['Shop-floor control', 'MRP & capacity planning', 'Quality & traceability', 'Costing'],
	},
	{
		n: '02',
		title: 'Aerospace & Defense',
		desc: 'Regulated A&D programmes where configuration control, serialised traceability and ITAR/EAR compliance are non-negotiable. IFS deployed to pass the audit, not just the demo.',
		cap: ['Configuration management', 'Serial & lot traceability', 'Compliance & export control', 'Programme accounting'],
	},
	{
		n: '03',
		title: 'Project-Based Engineering',
		desc: 'Engineer-to-order, EPC and contract manufacturers where every job is a project. IFS Projects, project accounting and resource planning wired to revenue recognition you can defend.',
		cap: ['Project & WBS management', 'Project accounting', 'Resource & capacity', 'Revenue recognition'],
	},
	{
		n: '04',
		title: 'Supply Chain & Logistics',
		desc: 'Distribution networks, 3PLs and freight operators running IFS for warehouse, transport and inventory. We connect WMS, TMS and demand planning into one governed flow.',
		cap: ['Warehouse management', 'Transport & freight', 'Inventory optimisation', 'Demand planning'],
	},
	{
		n: '05',
		title: 'Distribution',
		desc: 'Wholesale and multi-channel distributors who need IFS to handle high-volume order-to-cash, pricing and replenishment without the spreadsheets that currently hold it together.',
		cap: ['Order-to-cash', 'Pricing & promotions', 'Replenishment', 'Multi-channel fulfilment'],
	},
];

export default function IndustriesPage() {
	return (
		<div>
			<Helmet>
				<title>Industries — Manufacturing, Aerospace, Engineering & Supply Chain | Ledgerline</title>
				<meta
					name="description"
					content="IFS ERP consulting for manufacturing, aerospace & defense, project-based engineering, supply chain & logistics and distribution."
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
						<div className="mb-5 text-sm font-medium text-teal">Industries</div>
						<h1 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-mist">
							Where IFS earns{' '}
							<span className="text-gradient">its keep.</span>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
							IFS is not a generic ledger. We deploy it in the asset-heavy, project-driven and
							regulated sectors where its depth is the whole point.
						</p>
					</Reveal>
				</div>
			</section>

			{/* ── Industries ───────────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<div className="grid gap-6 md:grid-cols-2">
						{INDUSTRIES.map((ind, i) => (
							<Reveal key={ind.title} delay={(i % 2) * 0.06}>
								<div className="group h-full rounded-3xl border border-border bg-navy-2/50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft-lg">
									<div className="flex items-center gap-4">
										<span className="font-display text-3xl font-semibold text-gradient">{ind.n}</span>
										<h2 className="font-display text-xl font-semibold text-mist md:text-2xl">
											{ind.title}
										</h2>
									</div>
									<p className="mt-4 text-[15px] leading-relaxed text-mist-dim">{ind.desc}</p>
									<div className="mt-6 flex flex-wrap gap-2">
										{ind.cap.map((c) => (
											<span
												key={c}
												className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted-foreground"
											>
												{c}
											</span>
										))}
									</div>
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
									Don't see your sector?
								</h2>
								<p className="mt-3 max-w-lg text-[15px] leading-relaxed text-mist-dim">
									IFS spans more than these. If your operation is asset-heavy or
									project-driven, we have probably been in something like it.
								</p>
							</div>
							<Link
								to="/contact"
								className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Ask about yours
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
