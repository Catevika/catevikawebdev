"use client";

import CheckIcon from '@/components/Icons/CheckIcon';
import ClipboardIcon from '@/components/Icons/ClipboardIcon';
import { useState } from 'react';

export function CopyButton({ text }: { text: string; }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <button
      disabled={isCopied}
      onClick={handleCopy}
    >
      {isCopied ? <CheckIcon /> : <ClipboardIcon />}
    </button>
  );
}

