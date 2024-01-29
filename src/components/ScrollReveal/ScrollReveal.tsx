// ScrollReveal.tsx
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Element } from "react-scroll";

interface ScrollRevealProps {
  delay?: number;
  identifier: string; // Adicionamos um identificador exclusivo
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  delay = 0,
  identifier,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const revealSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    config: { duration: 500 },
    delay,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(identifier);

      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsVisible(elementTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [identifier]);

  return (
    <animated.div style={revealSpring}>
      <Element name={identifier}>{children}</Element>
    </animated.div>
  );
};

export default ScrollReveal;
