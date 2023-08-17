import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log('hasdf');

  return (
    <div>
      <div className="mx-7 mb-10 mt-10 bg-red-500">
        <div className="ml-10 mt-10 bg-indigo-600">Test</div>
        <button type="button" onClick={() => setCount((countA) => countA + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
