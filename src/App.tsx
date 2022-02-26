import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./store/posts/postsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      You are in master branch. Folder structure and redux implementation lies
      here.
      <div>
        <button>Click</button>
      </div>
    </div>
  );
};

export default App;
