import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Text } from "./components/Text";
import { UnitControls } from "./components/UnitsContols";
import { Cart } from "./components/Cart";
import { Menu } from "./components/Menu";
import { Price } from "./components/Price";
import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";
import imageThumbnail1 from "./images/image-product-1-thumbnail.jpg";
import imageThumbnail2 from "./images/image-product-2-thumbnail.jpg";
import imageThumbnail3 from "./images/image-product-3-thumbnail.jpg";
import imageThumbnail4 from "./images/image-product-4-thumbnail.jpg";
import { useState, useRef, useEffect } from "react";

function App() {
  /* ref */
  const previousRef = useRef(null);
  const nextRef = useRef(null);
  const plusRef = useRef(null);
  const minusRef = useRef(null);
  const cartIconRef = useRef(null);
  const imageThumbnail1ref = useRef(null);
  const imageThumbnail2ref = useRef(null);
  const imageThumbnail3ref = useRef(null);
  const imageThumbnail4ref = useRef(null);

  const images = [image1, image2, image3, image4];
  const imageThumbnails = [
    imageThumbnail1,
    imageThumbnail2,
    imageThumbnail3,
    imageThumbnail4,
  ];
  const imageThumbnailsRef = [
    imageThumbnail1ref,
    imageThumbnail2ref,
    imageThumbnail3ref,
    imageThumbnail4ref,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [selectedUnits, setSelectedUnits] = useState(0);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [selectedItems, setSelectedItems] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [selectedThumbnail, setselectedThumbnail] = useState(1);

  const handleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  };

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
    } else if (e.target === imageThumbnail1ref.current) {
      setSelectedIndex(0);
      setselectedThumbnail(1);
    } else if (e.target === imageThumbnail2ref.current) {
      setSelectedIndex(1);
      setselectedThumbnail(2);
    } else if (e.target === imageThumbnail3ref.current) {
      setSelectedIndex(2);
      setselectedThumbnail(3);
    } else if (e.target === imageThumbnail4ref.current) {
      setSelectedIndex(3);
      setselectedThumbnail(4);
    }
  };

  useEffect(() => {
    if(selectedThumbnail === 1){
      imageThumbnail1ref.current.style.opacity = '75%'
      imageThumbnail1ref.current.style.outline = '4px solid orange'
    }else{
      imageThumbnail1ref.current.style.opacity = ''
      imageThumbnail1ref.current.style.outline = ''
    }
    if(selectedThumbnail === 2){
      imageThumbnail2ref.current.style.opacity = '75%'
      imageThumbnail2ref.current.style.outline = '4px solid orange'
    }else{
      imageThumbnail2ref.current.style.opacity = ''
      imageThumbnail2ref.current.style.outline = ''
    }
    if(selectedThumbnail === 3){
      imageThumbnail3ref.current.style.opacity = '75%'
      imageThumbnail3ref.current.style.outline = '4px solid orange'
    }else{
      imageThumbnail3ref.current.style.opacity = ''
      imageThumbnail3ref.current.style.outline = ''
    }
    if(selectedThumbnail === 4){
      imageThumbnail4ref.current.style.opacity = '75%'
      imageThumbnail4ref.current.style.outline = '4px solid orange'
    }else{
      imageThumbnail4ref.current.style.opacity = ''
      imageThumbnail4ref.current.style.outline = ''
    }
  }, [selectedThumbnail]);


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

  const handleCartVisibility = () => {
    setCartVisibility(!cartVisibility);
  };

  const handleSelectedItems = () => {
    if (selectedUnits > 0) {
      setSelectedItems(true);
      setCartItem(
        (cartItem) =>
          (cartItem = {
            name: "Autumn Limited Edition Sneakers",
            price: "$125.00",
            units: selectedUnits,
            finalPrice: 125 * selectedUnits,
            image: image1,
          })
      );
      console.log(cartItem);
    }
  };

  const handleDeleteItem = () => {
    setSelectedUnits(0);
  };
  useEffect(() => {
    setOpacity(1);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedUnits === 0) {
      setSelectedItems(false);
    }
  }, [selectedUnits]);
  const [cartItem, setCartItem] = useState({});

  return (
    <div className="App">
      <Menu
        menuVisibility={menuVisibility}
        handleMenuVisibility={handleMenuVisibility}
      ></Menu>
      <Header
        cartIconRef={cartIconRef}
        handleCartVisibility={handleCartVisibility}
        handleMenuVisibility={handleMenuVisibility}
      ></Header>
      <Cart
        cartVisibility={cartVisibility}
        cartItem={cartItem}
        selectedItems={selectedItems}
        handleDeleteItem={handleDeleteItem}
      ></Cart>
      <div className="Wrapper">
        <Slider
          previousRef={previousRef}
          nextRef={nextRef}
          images={images}
          handleSelectedIndex={handleSelectedIndex}
          imageChanger={imageChanger}
          opacity={opacity}
          imageThumbnails={imageThumbnails}
          imageThumbnailsRef={imageThumbnailsRef}
          selectedThumbnail={selectedThumbnail}
        ></Slider>
        <div className="priceWrapper">
          <Text></Text>
          <Price></Price>
          <UnitControls
            plusRef={plusRef}
            minusRef={minusRef}
            selectedUnits={selectedUnits}
            handleSelectedUnits={handleSelectedUnits}
            handleSelectedItems={handleSelectedItems}
          ></UnitControls>
        </div>
      </div>
    </div>
  );
}

export default App;
