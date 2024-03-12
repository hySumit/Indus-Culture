import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ImageModal from "../../HoveringCard/ImagePopup";
import { Context } from "../Auth/Context";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useToast, Wrap, Spinner } from "@chakra-ui/react";

const generateStars = (rating) => {
  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<AiFillStar key={i} />);
  }
  return starArray;
};

const Checkout2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isAuth } = useContext(Context);
  const [localData, setLocalData] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  const openModal = (image) => {
    const selectedImageData = localData.find((el) => el.image === image);
    setSelectedImage(selectedImageData);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const removeFromCart = (index, itemName) => {
    const updatedCartItems = [...localData];
    const removedItem = updatedCartItems.splice(index, 1)[0];
    setLocalData(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    toast({
      title: `${itemName} removed from the cart`,
      status: "warning",
      isClosable: true,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (isAuth) {
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setLocalData(storedItems);
    }
    return () => clearTimeout(timer);
  }, [isAuth]);

  const total = () => {
    const totalPrice = localData.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return totalPrice.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    localStorage.removeItem("cartItems")
  };

  const orderId = () => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
        <h1 className="text-[20px]">Total : ₹ {total()} </h1>
      {loading ? (
        <Spinner height={"50px"} width={"50px"} color="green.500" />
      ) : done ? (
        <div className="order-details">
          <div className="total">
            {/* <h1 className="text-[20px]">Order Id: {orderId()} </h1> */}
            <p>
              Thank you {name} for purchasing your order id is {orderId()}
            </p>
          </div>
        </div>
      ) : (
        <Wrap spacing={4} justify="center">
          <div className="checkout-container max-w-screen-md mx-auto">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Your Address" />

              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                placeholder="Enter Your Pincode"
              />

              <button className="checkout-btn">CheckOut</button>
            </form>
          </div>

          <div className="walls grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
            {localData.map((el, index) => (
              <div key={el.id} className="child p-4">
                <div className="img23" onClick={() => openModal(el.image)}>
                  <img
                    className="w-full h-80 object-cover rounded"
                    src={el.image}
                    alt=""
                  />
                </div>

                <div className="intro2 bg-[#63636354]">
                  <p className="text-[#2e2e2e] bg-[#81dbff75]">
                    {el.name}
                    <span className=" hover:underline text-[#000000]">
                      # {el.category}
                    </span>
                  </p>
                  <p className="">Price : ₹ {el.price}</p>
                  <p className="">Source : {el.source}</p>
                  <p className="flex items-center gap-1 justify-center">
                    Rating : {el.rating} {generateStars(el.rating)}
                  </p>
                  <div className="buttons flex items-center justify-center gap-2">
                    <button
                      className="bg-white p-1 rounded hover:bg-[#f05c5c]"
                      onClick={() => removeFromCart(index, el.name)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      )}

      {selectedImage && (
        <ImageModal image={selectedImage.image} onClose={closeModal} />
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Checkout2;
