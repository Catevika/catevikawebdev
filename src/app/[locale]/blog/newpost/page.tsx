// import type { MongoClient } from 'mongodb';
// import { redirect } from 'next/navigation';
// import clientPromise from '@/lib/mongoDBAdapter';

// async function create(formData: FormData) {
//   'use server';
//   const client: MongoClient = await clientPromise;
//   const db = client.db('catevikawebdev-blog-db');
//   const collection = db.collection('posts');

//   const post = await collection.insertOne({
//     title: formData.get('title'),
//     content: formData.get('content'),
//   });
//   redirect(`/blog/${post.slug}`);
// }

// export default function Page() {
//   return (
//     <form action={create}>
//       <input type="text" name="title" />
//       <textarea name="content" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }