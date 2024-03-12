import "../SearchArt/Search1.scss";
import { Link } from "react-router-dom";
import { Context } from "../Auth/Context";
import React, { useContext, useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import ImageModal from "../../HoveringCard/ImagePopup";

import { Footer } from "../Footer/Footer";
import { Navbar2 } from "../Navbar/Navbar2";
// import ShopSkeleton from "../Skeleton/Skelton";
import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { Navbar } from "../Navbar/Navbar";


const generateStars = (rating) => {
    const starArray = [];
    for (let i = 0; i < rating; i++) {
      starArray.push(<AiFillStar key={i} />);
    }
    return starArray;
  };

const Search1 = () => {
  const { data } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [selectedImage, setSelectedImage] = useState(null);
  const {isAuth} = useContext(Context)

  const openModal = (image) => {
    const selectedImageData = data.find((result) => result.image === image);
    setSelectedImage(selectedImageData);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();

  
    const results = data.filter((item) => item.name.includes(searchQuery));

    setSearchResults(results);
    // console.log(results);

    
    setSearchQuery("");
  };

  const AddToCart = (result) => {
    if (isAuth) {
      const oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
      const isProductInCart = oldItems.some((item) => item.id === result.id);
  
      if (isProductInCart) {
        toast({
          title: "You can only add one item once",
          status: "warning",
          isClosable: true,
        });
      } else {
        const productToAdd = {
          id: result.id,
          name: result.name,
          price: result.price,
          image: result.image,
          source: result.author,
          rating: result.rating,
        };
  
        oldItems.push(productToAdd);
        localStorage.setItem("cartItems", JSON.stringify(oldItems));
  
        toast({
          title: "Item added to cart successfully",
          status: "success",
          isClosable: true,
        });
  
        setDisabledButtons((prevButtons) => [...prevButtons, result.id]);
  
        // console.log("Item added to cart:", productToAdd);
      }
    } else {
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
      <div className="flex justify-center items-center gap-3">
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/cart"}>Cart</Link> */}
        <Navbar/>

        {/* Search bar */}
        <div className="search-box mb-5 ">
          <form className="search-box__form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Photos"
              className="text-sm h-1 spi"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="reset"></button>
          </form>
        </div>

        
      </div>
      <div>
        {searchResults.length === 0 ? (
            <h1>Search Some data</h1>
        ):(
            <div>
                {searchResults.length > 0 && (
          <div>
            <ul>
              {searchResults.map((result) => (
                  <div key={result.id} className="walls">
                    
                  <div className="grid">
                    <div className="child">
                      <div className="img23">
                        <img src={result.image} alt="" />
                      </div>

                      <div className="intro2">
                        <p className="text-[#2e2e2e] bg-[#81dbff75]">
                          {result.name}
                          <span className=" hover:underline text-[#000000]">
                            # {result.category}
                          </span>
                        </p>
                        <p className="">Price : ₹ {result.price}</p>
                        <p className="">Source : {result.author}</p>
                        <p className="flex items-center gap-1 justify-center">
                          Rating : {result.rating}{" "}
                          {generateStars(result.rating)}
                        </p>

                        <div className="buttons flex items-center justify-center gap-2">
                          <button
                            className="bg-white p-1 rounded hover:bg-[#88ff78]"
                            onClick={() => AddToCart(result)}
                            disabled={disabledButtons.includes(result.id)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
            </div>
        )}
        
      </div>
    </>
  );
};

export default Search1;
