"use client";

import { useState } from 'react';

export default function TagsToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <h3 onClick={handleClick}>Tags</h3>
  );
}
