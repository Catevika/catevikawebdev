import type { FormValues } from '@/types/types';

export const EmailTemplate = (data: FormValues) => (
  <div>
    <p>{data.message}</p>
  </div>
);