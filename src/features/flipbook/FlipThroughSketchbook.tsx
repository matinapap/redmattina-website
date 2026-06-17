"use client";

import { forwardRef, useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import { sketchbookSpreads } from "@/data/sketchbook";
import styles from "./FlipThroughSketchbook.module.css";

type PageSide = "left" | "right";

type SketchbookPage = {
  alt: string;
  index: number;
  side: PageSide;
  spreadSrc: string;
};

const pageSides: PageSide[] = ["left", "right"];

const SketchbookPage = forwardRef<HTMLDivElement, { page: SketchbookPage }>(
  ({ page }, ref) => (
    <div
      ref={ref}
      className={[
        styles.page,
        page.side === "left" ? styles.leftPage : styles.rightPage,
      ].join(" ")}
      data-page-index={page.index}
      aria-label={page.alt}
    >
      <div
        className={styles.pageArtwork}
        style={{ backgroundImage: `url(${page.spreadSrc})` }}
      />
    </div>
  ),
);

SketchbookPage.displayName = "SketchbookPage";

export default function FlipThroughSketchbook() {
  const pages = useMemo(
    () =>
      sketchbookSpreads.flatMap((spread, spreadIndex) =>
        pageSides.map((side, sideIndex) => ({
          alt: `${spread.alt}, ${side} page`,
          index: spreadIndex * 2 + sideIndex,
          side,
          spreadSrc: spread.src,
        })),
      ),
    [],
  );

  return (
    <section className={styles.shell} aria-label="Digital sketchbook">
      <div className={styles.bookStage}>
        <div className={styles.bookShadow} aria-hidden="true" />
        <HTMLFlipBook
          className={styles.flipBook}
          style={{}}
          width={754}
          height={1124}
          size="stretch"
          minWidth={190}
          maxWidth={754}
          minHeight={284}
          maxHeight={1124}
          startPage={0}
          drawShadow
          flippingTime={1050}
          usePortrait={false}
          startZIndex={20}
          autoSize
          maxShadowOpacity={0.55}
          showCover={false}
          mobileScrollSupport
          clickEventForward
          useMouseEvents
          swipeDistance={24}
          showPageCorners
          disableFlipByClick={false}
        >
          {pages.map((page) => (
            <SketchbookPage key={page.index} page={page} />
          ))}
        </HTMLFlipBook>
      </div>
    </section>
  );
}
