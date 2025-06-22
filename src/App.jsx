import { useState } from "react";
import "./App.css";

function App() {
  const originalImages = [
    { id: 0, src: "https://robohash.org/cat.png" },
    { id: 1, src: "https://robohash.org/dog.png" },
    { id: 2, src: "https://robohash.org/meo.png" },
    { id: 3, src: "https://robohash.org/eva.png" },
    { id: 4, src: "https://robohash.org/neo.png" },
    { id: 5, src: "https://robohash.org/seo.png" },
    { id: 6, src: "https://robohash.org/geo.png" },
    { id: 7, src: "https://robohash.org/kab.png" },
    { id: 8, src: "https://robohash.org/bsa.png" },
    { id: 9, src: "https://robohash.org/lur.png" },
    { id: 10, src: "https://robohash.org/hili.png" },
    { id: 11, src: "https://robohash.org/sily.png" },
  ];

  const [count, setCount] = useState(0);
  const [totalCound, setTotalCount] = useState(0);
  const [clickedId, setClickedId] = useState([]);
  const [images, setImages] = useState(originalImages);

  function handleClick(id) {
    if (clickedId.includes(id)) {
      setCount(0);
      setClickedId([]);
    } else {
      setCount(count + 1);
      setClickedId([...clickedId, id]);
    }

    setImages(shuffleArray(images));
  }

  if (count > totalCound) {
    setTotalCount(count);
  }

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <h1>Memory Card</h1>
      <h3>High Score: {totalCound}</h3>
      <h3>Score: {count} </h3>
      <div className="images">
        {images.map((img) => (
          <img
            src={img.src}
            alt="cat"
            onClick={() => handleClick(img.id)}
            id={img.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
