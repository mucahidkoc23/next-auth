'use client';

import React, { useEffect, useState, useRef, ReactNode } from 'react';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';

import 'highlight.js/styles/monokai-sublime.css';

interface HighlightProps {
  children: ReactNode;
  testId?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, testId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const codeNode = useRef<HTMLElement>(null);
  const language = 'json';

  useEffect(() => {
    try {
      hljs.registerLanguage(language, json);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
      throw new Error(`Cannot register the language ${language}`);
    }
  }, []);

  useEffect(() => {
    if (codeNode.current) {
      hljs.highlightElement(codeNode.current);
    }
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <pre className="rounded " data-testid={testId}>
      <code ref={codeNode} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default Highlight;
