// import connectMongoDB from '@/database/connectDatabase';
// import Post from '@/database/models/postModel';
// import type { PostFormValues } from '@/types/types';
// import { revalidatePath } from 'next/cache';

// export const getPosts = async () => {
//   try {
//     await connectMongoDB();
//     const posts = await Post.find();
//     if (!posts) {
//       throw new Error(`Posts not found`);
//     }
//     return posts;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Failed to fetch posts');
//   }
// };

// export const getPost = async (slug: string) => {
//   try {
//     await connectMongoDB();
//     const post = await Post.findOne({ slug });
//     if (!post) {
//       throw new Error(`Post with slug ${slug} not found`);
//     }
//     return post;
//   } catch (error) {
//     console.log(error);
//     throw new Error(`Failed to fetch post ${slug}`);
//   }
// };

// export const addPost = async (postFormData: PostFormValues) => {
//   const { image, title, description, slug, userId } = postFormData;

//   try {
//     await connectMongoDB();
//     const newPost = new Post({
//       image,
//       title,
//       description,
//       slug,
//       userId
//     });
//     await newPost.save();
//     revalidatePath('/blog');
//     console.log("Post saved to DB");
//   } catch (error) {
//     return { error };
//   }
// };