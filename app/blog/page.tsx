import { useDispatch, useSelector } from "react-redux";

import { fetchPostsThunk } from "@/store/slices/blogSlice";

import { RootState } from "@/store";
import { strfy } from "@/utils";

export default function Blog() {
  // const dispatch = useDispatch();

  // dispatch(fetchPostsThunk() as any);

  // const posts = useSelector((state: RootState) => state.blog.posts);
  // const status = useSelector((state: RootState) => state.blog.status);
  // const error = useSelector((state: RootState) => state.blog.error);
  return (
    <div>
      <h1>Blog Page</h1>
      {/* <pre>{strfy(posts)}</pre> */}
    </div>
  );
}
