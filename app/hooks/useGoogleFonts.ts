import { useEffect } from "react";

export function useGoogleFonts() {
  useEffect(() => {
    // Activer les Google Fonts après le montage du composant
    const fontLink = document.querySelector("#google-fonts") as HTMLLinkElement;
    if (fontLink && fontLink.media === "print") {
      fontLink.media = "all";
    }
  }, []);
}
