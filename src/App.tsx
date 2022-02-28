/* Redux */
import { useDispatch } from "react-redux";
import { getPosts } from "./store/posts/postsSlice";

/* gRPC */
import { User, JoinResponse } from "./protos/chat_pb";
import { ChatServiceClient } from "./protos/chat_grpc_web_pb";
import ChatPage from "./containers/Chat";
import { useState, useRef } from "react";

const client = new ChatServiceClient("http://localhost:8080", null, null);

const App = () => {
  /* redux testing */
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPosts());
  };

  /* gRPC testing */
  const inputRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  function joinHandler() {
    const _username = inputRef?.current?.value;

    const user: any = new User();
    user.setId(Date.now());
    user.setName(_username);

    // @ts-ignore
    client.join(user, null, (err, response) => {
      if (err) return console.log(err);
      const error = response.getError();
      const msg = response.getMsg();

      if (error === 1) {
        setSubmitted(true);
        return;
      }
      window.localStorage.setItem("username", _username.toString());
      setSubmitted(true);
    });
  }

  function renderChatPage() {
    return <ChatPage client={client} />;
  }

  function renderJoinPage() {
    return (
      <div>
        <div>
          <h1>Join Chat As...</h1>
        </div>
        <div style={{ padding: "10px 0" }}>
          <input
            style={{ fontSize: "1.3rem" }}
            type="text"
            ref={inputRef}
            placeholder="Your username..."
          />
        </div>
        <div>
          <button
            onClick={joinHandler}
            style={{
              padding: "7px 38px",
              fontSize: "1.2em",
              boxSizing: "content-box",
              borderRadius: "4px",
            }}
          >
            Join
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-[1rem] flex flex-col justify-center items-center h-[100vh]">
      <p>
        You are in master branch. Folder structure and redux implementation lies
        here.
      </p>
      <div className="flex flex-col justify-center items-center">
        <p>
          Open Redux DevTools and click the button to test redux async logic.
        </p>
        <div>
          <button className="border-8" onClick={handleClick}>
            Click
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p>gRPC</p>
        <div className="main">
          {submitted ? renderChatPage() : renderJoinPage()}
        </div>
      </div>
    </div>
  );
};

export default App;
