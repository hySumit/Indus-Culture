// Shop2.jsx

import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ImageModal from "../../HoveringCard/ImagePopup";
import { Context } from "../Auth/Context";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const generateStars = (rating) => {
  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<AiFillStar key={i} />);
  }
  return starArray;
};

const Shop2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isAuth } = useContext(Context);
  const [localData, setLocalData] = useState([]);
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const [loading, setLoading] = useState(true);

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

    // Show Chakra UI toast for item removal
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

  return (
    <>
      {loading ? (
        <Spinner height={"50px"} width={"50px"} color='green.500' />
      ) : (
        <Wrap spacing={4} justify="center">
          {localData.length === 0 ? (
            <div className="text-center m-auto">
              <h1>No Data Found</h1>
              <p className="mb-3"> Please add some items to cart</p>
              <Link
                className="bg-green-500 rounded hover:bg-green-700 p-2 mt-4"
                to="/shop"
              >
                Shop
              </Link>
            </div>
          ) : (
            <div className="walls grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {localData.map((el, index) => (
                <div key={el.id} className="child p-4">
                  <div className="img23" onClick={() => openModal(el.image)}>
                    <img className="w-full h-80 object-cover rounded" src={el.image} alt="" />
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
          )}
        </Wrap>
      )}

      {selectedImage && (
        <ImageModal image={selectedImage.image} onClose={closeModal} />
      )}
      <Footer />
    </>
  );
};

export default Shop2;
