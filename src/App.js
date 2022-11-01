import { useEffect, useState } from "react";
import { Slide,Slider,Controller,Progress } from "./components/index";
import carsDatas from "./data/cars.json" ;
function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {

    let interval = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => {
      if (index >= 2) {
        setIndex(0)
      }
      if (index <= 0) {
        setIndex(2);
      }
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div style={{ width: `100%`, heigth: `100%` }} className="App">
      <Slider>
        {carsDatas.map((car, i) => {
          return (
            <Slide
              isSameKey={i === index ? true : false}
              key={i}
              image={car.img}
            />
          );
        })}
      </Slider>
      
      <Controller>
        <button onClick={() => setIndex(index + 1)}>+</button>
        <button onClick={() => setIndex(index - 1)}>-</button>
      </Controller>
      <Progress time={1000} />
    </div>
  );
}

export default App;
