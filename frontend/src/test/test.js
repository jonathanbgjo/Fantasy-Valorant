import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);
  console.log("Are getting in myComponent")
  useEffect(() => {
    fetch('/api/data')
      .then((response) => {console.log(response); response.json()})
      .then((data) => {console.log(data); setData(data)})
      .catch((error) => console.error(error));
  }, []);

  return 
  (
    <div>
      {/* Display the fetched data */}
      {data ? data.map((item) => (
        <p key={item.id}>{item.name}</p>
      )) : ""}
    </div>
  );
};

export default MyComponent;
