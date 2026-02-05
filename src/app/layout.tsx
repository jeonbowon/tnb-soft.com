import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TNB SOFT",
  description: "Technology and Beyond - 장비 소프트웨어/자동화 개발",
};

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/projects", label: "프로젝트" },
  { href: "/blog", label: "기술블로그" },
  { href: "/contact", label: "문의" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased text-zinc-900">
        {/* Background layers (Light) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(900px_600px_at_100%_30%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(800px_600px_at_0%_60%,rgba(14,165,233,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f3f5fb]" />

          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.14) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.50) 55%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.50) 55%, transparent 78%)",
            }}
          />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl bg-white ring-1 ring-zinc-200 shadow-sm">
                <div className="absolute inset-[6px] rounded-lg bg-gradient-to-br from-sky-500/70 via-indigo-500/55 to-fuchsia-500/45" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">TNB SOFT</div>
                <div className="text-xs text-zinc-500">Technology and Beyond</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="md:hidden text-sm text-zinc-500">Menu</div>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-200/70 bg-white/40">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} TNB SOFT. All rights reserved.</div>
              <div className="flex gap-4">
                <a className="hover:text-zinc-900" href="/contact">
                  Contact
                </a>
                <a className="hover:text-zinc-900" href="/blog">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
