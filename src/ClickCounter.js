import { useState, useEffect } from 'react';
import { database } from './firebase';

function ClickCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    database.ref('clickCount').once('value').then(function(snapshot) {
      let count = snapshot.val() || 0;
      setCount(count);
    });
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    database.ref('clickCount').set(newCount);
  };

  return (
    <div>
      <h1>Lets chase the clicks...</h1>
      <p>Number of clicks: {count}</p>
      <button onClick={handleClick}>Click me!!!</button>
    </div>
  );
}

export default ClickCounter;
