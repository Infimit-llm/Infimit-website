import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Sparkles, Check } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';

const HERO_IMG = 'https://images.hostinger.com/6f878731-ef8e-40fe-b41d-3e6ee84205ad.png';
const WAREHOUSE_IMG = 'https://images.hostinger.com/f0016f7f-914c-4040-b6a0-d8cd0bc902c6.png';
const PLANNING_IMG = 'https://images.hostinger.com/b1a82073-fce1-4538-8749-1306a745e1ec.png';

const METRICS = [
	{ v: 140, suffix: '+', label: 'IFS implementations delivered' },
	{ v: 12, suffix: '', label: 'Countries served' },
	{ v: 98, suffix: '%', label: 'Go-lives on schedule' },
	{ v: 41, suffix: '', label: 'Consultants, zero salespeople' },
];

const SERVICES = [
	{
		title: 'IFS ERP Implementation',
		desc: 'Full-lifecycle IFS deployment from blueprint to go-live. Phased configuration, rehearsed cutovers and a cutover plan owned end-to-end by senior IFS consultants.',
	},
	{
		title: 'Support',
		desc: 'Post-go-live hypercare, managed support and release management — with a named consultant who knows your IFS environment and chart of accounts by heart.',
	},
	{
		title: 'Solution Architecture',
		desc: 'IFS solution design and integration architecture that fits your operating model — platform strategy, data model and interface inventory before a single component is built.',
	},
	{
		title: 'Development',
		desc: 'Custom IFS development, extensions and reporting built inside vendor guardrails — upgrade-safe, documented and owned by you from day one.',
	},
];

const INDUSTRIES = [
	'Manufacturing',
	'Aerospace & Defense',
	'Project-Based Engineering',
	'Supply Chain & Logistics',
	'Distribution',
];

