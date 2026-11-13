import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CanvasBackground } from "./CanvasBackground";

export const Scene3_NrboNewton: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 14 } });
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp" }
  );

  // Iterative progression from x0 -> x1 -> x2 -> x*
  const iterationProgress = interpolate(frame, [30, durationInFrames - 40], [0, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Target convex curve: f(x) = (x - 320)^2 / 200 + 120
  // Function points for SVG path
  const curvePoints = Array.from({ length: 65 }).map((_, i) => {
    const x = 50 + i * 8.5; // 50 to 594
    const dx = (x - 320) / 100;
    const y = 430 - (280 - dx * dx * 75); // Convex bowl
    return `${x},${Math.min(500, Math.max(80, y))}`;
  });
  const pathD = `M ${curvePoints.join(" L ")}`;

  // Simulated Newton-Raphson step values
  // Step 0: x = 110 (far)
  // Step 1: x = 210
  // Step 2: x = 285
  // Step 3: x = 320 (exact minimum)
  const currentX = interpolate(
    iterationProgress,
    [0, 1, 2, 3],
    [110, 215, 290, 320],
    { extrapolateRight: "clamp" }
  );
  const dx = (currentX - 320) / 100;
  const currentY = 430 - (280 - dx * dx * 75);

  // Derivative slope f'(x) = 2 * (x - 320) * 0.75
  const slope = (currentX - 320) * 0.015;
  const tangentX1 = currentX - 100;
  const tangentY1 = currentY - slope * 100;
  const tangentX2 = currentX + 100;
  const tangentY2 = currentY + slope * 100;

  // Real-time error metric
  const residualError = Math.max(0.000001, Math.abs(currentX - 320) * 0.05).toExponential(3);

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <CanvasBackground currentStage="NRBO // GRADIENT & CURVATURE" stageNumber="03" />

      {/* Main Container */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 100,
          right: 80,
          bottom: 70,
          display: "flex",
          gap: 50,
          alignItems: "center",
        }}
      >
        {/* Left Column: Typographic & Formulation Core */}
        <div style={{ flex: "0 0 540px", zIndex: 10 }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(255, 51, 102, 0.12)",
              border: "1px solid #FF3366",
              color: "#FF3366",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              marginBottom: 16,
              transform: `translateX(${interpolate(enter, [0, 1], [-40, 0])}px)`,
            }}
          >
            ACT 03 // NEWTON-RAPHSON OPTIMIZER (NRBO)
          </div>

          <h1
            style={{
              fontSize: 54,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            KHAI THÁC CỤC BỘ <br />
            <span style={{ color: "#FF3366" }}>HỘI TỤ BẬC HAI</span> SIÊU TỐC
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#94A3B8",
              marginBottom: 28,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Sử dụng xấp xỉ vi phân bậc nhất <em style={{ color: "#FF3366" }}>f'(x)</em> và ma trận độ cong Hessian bậc hai <em style={{ color: "#F59E0B" }}>f''(x)</em>. NRBO triệt tiêu dao động dư thừa, ép nghiệm hội tụ về đáy thung lũng với tốc độ hàm mũ.
          </p>

          {/* Mathematical Newton-Raphson Equation */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid #1E293B",
              borderLeft: "4px solid #FF3366",
              padding: "18px 22px",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#64748B",
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              CÔNG THỨC TRUY HỒI NEWTON-RAPHSON
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#FFFFFF",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              x<sub style={{ fontSize: 13 }}>n+1</sub> = x<sub style={{ fontSize: 13 }}>n</sub> - [∇²f(x<sub style={{ fontSize: 13 }}>n</sub>)]<sup style={{ fontSize: 12 }}>-1</sup> · ∇f(x<sub style={{ fontSize: 13 }}>n</sub>)
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#F59E0B",
                fontFamily: "'JetBrains Mono', monospace",
                marginTop: 6,
              }}
            >
              NRBO Step: Δx = - f'(x) / f''(x) + δ<sub style={{ fontSize: 10 }}>perturb</sub>
            </div>
          </div>

          {/* Telemetry telemetry boxes */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div
              style={{
                padding: "14px 18px",
                background: "rgba(255, 51, 102, 0.05)",
                border: "1px solid rgba(255, 51, 102, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 1.5 }}>
                RESIDUAL ERROR |ε|
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FF3366",
                  marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {residualError}
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                Độ chính xác tiệm cận tuyệt đối
              </div>
            </div>

            <div
              style={{
                padding: "14px 18px",
                background: "rgba(245, 158, 11, 0.05)",
                border: "1px solid rgba(245, 158, 11, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 1.5 }}>
                CONVERGENCE ORDER
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#F59E0B",
                  marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                O(n²) <span style={{ fontSize: 14, color: "#94A3B8" }}>Quadratic</span>
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                Nhân đôi chữ số chính xác/bước
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tangent Calculus & Hessian Curvature Canvas */}
        <div
          style={{
            flex: 1,
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 640 560"
            style={{
              width: "100%",
              maxHeight: "560px",
              background: "rgba(4, 9, 20, 0.85)",
              border: "1px solid #1E293B",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 51, 102, 0.05)",
            }}
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF3366" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF3366" stopOpacity="0.0" />
              </linearGradient>

              <filter id="glowCrimson" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Coordinate Grid Lines */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`grid-x-${i}`}
                x1={60 + i * 65}
                y1="40"
                x2={60 + i * 65}
                y2="510"
                stroke="#1E293B"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={`grid-y-${i}`}
                x1="40"
                y1={60 + i * 60}
                x2="600"
                y2={60 + i * 60}
                stroke="#1E293B"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            ))}

            {/* Coordinate Axes */}
            <line x1="60" y1="460" x2="600" y2="460" stroke="#475569" strokeWidth="1.5" />
            <line x1="320" y1="40" x2="320" y2="480" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
            <text x="590" y="480" fill="#64748B" fontSize="12" fontFamily="'JetBrains Mono', monospace">X</text>
            <text x="328" y="55" fill="#64748B" fontSize="12" fontFamily="'JetBrains Mono', monospace">f(X)</text>

            {/* Global Minimum Target Point x* = 320, y = 430 */}
            <circle cx="320" cy="430" r="6" fill="#F59E0B" />
            <circle cx="320" cy="430" r="14" fill="none" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 3" />
            <text
              x="332"
              y="445"
              fill="#F59E0B"
              fontSize="12"
              fontWeight="700"
              fontFamily="'JetBrains Mono', monospace"
            >
              x* = 0.00 (GLOBAL OPTIMUM)
            </text>

            {/* Objective Function Convex Curve */}
            <path
              d={pathD}
              fill="none"
              stroke="#64748B"
              strokeWidth="2.5"
            />
            {/* Area fill under curve */}
            <path
              d={`${pathD} L 594 460 L 50 460 Z`}
              fill="url(#curveGradient)"
            />

            {/* Vertical Projection Drop Line from current point to X axis */}
            <line
              x1={currentX}
              y1={currentY}
              x2={currentX}
              y2="460"
              stroke="#FF3366"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Dynamic Tangent Line at x_n */}
            <line
              x1={tangentX1}
              y1={tangentY1}
              x2={tangentX2}
              y2={tangentY2}
              stroke="#F59E0B"
              strokeWidth="2.5"
              filter="url(#glowCrimson)"
            />

            {/* Current Search Agent Position Point x_n */}
            <g transform={`translate(${currentX}, ${currentY})`}>
              <circle cx="0" cy="0" r="7" fill="#FF3366" filter="url(#glowCrimson)" />
              <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            </g>

            {/* Tangent Slope Triangle Visualizer */}
            <polygon
              points={`${currentX},${currentY} ${currentX + 50},${currentY} ${currentX + 50},${currentY + slope * 50}`}
              fill="rgba(255, 51, 102, 0.2)"
              stroke="#FF3366"
              strokeWidth="1"
            />
            <text
              x={currentX + 56}
              y={currentY + 14}
              fill="#FF3366"
              fontSize="11"
              fontFamily="'JetBrains Mono', monospace"
            >
              ∇f(x)
            </text>

            {/* X-axis intercept indicator x_{n+1} */}
            <circle cx={currentX} cy="460" r="4" fill="#FF3366" />
            <text
              x={currentX - 16}
              y="485"
              fill="#FF3366"
              fontSize="12"
              fontWeight="700"
              fontFamily="'JetBrains Mono', monospace"
            >
              x<tspan fontSize="9" dy="2">n</tspan>
            </text>

            {/* Historical Iteration Trail Markers */}
            <circle cx="110" cy="460" r="3" fill="#475569" />
            <text x="105" y="480" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">x0</text>
            <circle cx="215" cy="460" r="3" fill="#475569" />
            <text x="210" y="480" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">x1</text>
            <circle cx="290" cy="460" r="3" fill="#475569" />
            <text x="285" y="480" fill="#475569" fontSize="10" fontFamily="'JetBrains Mono', monospace">x2</text>

            {/* Corner Bracket Accents on Radar Viewport */}
            <path d="M 12 30 L 12 12 L 30 12" fill="none" stroke="#FF3366" strokeWidth="2" />
            <path d="M 628 30 L 628 12 L 610 12" fill="none" stroke="#FF3366" strokeWidth="2" />
            <path d="M 12 530 L 12 548 L 30 548" fill="none" stroke="#FF3366" strokeWidth="2" />
            <path d="M 628 530 L 628 548 L 610 548" fill="none" stroke="#FF3366" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
