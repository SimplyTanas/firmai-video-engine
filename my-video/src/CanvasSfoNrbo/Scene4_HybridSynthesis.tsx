import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CanvasBackground } from "./CanvasBackground";

export const Scene4_HybridSynthesis: React.FC<{ durationInFrames: number }> = ({
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

  // Progressive rendering of the convergence curve
  const graphProgress = interpolate(frame, [30, durationInFrames - 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Adaptive Switch Ratio (Exploration -> Exploitation)
  const explorationRatio = Math.max(0, 1 - graphProgress * 1.3);
  const exploitationRatio = Math.min(1, graphProgress * 1.3);

  // Convergence graph points generator
  // Graph domain: X from 80 to 600 (width 520), Y from 80 to 480 (height 400)
  const steps = 60;
  const currentStepCount = Math.floor(steps * graphProgress);

  // Curve 1: Genetic Algorithm (GA) - slow, plateaus at ~10^-1
  const gaPoints = Array.from({ length: currentStepCount + 1 }).map((_, i) => {
    const x = 80 + (i / steps) * 520;
    const progress = i / steps;
    // Log scale simulated drop from y=110 to y=260
    const y = 110 + 150 * (1 - Math.exp(-progress * 3.5));
    return `${x},${y}`;
  });

  // Curve 2: Particle Swarm Optimization (PSO) - drops to ~10^-3
  const psoPoints = Array.from({ length: currentStepCount + 1 }).map((_, i) => {
    const x = 80 + (i / steps) * 520;
    const progress = i / steps;
    const y = 110 + 220 * (1 - Math.exp(-progress * 4.5));
    return `${x},${y}`;
  });

  // Curve 3: Standard SFO - drops to ~10^-5
  const sfoPoints = Array.from({ length: currentStepCount + 1 }).map((_, i) => {
    const x = 80 + (i / steps) * 520;
    const progress = i / steps;
    const y = 110 + 280 * (1 - Math.exp(-progress * 5.5));
    return `${x},${y}`;
  });

  // Curve 4: Hybrid SFO-NRBO - drops drastically to 10^-12 (y = 460)
  const hybridPoints = Array.from({ length: currentStepCount + 1 }).map((_, i) => {
    const x = 80 + (i / steps) * 520;
    const progress = i / steps;
    // Phase 1 (SFO): progress 0 -> 0.4: drops quickly
    // Phase 2 (NRBO): progress 0.4 -> 1.0: quadratic plunge
    let y = 110;
    if (progress <= 0.4) {
      y = 110 + 200 * (progress / 0.4);
    } else {
      const p2 = (progress - 0.4) / 0.6;
      y = 310 + 150 * (1 - Math.exp(-p2 * 6));
    }
    return `${x},${y}`;
  });

  // Best fitness display
  const currentBestCost = Math.max(
    1e-12,
    Math.pow(10, interpolate(graphProgress, [0, 0.4, 1], [2, -4, -12]))
  ).toExponential(2);

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>
      <CanvasBackground currentStage="HYBRID // SFO + NRBO SYNTHESIS" stageNumber="04" />

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
        {/* Left Column: Architectural Analysis */}
        <div style={{ flex: "0 0 540px", zIndex: 10 }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(255, 215, 0, 0.12)",
              border: "1px solid #FFD700",
              color: "#FFD700",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              marginBottom: 16,
              transform: `translateX(${interpolate(enter, [0, 1], [-40, 0])}px)`,
            }}
          >
            ACT 04 // CƠ CHẾ LAI KẾT HỢP ĐỘT PHÁ
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
            HIỆP ĐỒNG CHIẾN LƯỢC <br />
            <span style={{ color: "#00F0FF" }}>SFO</span> × <span style={{ color: "#FF3366" }}>NRBO</span> = <span style={{ color: "#FFD700" }}>TỐI ƯU</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#94A3B8",
              marginBottom: 24,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Giải quyết triệt để sự đánh đổi nan giải: SFO đảm nhiệm quét diện rộng toàn cục, ngăn chặn kẹt bẫy cực trị. NRBO tiếp quản pha tinh chỉnh vi mô, thúc đẩy tốc độ hội tụ hàm mục tiêu tiệm cận sai số 0.
          </p>

          {/* Dynamic Balance Progress Bar */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid #1E293B",
              padding: "16px 20px",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "#00F0FF", fontWeight: 700, letterSpacing: 1 }}>
                SFO EXPLORATION: {(explorationRatio * 100).toFixed(0)}%
              </span>
              <span style={{ fontSize: 12, color: "#FF3366", fontWeight: 700, letterSpacing: 1 }}>
                NRBO EXPLOITATION: {(exploitationRatio * 100).toFixed(0)}%
              </span>
            </div>
            {/* Dual color split bar */}
            <div style={{ height: 8, background: "#1E293B", display: "flex", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: `${explorationRatio * 100}%`, background: "#00F0FF", transition: "width 0.1s" }} />
              <div style={{ width: `${exploitationRatio * 100}%`, background: "#FF3366", transition: "width 0.1s" }} />
            </div>
            <div style={{ fontSize: 11, color: "#64748B", marginTop: 8, textAlign: "center" }}>
              Adaptive Balancing Operator: W(t) = 1 - (t / T_max)^β
            </div>
          </div>

          {/* Real-time Benchmark Scorecard */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div
              style={{
                padding: "14px 18px",
                background: "rgba(255, 215, 0, 0.05)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
              }}
            >
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 1.5 }}>
                HYBRID FITNESS (f_best)
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFD700",
                  marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {currentBestCost}
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                Vượt trội 10⁶ lần chuẩn PSO
              </div>
            </div>

            <div
              style={{
                padding: "14px 18px",
                background: "rgba(0, 240, 255, 0.05)",
                border: "1px solid rgba(0, 240, 255, 0.25)",
              }}
            >
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 1.5 }}>
                STABILITY / SUCCESS
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#00F0FF",
                  marginTop: 4,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                99.8% <span style={{ fontSize: 14, color: "#94A3B8" }}>rate</span>
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>
                100 lần thử độc lập
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Convergence Graph Canvas */}
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
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 215, 0, 0.05)",
            }}
          >
            <defs>
              <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Title on Graph */}
            <text x="80" y="55" fill="#94A3B8" fontSize="13" fontWeight="700" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5">
              CONVERGENCE CURVES // BÀI TOÁN BENCHMARK F1 (SPHERE/RASTRIGIN)
            </text>

            {/* Horizontal Grid lines (Orders of Magnitude 10^2 -> 10^-12) */}
            {[
              { val: "10²", y: 110 },
              { val: "10⁰", y: 170 },
              { val: "10⁻³", y: 240 },
              { val: "10⁻⁶", y: 310 },
              { val: "10⁻⁹", y: 390 },
              { val: "10⁻¹²", y: 460 },
            ].map((g, idx) => (
              <g key={idx}>
                <line x1="70" y1={g.y} x2="600" y2={g.y} stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                <text x="25" y={g.y + 4} fill="#64748B" fontSize="11" fontFamily="'JetBrains Mono', monospace">
                  {g.val}
                </text>
              </g>
            ))}

            {/* Vertical Iteration Milestones */}
            {[0, 200, 400, 600, 800, 1000].map((iter, idx) => {
              const x = 80 + idx * 104;
              return (
                <g key={idx}>
                  <line x1={x} y1="80" x2={x} y2="470" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 4" />
                  <text x={x - 12} y="495" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">
                    {iter}
                  </text>
                </g>
              );
            })}
            <text x="310" y="525" fill="#94A3B8" fontSize="11" fontFamily="'JetBrains Mono', monospace">
              ITERATIONS (t)
            </text>

            {/* Phase Switch Boundary Vertical Line */}
            <line x1="288" y1="80" x2="288" y2="470" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="5 5" />
            <rect x="238" y="85" width="100" height="20" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="0.8" />
            <text x="245" y="99" fill="#F59E0B" fontSize="10" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
              SWITCH PHASE
            </text>

            {/* Curves */}
            {/* GA */}
            {gaPoints.length > 1 && (
              <path d={`M ${gaPoints.join(" L ")}`} fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 2" />
            )}
            {/* PSO */}
            {psoPoints.length > 1 && (
              <path d={`M ${psoPoints.join(" L ")}`} fill="none" stroke="#A855F7" strokeWidth="2" />
            )}
            {/* SFO Standard */}
            {sfoPoints.length > 1 && (
              <path d={`M ${sfoPoints.join(" L ")}`} fill="none" stroke="#0284C7" strokeWidth="2.5" />
            )}
            {/* SFO-NRBO Hybrid */}
            {hybridPoints.length > 1 && (
              <path
                d={`M ${hybridPoints.join(" L ")}`}
                fill="none"
                stroke="#FFD700"
                strokeWidth="3.5"
                filter="url(#glowGold)"
              />
            )}

            {/* Graph Legend Panel */}
            <g transform="translate(420, 120)">
              <rect x="0" y="0" width="165" height="115" fill="rgba(2, 6, 23, 0.9)" stroke="#1E293B" strokeWidth="1" />
              
              <line x1="12" y1="20" x2="35" y2="20" stroke="#FFD700" strokeWidth="3" />
              <text x="42" y="24" fill="#FFD700" fontSize="11" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
                SFO-NRBO (Lai)
              </text>

              <line x1="12" y1="45" x2="35" y2="45" stroke="#0284C7" strokeWidth="2" />
              <text x="42" y="49" fill="#0284C7" fontSize="11" fontFamily="'JetBrains Mono', monospace">
                Standard SFO
              </text>

              <line x1="12" y1="70" x2="35" y2="70" stroke="#A855F7" strokeWidth="2" />
              <text x="42" y="74" fill="#A855F7" fontSize="11" fontFamily="'JetBrains Mono', monospace">
                PSO Alg
              </text>

              <line x1="12" y1="95" x2="35" y2="95" stroke="#64748B" strokeWidth="2" strokeDasharray="4 2" />
              <text x="42" y="99" fill="#64748B" fontSize="11" fontFamily="'JetBrains Mono', monospace">
                Genetic Alg (GA)
              </text>
            </g>

            {/* Corner Bracket Accents on Radar Viewport */}
            <path d="M 12 30 L 12 12 L 30 12" fill="none" stroke="#FFD700" strokeWidth="2" />
            <path d="M 628 30 L 628 12 L 610 12" fill="none" stroke="#FFD700" strokeWidth="2" />
            <path d="M 12 530 L 12 548 L 30 548" fill="none" stroke="#FFD700" strokeWidth="2" />
            <path d="M 628 530 L 628 548 L 610 548" fill="none" stroke="#FFD700" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
