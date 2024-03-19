import Image from 'next/image';

export default function Loading() {

  return (
    <>
      <div className='loading'>
        <Image src='/Loading.gif' alt='Loading icon' sizes='128x128' width={128} height={128} unoptimized />
      </div>
    </>
  );
}

