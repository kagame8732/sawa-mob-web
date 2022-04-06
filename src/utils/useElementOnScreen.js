import { useEffect, useRef, useState } from "react";

export default function useElementOnScreen(options) {
  const containerRef = useRef(null);
  const moveleftRef = useRef(null);
  const moveleftRight = useRef(null);
  const [refList, setRefList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries, appearOnScroll) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    console.log("entry:", entry);
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        // console.log("entry:", entry);
        entry.target.classList.remove("appear");
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
      if (entry.intersectionRatio > 0) {
        // console.log("entry:", entry);
        entry.target.classList.add("appear");
      } else {
        entry.target.classList.remove("appear");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);
    if (moveleftRef.current) observer.observe(moveleftRef.current);
    if (moveleftRight.current) observer.observe(moveleftRight.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, moveleftRef, moveleftRight, isVisible];
}
