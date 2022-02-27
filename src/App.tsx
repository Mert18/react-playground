import { useDispatch } from "react-redux";
import { getPosts } from "./store/posts/postsSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPosts());
  };

  return (
    <div className="text-[1rem] flex flex-col justify-center items-center h-[100vh]">
      <p>
        You are in master branch. Folder structure and redux implementation lies
        here.
      </p>
      <p>Open Redux DevTools and click the button to test redux async logic.</p>
      <div>
        <button className="border-8" onClick={handleClick}>
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
