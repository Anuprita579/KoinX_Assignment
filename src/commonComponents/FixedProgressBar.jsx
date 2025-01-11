import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const FixedProgressBar = ({ value = 0, maxValue = 100000 }) => {
  const percentage = Math.min((value / maxValue) * 100, 100); // Ensure percentage doesn't exceed 100

  return (
    <Box sx={{ position: "relative", width: "70%" }}>
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
                  marginTop: "16px",
                  width: "12px",
                  fill: "currentColor",
                  color: "black", // Arrow color
                }}
              >
                <polygon points="0,100 50,0 100,100" />
              </svg>
            </Box>
          </Tooltip>
        )}
      </Box>

      {/* Display Value */}
      {value > 0 && (
        <Typography align="center" sx={{ marginTop: "10px", color: "#44475B" }}>
          ${value.toFixed(2)}
        </Typography>
      )}
    </Box>
  );
};

export default FixedProgressBar;
