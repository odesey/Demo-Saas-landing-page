import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold
  });
  const { setActiveTab, lastClickedTime } = useActiveSectionContext();

  useEffect(() => {
    console.log(" is this working ?", sectionName);
    if (inView && Date.now() - lastClickedTime > 1000) {
      setActiveTab(sectionName);
    }
  }, [inView, setActiveTab, lastClickedTime, sectionName]);

  return {
    ref
  };
}
