'use client';

import styles from '@/components/Blog/PaginationControls/PaginationControls.module.css';
import type { PaginationControlsProps } from '@/types/types';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PaginationControls({ totalPages, perPage, hasNextPage, hasPrevPage }: PaginationControlsProps) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? perPage;

  return (
    <div className={styles.pagination__buttons__container}>
      {hasNextPage || hasPrevPage ? <>
        <button
          type='button'
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(`blog/?page=${Number(page) - 1}&per_page=${per_page}`);
          }}>
          {'<'}
        </button>

        {Array.from({ length: (totalPages / Number(perPage) + 1) }, (_, i) => i + 1).map((pageNumber) => (
          <button type='button' key={Number(pageNumber)} onClick={() => {
            router.push(`blog/?page=${Number(pageNumber)}&per_page=${per_page}`);
          }} disabled={Number(page) === pageNumber}>{pageNumber}</button>
        ))}

        <button
          disabled={!hasNextPage}
          onClick={() => {
            router.push(`blog/?page=${Number(page) + 1}&per_page=${per_page}`);
          }}>
          {'>'}
        </button>
      </> : null}
    </div>
  );
};
