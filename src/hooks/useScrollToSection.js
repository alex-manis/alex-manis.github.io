import { useCallback } from "react";
import { SCROLL_BEHAVIOR } from "../constants";

/**
 * Custom hook for smooth scrolling to sections
 * @param {Object} options - Configuration options
 * @param {boolean} options.withHeaderOffset - Whether to account for header height
 * @param {Function} options.onScrollComplete - Callback to execute after scroll
 * @returns {Function} scrollToSection function
 */
export const useScrollToSection = (options = {}) => {
  const { withHeaderOffset = false, onScrollComplete } = options;

  const scrollToSection = useCallback(
    (sectionId) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      let scrollPosition = section.getBoundingClientRect().top + window.scrollY;

      // Account for fixed header if needed
      if (withHeaderOffset) {
        const header = document.querySelector(".header");
        const headerHeight = header?.offsetHeight || 0;
        scrollPosition -= headerHeight;
      }

      window.scrollTo({
        top: scrollPosition,
        behavior: SCROLL_BEHAVIOR,
      });

      if (onScrollComplete) {
        onScrollComplete();
      }
    },
    [withHeaderOffset, onScrollComplete]
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: SCROLL_BEHAVIOR,
    });

    if (onScrollComplete) {
      onScrollComplete();
    }
  }, [onScrollComplete]);

  return { scrollToSection, scrollToTop };
};
