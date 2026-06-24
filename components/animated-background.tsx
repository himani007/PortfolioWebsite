"use client"

// A block-puzzle game playing quietly in the background — pieces drop in,
// rest, and clear, over and over. It symbolises creativity (building with
// blocks) and stays light/translucent so it never competes with the content.
// Full Tailwind class strings are written literally so they aren't purged.
type Piece = {
  top: string
  left: string
  cell: number // px size of each block
  color: string // literal Tailwind bg classes
  shape: number[][] // 1 = filled block, 0 = empty
  duration: number // seconds for one place/clear cycle
  delay: number
}

// Exact candy colours from the preview. Used as semi-transparent rgba so they
// stay light/translucent and read the same in light and dark mode.
const PURPLE = "rgba(168, 85, 247, 0.38)"
const BLUE = "rgba(56, 158, 245, 0.38)"
const GREEN = "rgba(132, 204, 30, 0.42)"
const AMBER = "rgba(245, 176, 40, 0.46)"
const PINK = "rgba(244, 80, 110, 0.38)"

// Shapes mirror the classic block-puzzle pieces (squares, lines, L's, T's).
const pieces: Piece[] = [
  { top: "6%", left: "4%", cell: 26, color: PURPLE, shape: [[1, 1], [1, 1]], duration: 11, delay: 0 },
  { top: "9%", left: "22%", cell: 24, color: BLUE, shape: [[1], [1], [1]], duration: 9, delay: 2 },
  { top: "14%", left: "83%", cell: 26, color: GREEN, shape: [[1, 1, 1]], duration: 12, delay: 1 },
  { top: "30%", left: "9%", cell: 24, color: GREEN, shape: [[1, 1, 1], [1, 1, 1]], duration: 13, delay: 3.5 },
  { top: "33%", left: "31%", cell: 26, color: AMBER, shape: [[1, 0], [1, 1]], duration: 10, delay: 5 },
  { top: "40%", left: "71%", cell: 24, color: PINK, shape: [[1, 1, 1], [0, 1, 0]], duration: 11, delay: 2.5 },
  { top: "52%", left: "88%", cell: 26, color: BLUE, shape: [[1, 1], [0, 1]], duration: 12, delay: 4 },
  { top: "60%", left: "5%", cell: 24, color: PURPLE, shape: [[1, 1], [1, 1]], duration: 10, delay: 1.5 },
  { top: "61%", left: "45%", cell: 26, color: PINK, shape: [[0, 1], [0, 1], [1, 1]], duration: 13, delay: 6 },
  { top: "73%", left: "25%", cell: 24, color: AMBER, shape: [[1, 1, 1]], duration: 9, delay: 3 },
  { top: "78%", left: "64%", cell: 26, color: PURPLE, shape: [[1, 1, 1, 1, 1]], duration: 14, delay: 5.5 },
  { top: "82%", left: "89%", cell: 24, color: GREEN, shape: [[1, 1, 1], [1, 1, 1]], duration: 12, delay: 2 },
  { top: "23%", left: "55%", cell: 22, color: PINK, shape: [[1, 1]], duration: 8, delay: 7 },
  { top: "47%", left: "19%", cell: 22, color: BLUE, shape: [[1], [1], [1]], duration: 11, delay: 6.5 },
]

const blockShadow =
  "inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint puzzle-board grid, faded out toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      {pieces.map((piece, i) => (
        <div
          key={i}
          className="block-piece absolute"
          style={{
            top: piece.top,
            left: piece.left,
            display: "grid",
            gridTemplateColumns: `repeat(${piece.shape[0].length}, ${piece.cell}px)`,
            gap: "5px",
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {piece.shape.flatMap((row, r) =>
            row.map((filled, c) =>
              filled ? (
                <div
                  key={`${r}-${c}`}
                  className="rounded-[24%]"
                  style={{
                    width: piece.cell,
                    height: piece.cell,
                    background: piece.color,
                    boxShadow: blockShadow,
                  }}
                />
              ) : (
                <div
                  key={`${r}-${c}`}
                  style={{ width: piece.cell, height: piece.cell }}
                />
              )
            )
          )}
        </div>
      ))}
    </div>
  )
}
