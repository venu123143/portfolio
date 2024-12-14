
import React from "react";

interface PaperCutProps {
  width?: number;
  height?: number;
  pieceCount?: number;
  colors?: string[];
  className?: string;
}
// colors = ["#000000", "#f3f4f6", "#03132D", "#b6b6b4"],

const FlexiblePaperCuts: React.FC<PaperCutProps> = ({
  width = 1200,
  height = 30,
  pieceCount = 20,
  colors = ["#1A1E1F", "#F8F7F3", "#03132D", "#b6b6b4"],
  className = ""
}) => {
  const cutWidth = width / pieceCount;

  // Generate smooth Bézier curves for each small paper cut
  const generateSmoothPath = (layerIndex: number, index: number) => {
    const amplitude = 15 + layerIndex * 8; // Wave height increases per layer
    const points = 5; // Number of wave curves
    const step = cutWidth / points;

    let path = `M0 ${amplitude / 2}`; // Start the path

    // Generate smooth curves with Bézier control points
    for (let i = 0; i <= points; i++) {
      const x = i * step;
      // Add some index-based randomness to make each piece unique
      const randomFactor = Math.sin(index + i) * 5;
      const y = (Math.sin(i + layerIndex) * amplitude) / 2 + amplitude / 2 + randomFactor;

      // Add a smooth curve using quadratic Bézier
      path += ` Q${x - step / 2} ${y + amplitude / 4}, ${x} ${y}`;
    }

    path += ` L${cutWidth} ${height} L0 ${height} Z`; // Close the path
    return path;
  };

  return (

    <div className={`${className} relative`}>
      {
        colors.map((color, layerIndex) => (
          <div
            key={layerIndex}
            className="absolute top-0 left-0 w-full flex"
            style={{ zIndex: colors.length - layerIndex }}
          >
            {Array.from({ length: pieceCount }).map((_, index) => (
              <svg
                key={index}
                viewBox={`0 0 ${cutWidth} ${height}`}
                className="line-clamp-1 bg-transparent"
                xmlns="http://www.w3.org/1000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d={generateSmoothPath(layerIndex, index)}
                  fill={color}
                  style={{}}
                  className="bg-transparent"
                />
              </svg>
            ))}
          </div>
        ))
      }
    </div>
  );
};

export default FlexiblePaperCuts;