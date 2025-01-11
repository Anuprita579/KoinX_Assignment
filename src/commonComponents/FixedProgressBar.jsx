import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import "./commonStyles.scss";

const FixedProgressBar = ({ value = 0, maxValue = 100000 }) => {
  const percentage = Math.min((value / maxValue) * 100, 100); // Ensure percentage doesn't exceed 100

  return (
    <Box className="progressBar">
      {/* Progress Bar */}
      <Box
        sx={{
          height: "4px",
          background: "linear-gradient(to right, #f56565, #ed8936, #48bb78)",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        {/* Indicator with Arrow */}
        {value > 0 && (
          <Tooltip title={`$${value.toFixed(2)}`} arrow>
            <Box
              sx={{
                position: "absolute",
                left: `${percentage}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {/* Arrow */}
              <svg
                viewBox="0 0 100 100"
                style={{
                  fill: "currentColor",
                  color: "black", // Arrow color
                }}
                className="arrow"
              >
                <polygon points="0,100 50,0 100,100" />
              </svg>
            </Box>
          </Tooltip>
        )}
      </Box>

      {/* Display Value */}
      {value > 0 && <div className="displayName">${value.toFixed(2)}</div>}
    </Box>
  );
};

export default FixedProgressBar;
