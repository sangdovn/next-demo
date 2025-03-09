"use server";

export async function createPost(_prevState: unknown, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  const res = await fetch("https://api.vercel.app/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
  });

  await res.json();

  if (!res.ok) {
    return { message: "Failed to create post" };
  }
}
