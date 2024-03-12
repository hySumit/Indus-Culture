import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { AiFillStar } from "react-icons/ai";
import ImageModal from "../../HoveringCard/ImagePopup";
import { Context } from "../Auth/Context";
import { Footer } from "../Footer/Footer";
import { Navbar2 } from "../Navbar/Navbar2";
import ShopSkeleton from "../Skeleton/Skelton";
import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";

const generateStars = (rating) => {
  const starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<AiFillStar key={i} />);
  }
  return starArray;
};

const Shop = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { data, isAuth } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();


  const openModal = (image) => {
    const selectedImageData = data.find((el) => el.image === image);
    setSelectedImage(selectedImageData);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const AddToCart = (product) => {
    if (isAuth) {
      const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const isProductInCart = oldItems.some((item) => item.id === product.id);

      if (isProductInCart) {
        toast({
          title: "You can only add one item once",
          status: "warning",
          isClosable: true,
        });
      } else {
        const productToAdd = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          source: product.author,
          rating: product.rating,
        };

        oldItems.push(productToAdd);
        localStorage.setItem("cartItems", JSON.stringify(oldItems));

        toast({
          title: "Item added to cart successfully",
          status: "success",
          isClosable: true,
        });

        setDisabledButtons((prevButtons) => [...prevButtons, product.id]);
      }
    } else {
      navigate("/login");
      console.log("User is not authenticated");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar2 val={cartItems} />

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 mb-10 text-center">
        Welcome to Indus Culture Shop
      </h1>

      {loading ? (
        <ShopSkeleton />
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {data.map((el) => (
              <div key={el.id} className="child p-4">
                <div className="img23 m-auto " onClick={() => openModal(el.image)}>
                  <img className="w-full h-80 object-cover rounded" src={el.image} alt="" />
                </div>

                <div className="intro2 bg-[#63636354]">
                  <p className="text-[#2e2e2e] bg-[#81dbff75]">
                    {el.name}{" "}
                    <span className="hover:underline text-[#000000]"># {el.category} </span>
                  </p>
                  <p className="">Price : ₹ {el.price}</p>
                  <p className="">Source : {el.author}</p>
                  <p className="flex items-center gap-1 justify-center">
                    Rating : {el.rating} {generateStars(el.rating)}
                  </p>
                  <div className="buttons flex items-center justify-center gap-2">
                    <button
                      className="bg-white p-1 rounded hover:bg-[#88ff78]"
                      onClick={() => AddToCart(el)}
                      disabled={disabledButtons.includes(el.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <ImageModal image={selectedImage.image} onClose={closeModal} />
      )}
      <Footer />
    </>
  );
};

export default Shop;
