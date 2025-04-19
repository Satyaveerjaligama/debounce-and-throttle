import "./App.css";
import _ from "lodash";

function App() {
  const getSuggestions = (e: any) => {
    console.log("API call", e);
  };

  const handleChange = _.debounce(getSuggestions, 3000, {
    // leading: true,
    trailing: true,
    maxWait: 2000,
  });

  const cancelDebounce = () => {
    console.log("Cancel Debounce");
    handleChange.cancel();
  };

  const flushDebounce = () => {
    console.log("Flush Debounce");
    handleChange.flush();
  };

  const handleClick = () => {
    console.log("Button click");
  };

  const handleThrottle = _.throttle(handleClick, 4000, {
    // leading: false,
    // trailing: true,
  });

  const cancelThrottle = () => {
    console.log("Cancel Throttle");
    handleThrottle.cancel();
  };

  const flushThrottle = () => {
    console.log("Flush Throttle");
    handleThrottle.flush();
  };

  return (
    <div>
      <input placeholder="Start Typing..." onChange={(e) => handleChange(e)} />
      <button onClick={cancelDebounce}>Cancel Debounce</button>
      <button onClick={flushDebounce}>Flush Debounce</button>
      <br></br>
      <br></br>
      <button onClick={handleThrottle}>Throttle</button>
      <button onClick={cancelThrottle}>Cancel Throttle</button>
      <button onClick={flushThrottle}>Flush Throttle</button>
    </div>
  );
}

export default App;