export default function HomePage() {
	return (
		<div>
			<Helmet>
				<title>Ledgerline — IFS ERP Consulting & Implementation</title>
				<meta
					name="description"
					content="Ledgerline is an independent IFS ERP consulting firm. Implementation, support, solution architecture and development for manufacturing, aerospace, engineering and supply chain."
				/>
			</Helmet>

			{/* ── Hero ─────────────────────────────────────────────── */}
			<section id="top" className="relative overflow-hidden">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
					style={{ background: 'radial-gradient(circle, hsl(var(--teal) / 0.5), transparent 65%)' }}
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -left-24 top-40 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
					style={{ background: 'radial-gradient(circle, hsl(var(--blue) / 0.5), transparent 65%)' }}
				/>

				<div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
					<Reveal>
						<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-navy-2/60 px-4 py-1.5 text-xs font-medium tracking-wide text-mist-dim">
							<Sparkles className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
							Transforming Operations. Delivering Value.
						</div>
					</Reveal>

					<Reveal delay={0.05}>
						<h1 className="font-display max-w-4xl text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-mist">
							Technology Solutions Built Around
							<br />
							<span className="text-gradient">Your Business</span>
						</h1>
					</Reveal>

					<Reveal delay={0.1}>
						<p className="mt-7 max-w-xl text-lg leading-relaxed text-mist-dim">
							Infimit Solutions combines industry knowledge, end-user understanding and
							technology expertise to deliver practical solutions that improve operations,
							strengthen user experience and create lasting business value.
						</p>
					</Reveal>

					<Reveal delay={0.15}>
						<div className="mt-10 flex flex-wrap items-center gap-4">
							<Link
								to="/contact"
								className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Book a consultation
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
							<Link
								to="/services"
								className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border bg-navy-2/40 px-7 py-3.5 text-sm font-medium text-mist transition-colors hover:border-teal/60 hover:text-teal active:scale-[0.98]"
							>
								Browse services
								<ArrowDown className="h-4 w-4" strokeWidth={2} />
							</Link>
						</div>
					</Reveal>

					<Reveal delay={0.2}>
						<div className="mt-16 overflow-hidden rounded-3xl border border-border shadow-soft-lg md:mt-20">
							<img
								src={HERO_IMG}
								alt="Two Ledgerline consultants reviewing IFS supply-chain dashboards in an operations control room"
								className="h-64 w-full object-cover object-center md:h-[30rem]"
								loading="eager"
							/>
						</div>
						<p className="mt-4 text-xs tracking-wide text-muted-foreground">
							Fig. 01 — Operations review, Chicago · weekly steering, week 14 of 22
						</p>
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

			{/* ── Services overview ────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<Reveal>
						<div className="mb-16 max-w-2xl">
							<div className="mb-4 text-sm font-medium text-teal">Services</div>
							<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-mist md:text-5xl">
								Four disciplines, one accountable team
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-mist-dim">
								From the first workshop to year-five support — delivered by the same senior
								IFS consultants.
							</p>
						</div>
					</Reveal>

					<div className="grid gap-6 md:grid-cols-2">
						{SERVICES.map((s, i) => (
							<Reveal key={s.title} delay={(i % 2) * 0.06}>
								<div className="group h-full rounded-2xl border border-border bg-navy-2/50 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft-lg">
									<div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient-soft font-display text-sm font-semibold text-teal">
										{String(i + 1).padStart(2, '0')}
									</div>
									<h3 className="font-display text-lg font-semibold leading-snug text-mist">
										{s.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-mist-dim">{s.desc}</p>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.1}>
						<Link
							to="/services"
							className="mt-10 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border bg-navy-2/40 px-7 py-3.5 text-sm font-medium text-mist transition-colors hover:border-teal/60 hover:text-teal active:scale-[0.98]"
						>
							Explore all services
							<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
						</Link>
					</Reveal>
				</div>
			</section>

			{/* ── Industries overview ──────────────────────────────── */}
			<section className="border-y border-border bg-navy-2/30">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<div className="grid gap-12 md:grid-cols-2 md:gap-16">
						<Reveal className="relative">
							<div className="md:sticky md:top-28 space-y-6">
								<div className="overflow-hidden rounded-3xl border border-border shadow-soft-lg">
									<img
										src={WAREHOUSE_IMG}
										alt="Warehouse floor of a Ledgerline distribution client during a process walk"
										className="h-72 w-full object-cover md:h-[24rem]"
										loading="lazy"
									/>
								</div>
								<p className="text-xs tracking-wide text-muted-foreground">
									Fig. 02 — Process walk, Rotterdam DC
								</p>
							</div>
						</Reveal>

						<div>
							<Reveal>
								<div className="mb-10 max-w-2xl">
									<div className="mb-4 text-sm font-medium text-teal">Industries</div>
									<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-mist md:text-5xl">
										Built for asset-heavy, project-driven operations
									</h2>
									<p className="mt-4 text-lg leading-relaxed text-mist-dim">
										IFS is not a generic ledger. We deploy it where it earns its keep —
										complex manufacturing, regulated aerospace and engineer-to-order.
									</p>
								</div>
							</Reveal>

							<ul className="space-y-3">
								{INDUSTRIES.map((ind, i) => (
									<Reveal key={ind} delay={i * 0.05}>
										<li className="flex items-center gap-3 rounded-xl border border-border bg-navy-2/50 px-5 py-4">
											<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient-soft">
												<Check className="h-4 w-4 text-teal" strokeWidth={2} />
											</span>
											<span className="text-[15px] text-mist">{ind}</span>
										</li>
									</Reveal>
								))}
							</ul>

							<Reveal delay={0.1}>
								<Link
									to="/industries"
									className="mt-10 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border bg-navy-2/40 px-7 py-3.5 text-sm font-medium text-mist transition-colors hover:border-teal/60 hover:text-teal active:scale-[0.98]"
								>
									See industry detail
									<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
								</Link>
							</Reveal>
						</div>
					</div>
				</div>
			</section>

			{/* ── Approach strip ───────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<div className="grid gap-12 md:grid-cols-2 md:gap-16">
						<Reveal>
							<div>
								<div className="mb-4 text-sm font-medium text-teal">Approach</div>
								<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-mist md:text-5xl">
									Four phases, no theatre
								</h2>
								<p className="mt-4 text-lg leading-relaxed text-mist-dim">
									The same senior people from diagnosis to drive — rehearsed cutovers,
									measured adoption, no surprises at go-live.
								</p>
								<div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
									<img
										src={PLANNING_IMG}
										alt="IFS process flow diagrams reviewed during a blueprint session"
										className="h-48 w-full object-cover"
										loading="lazy"
									/>
								</div>
								<p className="mt-3 text-xs tracking-wide text-muted-foreground">
									Fig. 03 — Blueprint session, Frankfurt
								</p>
							</div>
						</Reveal>

						<div className="space-y-5">
							{[
								{ n: '01', t: 'Diagnose', d: 'Two weeks inside your operation. We shadow planners, walk the shop floor and read the general ledger before we write a single recommendation.' },
								{ n: '02', t: 'Design', d: 'A blueprint your team signs with full knowledge — process maps, IFS data model, integration inventory and a budget with no asterisks.' },
								{ n: '03', t: 'Deploy', d: 'Phased configuration and migration with rehearsed cutovers. Every go-live has a rollback plan; none has ever needed one.' },
								{ n: '04', t: 'Drive', d: 'Adoption is the project. We train super-users, measure usage, and stay until IFS is simply how the company works.' },
							].map((step, i) => (
								<Reveal key={step.n} delay={i * 0.06}>
									<div className="rounded-2xl border border-border bg-navy-2/50 p-7 shadow-soft transition-colors hover:border-teal/40">
										<div className="flex items-center gap-4">
											<span className="font-display text-2xl font-semibold text-gradient">{step.n}</span>
											<h3 className="font-display text-xl font-semibold text-mist">{step.t}</h3>
										</div>
										<p className="mt-4 text-[15px] leading-relaxed text-mist-dim">{step.d}</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── CTA ──────────────────────────────────────────────── */}
			<section className="border-t border-border bg-navy-2/30">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<Reveal>
						<div className="overflow-hidden rounded-3xl border border-border bg-brand-gradient-soft p-10 text-center shadow-soft md:p-16">
							<h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-mist md:text-5xl">
								Your next IFS programme should be the last one you{' '}
								<span className="text-gradient">rescue.</span>
							</h2>
							<p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-mist-dim">
								Tell us where it hurts — a stalled implementation, an architecture you don't
								trust, or a go-live nobody wants to own. We'll tell you plainly whether we
								can help.
							</p>
							<Link
								to="/contact"
								className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Start a conversation
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
