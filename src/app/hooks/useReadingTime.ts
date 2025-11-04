'use client';

import React, {
	useEffect,
	useState,
	type JSXElementConstructor,
	type ReactElement,
	type ReactNode,
} from 'react';

export function extractStrings(children: ReactNode): string[] {
	const strings: string[] = [];

	function traverse(node: ReactNode) {
		if (typeof node === 'string') {
			strings.push(node);
		} else if (React.isValidElement(node)) {
			// Assert node as ReactElement to access props without unknown type error
			const element = node as React.ReactElement<any, any>;
			React.Children.forEach(element.props.children, traverse);
		} else if (Array.isArray(node)) {
			node.forEach(traverse);
		}
	}

	React.Children.forEach(children, traverse);

	return strings;
}

export function useReadingTime({
	content,
}: {
	content: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
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
	}, [contentStrings]);

	return {readingTime};
}
