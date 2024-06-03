import { CopyButton } from '@/components/Buttons/CopyButton';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type PreProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
  raw: string;
};

export function Pre({
  raw,
  children,
  ...props
}: PreProps) {
  return (
    <pre {...props}>
      <CopyButton text={raw} />
      {children}
    </pre>
  );
}

