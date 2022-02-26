import { useSelector, useDispatch } from "react-redux";
import { store, selectUsers } from "./store/configureStore";

const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <div>
      You are in master branch. Folder structure and redux implementation lies
      here.
    </div>
  );
};

export default App;
