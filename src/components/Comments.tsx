import Giscus from "@giscus/react";
import { GISCUS } from "@/config";
import { useEffect, useState } from "react";

export default function Comments() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get initial theme
    const currentTheme = localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(currentTheme);

    // Listen for theme changes
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      setTheme(newTheme);
    };

    // Watch for storage changes (theme toggle)
    window.addEventListener("storage", handleThemeChange);
    
    // Watch for direct theme changes on same tab
    const observer = new MutationObserver(() => {
      const html = document.documentElement;
      const isDark = html.classList.contains("dark") || html.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "dark" : "light");
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"]
    });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-8">
      <Giscus
        repo={GISCUS.repo}
        repoId={GISCUS.repoId}
        category={GISCUS.category}
        categoryId={GISCUS.categoryId}
        mapping={GISCUS.mapping}
        strict={GISCUS.strict}
        reactionsEnabled={GISCUS.reactionsEnabled}
        emitMetadata={GISCUS.emitMetadata}
        inputPosition={GISCUS.inputPosition}
        theme={theme === "dark" ? "dark" : "light"}
        lang={GISCUS.lang}
        loading={GISCUS.loading}
      />
    </div>
  );
}