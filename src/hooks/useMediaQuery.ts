import { useEffect, useState } from "react";

export function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export const useIsSmall = () => useMediaQuery("(max-width: 480px)");
export const useTablet = () => useMediaQuery("(max-width: 1000px)");
export const useIsMedium = () => useMediaQuery("(max-width: 1370px)");
