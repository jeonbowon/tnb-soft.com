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
      <body className="min-h-screen bg-[#101225] text-zinc-100 antialiased">
        {/* Background layers */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* base: 완전 블랙 제거, 남보라/네이비 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#141733] to-[#101225]" />

          {/* glow: 보라가 죽지 않게 명도 살린 조명 */}
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/28 via-fuchsia-500/16 to-indigo-500/14 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-fuchsia-500/14 via-violet-500/12 to-indigo-500/12 blur-3xl" />

          {/* grid: 너무 강하면 지저분해지고, 너무 약하면 존재감이 없음 */}
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.40) 55%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.40) 55%, transparent 78%)",
            }}
          />

          {/* vignette: 살짝만 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101225]/65 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 ring-1 ring-white/10">
                <div className="absolute inset-[6px] rounded-lg bg-gradient-to-br from-sky-400/70 via-indigo-400/50 to-cyan-300/40 blur-[0px]" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">TNB SOFT</div>
                <div className="text-xs text-zinc-400">Technology and Beyond</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="md:hidden text-sm text-zinc-400">Menu</div>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} TNB SOFT. All rights reserved.</div>
              <div className="flex gap-4">
                <a className="hover:text-white" href="/contact">
                  Contact
                </a>
                <a className="hover:text-white" href="/blog">
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
