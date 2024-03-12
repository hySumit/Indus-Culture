import React from "react";
import hyd from "../../assets/hyd.jpg";
import jpr from '../../assets/Jaipur.jpg'
import bhr from '../../assets/Bihar.jpg'
import dar from '../../assets/dar.jpg'
import gjr from '../../assets/art1.jpg'
import mhr from '../../assets/Mumbai2.jpg'


export const Home2 = () => {
  return (
    <>
      <div className="brdr mt-[70px]">
        <h1 className="text-4xl font-bold mb-10" >Explore India</h1>
        <div className="flex justify-evely telangana">
          <div className="heading3">
            <h1 className="text-2xl mt-7 mr-[50vh]">Antiques of Telangana.</h1>
            <hr className="hr " />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              molestias ex debitis ab praesentium exercitationem error magni.
              Animi, dolorem ut obcaecati officiis corrupti porro fugit nam
              ullam, sapiente voluptatibus non quos. Voluptatem dolore ipsam
              rerum sapiente error molestiae dolor!
            </p>
          </div>
          <br />
          {/* <div className="bar"></div> */}
          {/* <h1>dfhg</h1> */}
          <div className="images">
            <div className="childimgs">
              <div className="in">
                <img className="w-[600px] p-3 hyd-img" src={hyd} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section3 mt-6">
        <div className="jpr">
          <div className="flex items-center jpr2 gap-[59px]">
            <div className="images i mt-10">
            <div className="childimgs2">
              <div className="in2 m-2">
                <img className="w-[500px] h-[auto] p-3 jpr-img" src={jpr} alt="" />
              </div>
            </div>
          </div>
            <div className="heading4 text-2xl mt-[200px]">
              <h1>Great Buildings of Rajsthan.</h1>
              <hr className="hr2" />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae voluptate, ipsum iste ullam at earum doloremque nobis corporis praesentium saepe adipisci dolore explicabo debitis aut quidem. Odio, iste? Voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae voluptate, ipsum iste ullam at earum doloremque nobis corporis praesentium saepe adipisci dolore explicabo debitis aut quidem. Odio, iste? Voluptas!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* line break */}

      <div className="brdr mt-[70px]">
        <div className="flex br justify-evely">
          <div className="heading3 ">
            <h1 className="text-2xl mt-7 mr-[50vh]">Ancient University of Bihar.</h1>
            <hr className="hr3 " />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              molestias ex debitis ab praesentium exercitationem error magni.
              Animi, dolorem ut obcaecati officiis corrupti porro fugit nam
              ullam, sapiente voluptatibus non quos. Voluptatem dolore ipsam
              rerum sapiente error molestiae dolor!
            </p>
          </div>
          <br />
          {/* <div className="bar"></div> */}
          {/* <h1>dfhg</h1> */}
          <div className="images">
            <div className="childimgs">
              <div className="in">
                <img className="w-[600px] p-3 hyd-img" src={bhr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section3 mt-6">
        <div className="wb">
          <div className="flex jpr2 items-center gap-[59px]">
            <div className="images mt-10">
            <div className="childimgs2">
              <div className="in2 m-2">
                <img className="w-[500px] h-[auto] p-3 jpr-img" src={dar} alt="" />
              </div>
            </div>
          </div>
            <div className="heading4 wb text-2xl mt-[200px]">
              <h1>Tea of West Bengal.</h1>
              <hr className="hr4" />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae voluptate, ipsum iste ullam at earum doloremque nobis corporis praesentium saepe adipisci dolore explicabo debitis aut quidem. Odio, iste? Voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae voluptate, ipsum iste ullam at earum doloremque nobis corporis praesentium saepe adipisci dolore explicabo debitis aut quidem. Odio, iste? Voluptas!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* line break  */}

      <div className="brdr mt-[70px]">
        <div className="flex gujrat justify-evely">
          <div className="heading3 gj-heading">
            <h1 className="text-2xl mt-7 mr-[50vh]">Art of Gujrat.</h1>
            <hr className="hr5 " />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              molestias ex debitis ab praesentium exercitationem error magni.
              Animi, dolorem ut obcaecati officiis corrupti porro fugit nam
              ullam, sapiente voluptatibus non quos. Voluptatem dolore ipsam
              rerum sapiente error molestiae dolor!
            </p>
          </div>
          <br />
          {/* <div className="bar"></div> */}
          {/* <h1>dfhg</h1> */}
          <div className="images">
            <div className="childimgs">
              <div className="in">
                <img className="w-[600px] p-3 hyd-img" src={gjr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section3 mt-6">
        <div className="mh1">
          <div className="flex mh items-center gap-[59px]">
            <div className="images mt-10">
            <div className="childimgs2">
              <div className="in2 m-2">
                <img className="w-[500px] h-[auto] p-3 jpr-img" src={mhr} alt="" />
              </div>
            </div>
          </div>
            <div className="heading4 mh-heading text-2xl mt-[200px]">
              <h1>Brave King of Maharastra.</h1>
              <hr className="hr6" />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae voluptate, ipsum iste ullam at earum doloremque nobis corporis praesentium saepe adipisci dolore explicabo debitis aut quidem. Odio, iste? Voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae voluptate, ipsum iste ullam at earum doloremque nobis corporis praesentium saepe adipisci dolore explicabo debitis aut quidem. Odio, iste? Voluptas!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
