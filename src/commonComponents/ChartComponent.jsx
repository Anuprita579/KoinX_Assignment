import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // Configure the widget options
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "CRYPTO:BTCUSD",
      timezone: "Etc/UTC",
      theme: "light",
      style: "2",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      range: "5D",
      save_image: false,
      calendar: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com",
    });

    // Append the script to the container
    container.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container.current) {
        container.current.innerHTML = ""; // Remove all child elements
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default memo(TradingViewWidget);
