import { useEffect, useRef } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const Card = ({ url, newLimit, isLast }) => {
  const ref = useRef(null);

  const callbackFunction = ([entry], observer) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (isLast) {
        newLimit();
        observer.unobserve(entry.target);
      }
    }
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callbackFunction, options);

    observer.observe(ref.current);
  }, [isLast]);
  return <img ref={ref} src={url} alt="cat-img" loading="lazy" />;
};

export default Card;
