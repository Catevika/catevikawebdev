import type { LoginFormValues, User } from '@/types/types';
import bcrypt from 'bcryptjs';

export async function verifyPassword(userFormData: LoginFormValues, existingUser: User) {
  const { password } = userFormData;
  const hashedPassword = existingUser.password;

  if (!hashedPassword) {
    return { error: "No user with this name in our database" };
  }

  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (isMatch) {
      return existingUser;
    } else {
      console.log("Invalid password");
      return null;
    }
  } catch (error) {
    console.error("Error verifying password:", error);
  }
}

export const createLoginCookie = () => {
  document.cookie = `IS_LOGGED_IN=true; path=/blog; max-age=31536000; samesite=Lax; secure`;
}

