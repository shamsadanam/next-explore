export interface Post {
  id: number;
  title: string;
  body: string;
}
export interface BlogState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
