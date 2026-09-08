import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, ArrowUpRight, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';

const CONTACT_ROWS = [
	{ icon: Phone, label: 'Direct line', value: '+1 (312) 555-0148', href: 'tel:+919901912186' },
	{ icon: Mail, label: 'Email', value: 'hariprasad@infimit.com', href: 'mailto:hariprasad@infimit.com' },
	{ icon: MapPin, label: 'Offices', value: 'Bengaluru · Salem · Chennai', href: null },
];

export default function ContactPage() {
	const [sent, setSent] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<div>
			<Helmet>
				<title>Contact us — Talk to an IFS ERP Consultant | Ledgerline</title>
				<meta
					name="description"
					content="Talk to a senior IFS ERP consultant about implementation, support, architecture or development. Chicago, Rotterdam and Frankfurt."
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
						<div className="mb-5 text-sm font-medium text-teal">Contact us</div>
						<h1 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-mist">
							Tell us where it{' '}
							<span className="text-gradient">hurts.</span>
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
							A stalled implementation, an architecture you don't trust, or a go-live nobody
							wants to own. We'll tell you plainly whether we can help — and what it takes.
						</p>
					</Reveal>
				</div>
			</section>

			{/* ── Contact ──────────────────────────────────────────── */}
			<section className="relative">
				<div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
					<div className="overflow-hidden rounded-3xl border border-border bg-navy-2/60 shadow-soft-lg">
						<div className="grid md:grid-cols-[1.3fr_1fr]">
							{/* Form */}
							<div className="relative p-10 md:p-14">
								<div
									aria-hidden="true"
									className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
									style={{ background: 'radial-gradient(circle, hsl(var(--teal) / 0.6), transparent 65%)' }}
								/>
								<Reveal>
									<h2 className="font-display relative text-2xl font-semibold tracking-tight text-mist md:text-3xl">
										Send a message
									</h2>
									<p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist-dim">
										The first reply comes from a consultant, not an auto-responder.
									</p>

									{sent ? (
										<div className="mt-8 rounded-2xl border border-teal/40 bg-brand-gradient-soft p-6">
											<p className="font-display text-lg font-semibold text-mist">
												Thanks — message received.
											</p>
											<p className="mt-2 text-sm leading-relaxed text-mist-dim">
												A senior IFS consultant will be in touch within one business day. For
												anything urgent, call the direct line on the right.
											</p>
										</div>
									) : (
										<form onSubmit={onSubmit} className="mt-8 space-y-5">
											<div className="grid gap-5 sm:grid-cols-2">
												<div className="space-y-2">
													<label htmlFor="name" className="text-xs tracking-wide text-muted-foreground">
														Full name
													</label>
													<input
														id="name"
														required
														className="w-full rounded-xl border border-border bg-navy/60 px-4 py-3 text-sm text-mist placeholder:text-muted-foreground focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/40"
														placeholder="Jane Doe"
													/>
												</div>
												<div className="space-y-2">
													<label htmlFor="company" className="text-xs tracking-wide text-muted-foreground">
														Company
													</label>
													<input
														id="company"
														className="w-full rounded-xl border border-border bg-navy/60 px-4 py-3 text-sm text-mist placeholder:text-muted-foreground focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/40"
														placeholder="Acme Manufacturing"
													/>
												</div>
											</div>
											<div className="grid gap-5 sm:grid-cols-2">
												<div className="space-y-2">
													<label htmlFor="email" className="text-xs tracking-wide text-muted-foreground">
														Work email
													</label>
													<input
														id="email"
														type="email"
														required
														className="w-full rounded-xl border border-border bg-navy/60 px-4 py-3 text-sm text-mist placeholder:text-muted-foreground focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/40"
														placeholder="jane@acme.com"
													/>
												</div>
												<div className="space-y-2">
													<label htmlFor="topic" className="text-xs tracking-wide text-muted-foreground">
														What do you need?
													</label>
													<select
														id="topic"
														className="w-full rounded-xl border border-border bg-navy/60 px-4 py-3 text-sm text-mist focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/40"
														defaultValue="implementation"
													>
														<option value="implementation">IFS ERP Implementation</option>
														<option value="support">Support</option>
														<option value="architecture">Solution Architecture</option>
														<option value="development">Development</option>
														<option value="other">Not sure yet</option>
													</select>
												</div>
											</div>
											<div className="space-y-2">
												<label htmlFor="message" className="text-xs tracking-wide text-muted-foreground">
													Where does it hurt?
												</label>
												<textarea
													id="message"
													required
													rows={4}
													className="w-full rounded-xl border border-border bg-navy/60 px-4 py-3 text-sm text-mist placeholder:text-muted-foreground focus:border-teal/60 focus:outline-none focus:ring-1 focus:ring-teal/40"
													placeholder="A stalled rollout, a shortlist we don't trust, a go-live nobody owns…"
												/>
											</div>
											<button
												type="submit"
												className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
											>
												Send message
												<Send className="h-4 w-4" strokeWidth={2} />
											</button>
										</form>
									)}
								</Reveal>
							</div>

							{/* Details */}
							<div className="grid content-center gap-px border-t border-border bg-border md:border-l md:border-t-0">
								{CONTACT_ROWS.map((row) => (
									<div key={row.label} className="flex items-start gap-4 bg-navy-2/60 p-6 md:p-7">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft">
											<row.icon className="h-4 w-4 text-teal" strokeWidth={1.75} />
										</div>
										<div>
											<p className="text-[11px] tracking-wide text-muted-foreground">{row.label}</p>
											{row.href ? (
												<a
													href={row.href}
													className="mt-1 inline-flex items-center gap-1 text-base text-mist transition-colors hover:text-teal"
												>
													{row.value}
													<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
												</a>
											) : (
												<p className="mt-1 text-base text-mist">{row.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
