import Image from 'next/image';

export default function Admin() {
  return (
    <main className='container'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Image src={'/images/Site_under_construction.png'} alt='' height={504} width={896} priority />
      </div>
      <h3>Admin</h3>
    </main>
  );
}
