// WaveDivider.tsx

type Props = {
  topColor: string;
  bottomColor: string;
  variant?: 1 | 2 | 3;
  flip?: boolean;
};

export default function WaveDivider({
  topColor,
  bottomColor,
  variant = 1,
  flip = false,
}: Props) {
  // Different wave shapes to choose from
  const waveShapes = {
    1: "M0,160 Q360,320 720,160 Q1080,0 1440,120 L1440,0 L0,0 Z",
    2: "M0,120 Q400,340 800,140 Q1200,0 1440,160 L1440,0 L0,0 Z",
    3: "M0,140 Q320,320 700,120 Q1080,0 1440,140 L1440,0 L0,0 Z",
  };

  return (
    <div style={{ marginTop: -1, marginBottom: -1 }}>
      {/* SVG container */}
      <svg
        viewBox="0 0 1440 340"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: 180,
          display: "block",
          transform: flip ? "scaleY(-1)" : "none",
        }}
      >
        {/* Bottom section color */}
        <rect width="1440" height="340" fill={bottomColor} />

        {/* Wave shape */}
        <path d={waveShapes[variant]} fill={topColor} />
      </svg>
    </div>
  );
}
