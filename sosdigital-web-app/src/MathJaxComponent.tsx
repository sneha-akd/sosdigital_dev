import { useEffect, useRef } from "react";

declare global {
  interface Window { // ⚠️ notice that "Window" is capitalized here
    MathJax: any;
  }
}

function MathJaxComponent({ children }: {
  children: React.ReactNode
}) {
  const mathJaxRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // When the component mounts, typeset the LaTeX
    if (typeof window?.MathJax !== "undefined") {
      window?.MathJax.typeset([mathJaxRef.current]); // Typeset the current LaTeX content
    }
  }, [children]); // Re-run when the children change

  return <span ref={mathJaxRef}>{children}</span>;
}

export default MathJaxComponent;