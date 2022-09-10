import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Text } from "./components/Text";
import { UnitControls } from "./components/UnitsContols";
import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";
import { useState, useRef, useEffect } from "react";

function App() {
  /* ref */
  const previousRef = useRef(null);
  const nextRef = useRef(null);
  const plusRef = useRef(null);
  const minusRef = useRef(null);

  const images = [image1, image2, image3, image4];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedUnits, setSelectedUnits] = useState(0);

  const handleSelectedIndex = (e) => {
    if (e.target === previousRef.current && selectedIndex > 0) {
      setSelectedIndex((selectedIndex) => selectedIndex - 1);
    } else if (e.target === previousRef.current && selectedIndex === 0) {
      setSelectedIndex((selectedIndex) => (selectedIndex = images.length - 1));
    } else if (
      e.target === nextRef.current &&
      selectedIndex < images.length - 1
    ) {
      setSelectedIndex((selectedIndex) => selectedIndex + 1);
    } else if (
      e.target === nextRef.current &&
      selectedIndex === images.length - 1
    ) {
      setSelectedIndex(0);
    }
  };
  const imageChanger = () => {
    if (selectedIndex === 0) {
      return images[0];
    } else if (selectedIndex === 1) {
      return images[1];
    } else if (selectedIndex === 2) {
      return images[2];
    } else if (selectedIndex === 3) {
      return images[3];
    }
  };

  const handleSelectedUnits = (e) => {
    if (e.target === plusRef.current) {
      setSelectedUnits((selectedUnits) => selectedUnits + 1);
    } else if (e.target === minusRef.current && selectedUnits > 0) {
      setSelectedUnits((selectedUnits) => selectedUnits - 1);
    }
  };
  useEffect(() => {
    console.log("Index has changed");
    console.log(selectedIndex);
  }, [selectedIndex]);
  return (
    <div className="App">
      <Header></Header>
      <Slider
        previousRef={previousRef}
        nextRef={nextRef}
        images={images}
        handleSelectedIndex={handleSelectedIndex}
        imageChanger={imageChanger}
      ></Slider>
      <Text></Text>
      <UnitControls
        plusRef={plusRef}
        minusRef={minusRef}
        selectedUnits={selectedUnits}
        handleSelectedUnits={handleSelectedUnits}
      ></UnitControls>
    </div>
  );
}

export default App;
