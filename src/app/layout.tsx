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
      <body className="min-h-screen bg-white text-zinc-900">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">TNB SOFT</div>
                <div className="text-xs text-zinc-500">Technology and Beyond</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-5 md:flex">
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

            {/* 모바일에서는 메뉴 대신 아주 단순 버튼(추후 확장 가능) */}
            <div className="md:hidden text-sm text-zinc-500">Menu</div>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} TNB SOFT. All rights reserved.</div>
              <div className="flex gap-4">
                <a className="hover:text-zinc-900" href="/contact">Contact</a>
                <a className="hover:text-zinc-900" href="/blog">Blog</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
