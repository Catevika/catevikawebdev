import React, { useEffect, useState, type JSXElementConstructor, type ReactElement } from 'react';

export function extractStrings(children: React.ReactNode): string[] {
  const strings: string[] = [];

  function traverse(node: React.ReactNode) {
    if (typeof node === 'string') {
      strings.push(node);
    } else if (React.isValidElement(node)) {
      React.Children.forEach(node.props.children, traverse);
    } else if (Array.isArray(node)) {
      node.forEach(traverse);
    }
  }

  React.Children.forEach(children, traverse);

  return strings;
}

export function useReadingTime({ content }: { content: ReactElement<any, string | JSXElementConstructor<any>>; }) {
  const [readingTime, setReadingTime] = useState('');

  const contentStrings = extractStrings(content).join(' ');

  useEffect(() => {
    const calculateReadingTime = () => {
      const words = contentStrings.trim().split(/\s+/);
      const averageWordsPerMinute = 200;
      const minutes = words.length / averageWordsPerMinute;
      setReadingTime(Math.ceil(minutes) + ` min.`);
    };

    calculateReadingTime();
  }, [content]);

  return { readingTime };
};