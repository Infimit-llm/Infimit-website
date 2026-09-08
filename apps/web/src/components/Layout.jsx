import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const LOGO = 'https://horizons-cdn.hostinger.com/c7e54e45-e605-4b0e-b912-b5ec9e387496/c246500ee99bbcc5783cd7b4b8c5e230.png';
export const NAV = [{
  label: 'Services',
  to: '/services'
}, {
  label: 'Industries',
  to: '/industries'
}, {
  label: 'Insights',
  to: '/insights'
}, {
  label: 'About us',
  to: '/about'
}, {
  label: 'Contact us',
  to: '/contact'
}];
export default function Layout() {
  const [open, setOpen] = useState(false);
  const {
    pathname
  } = useLocation();
  return <div className="min-h-screen bg-background text-foreground antialiased">
			{/* ── Header ──────────────────────────────────────────── */}
			<header className="relative z-50 border-b border-border bg-navy/80 backdrop-blur-xl">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 md:px-8">
					<Link to="/" className="flex items-center gap-6" aria-label="Ledgerline — IFS ERP consulting"><img src="https://horizons-cdn.hostinger.com/c7e54e45-e605-4b0e-b912-b5ec9e387496/c246500ee99bbcc5783cd7b4b8c5e230.png" alt="Ledgerline" className="h-40 w-40 object-contain" /></Link>

					<nav className="hidden md:flex items-center gap-16">
						{NAV.map(item => {
            const active = pathname === item.to;
            return <Link key={item.label} to={item.to} className={`text-lg transition-colors hover:text-mist ${active ? 'text-teal' : 'text-mist-dim'}`}>
									{item.label}
								</Link>;
          })}
					</nav>

					<div className="hidden md:block">
						<Link to="/contact" className="inline-flex min-h-[66px] items-center gap-3 rounded-full bg-brand-gradient px-[30px] py-[15px] text-lg font-medium text-navy shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]">
							Book a call
							<ArrowUpRight className="h-6 w-6" strokeWidth={2} />
						</Link>
					</div>

					<button type="button" onClick={() => setOpen(v => !v)} className="inline-flex h-20 w-20 items-center justify-center rounded-lg border-2 border-border text-mist md:hidden" aria-label="Toggle menu" aria-expanded={open}>
						{open ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
					</button>
				</div>

				{/* Mobile menu */}
				{open && <div className="border-t border-border bg-navy md:hidden">
						<nav className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8">
							{NAV.map(item => {
            const active = pathname === item.to;
            return <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className={`rounded-lg px-6 py-6 text-3xl transition-colors ${active ? 'bg-navy-2 text-teal' : 'text-mist-dim hover:text-mist'}`}>
						{item.label}
					</Link>;
          })}
							<Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-[13px] text-base font-semibold text-navy">
								Book a call
								<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
							</Link>
						</nav>
					</div>}
			</header>

			<main>
				<Outlet />
			</main>

			{/* ── Footer ───────────────────────────────────────────── */}
			<footer className="border-t border-border bg-navy">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
					<div>
						<div className="flex items-center gap-3">
							<img src={LOGO} alt="Ledgerline" className="h-9 w-9 object-contain" />
							<span className="font-display text-xl font-semibold tracking-tight text-mist"></span>
						</div>
						<p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
							Independent IFS ERP consulting — implementation, support, architecture and
							development. On-site worldwide; the shop floor is our favourite meeting room.
						</p>
					</div>
					<nav className="flex flex-wrap gap-x-8 gap-y-3">
						{NAV.map(item => <Link key={item.label} to={item.to} className="text-sm text-mist-dim transition-colors hover:text-teal">
								{item.label}
							</Link>)}
					</nav>
					<p className="text-xs text-muted-foreground">© 2026 Ledgerline Consulting LLC</p>
				</div>
			</footer>
		</div>;
}