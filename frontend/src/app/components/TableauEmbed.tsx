"use client";

import React, { useEffect } from "react";

export default function TableauEmbed() {
  useEffect(() => {
    // Dynamically load Tableau's JavaScript API
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.onload = () => {
      // You can add any custom code here if needed once the script is loaded
      const divElement = document.getElementById("viz1740345926556");
      const vizElement = divElement?.getElementsByTagName("object")[0];

      if (vizElement) {
        vizElement.style.width = "100%";
        vizElement.style.height = (divElement?.offsetWidth * 0.75) + "px";
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1740345926556"
      style={{
        position: "relative",
        width: "100%",  // Ensure the container takes up full width
        height: "100%", // You can adjust this value to make it take more or less of the viewport height
      }}
      dangerouslySetInnerHTML={{
        __html: `
          <noscript>
            <a href="#">
              <img alt="Anxiety rating distribution" src="https://public.tableau.com/static/images/Ba/BayChuang/2/1_rss.png" style="border: none" />
            </a>
          </noscript>
          <object class="tableauViz" style="display:none;">
            <param name="host_url" value="https://public.tableau.com/" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="BayChuang/2" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/Ba/BayChuang/2/1.png" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        `,
      }}
    />
  );
}
