import { useState, useRef } from 'react';
import { Tweet } from 'react-tweet';

function App() {
  const [tweetId, setTweetId] = useState();
    const inputRef = useRef();

    const onSubmit = () => {
        const input = inputRef.current.value;
        const inputUrl = new URL(input);
        const pathParts = inputUrl.pathname.split("/");
        setTweetId(pathParts.reverse()[0]);
    }

  return (
    <div>
      <h1>Single Tweet Viewer!</h1>
      <p>This is a website for viewing one tweet that your friend sent you, without having to unblock twitter</p>
      <p>Paste a twitter (x? idk) link below and hit submit to view it</p>
      <p>This site will embed it on this page</p>
      <p>If you click any links, you will be redirected to twitter (which you presumably have blocked)</p>
      <p>This works for links from sites like fxtwitter too!</p>
      <br/>
      <input ref={inputRef} />
      <button onClick={onSubmit}>Submit</button>
      <br/>
      { tweetId && <Tweet id={tweetId}/> }
    </div>
  );
}

export default App;
