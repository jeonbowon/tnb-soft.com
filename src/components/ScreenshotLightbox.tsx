"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Shot = { src: string; alt: string };

export default function ScreenshotLightbox({
  items,
  columnsClassName = "md:grid-cols-2",
}: {
  items: Shot[];
  columnsClassName?: string;
}) {
  const shots = useMemo(() => items ?? [], [items]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = shots[index];

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((v) => Math.min(v + 1, shots.length - 1));
      if (e.key === "ArrowLeft") setIndex((v) => Math.max(v - 1, 0));
    };

    document.addEventListener("keydown", onKeyDown);

    // 스크롤 잠금
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, shots.length]);

  if (!shots.length) return null;

  return (
    <>
      {/* 썸네일 그리드 */}
      <div className={`grid gap-4 ${columnsClassName}`}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left"
            aria-label={`스크린샷 크게 보기: ${s.alt}`}
          >
            <div className="relative aspect-[16/9] w-full bg-zinc-100">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-3 text-xs text-zinc-600">{s.alt}</div>
          </button>
        ))}
      </div>

      {/* 라이트박스 */}
      {open && current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onMouseDown={(e) => {
            // 배경 클릭 시 닫기
            if (e.target === e.currentTarget) setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3">
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-zinc-900">{current.alt}</div>
                <div className="text-xs text-zinc-500">
                  {index + 1} / {shots.length} (ESC로 닫기, ← → 이동)
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => setIndex((v) => Math.max(v - 1, 0))}
                  className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 disabled:opacity-40"
                  disabled={index === 0}
                >
                  이전
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((v) => Math.min(v + 1, shots.length - 1))}
                  className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 disabled:opacity-40"
                  disabled={index === shots.length - 1}
                >
                  다음
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white hover:bg-zinc-800"
                >
                  닫기
                </button>
              </div>
            </div>

            <div className="relative w-full bg-zinc-100" style={{ aspectRatio: "16 / 9" }}>
              <Image src={current.src} alt={current.alt} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
