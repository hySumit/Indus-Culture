import React from "react";
import lnkdn from '../../assets/linkedin.png'
import ins from '../../assets/instagram.png'
import gml from '../../assets/gmail.png'
import git from '../../assets/github.png'
// import { MailIcon } from '@heroicons/react/solid';

export const Footer = () => {
  return (
    <div className="mt-20">
      <div className="footer text-center">
        <h1 className="text-3xl font-bold">About us!</h1>
        <hr className="hr7" />
        <p className="w-[60%] mt-5 mx-auto aboutus">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          magnam doloremque aperiam fugiat dolorem, corrupti aspernatur eius,
          nisi soluta provident quod nesciunt necessitatibus reiciendis possimus
          hic odio eveniet vel tenetur ex nulla aliquam molestiae cumque minus!
          Unde eaque soluta amet provident corrupti, esse, consequatur
          exercitationem optio deserunt ad, nostrum laborum.
        </p>
      </div>
      <section className="footer2 mt-16 bg-opacity-70 bg-gray-900">
        <div className="footer-div flex flex-col lg:flex-row justify-between items-center w-full lg:w-4/5 mx-auto p-8">
          <div className="text-black lg:mr-8 mb-6 lg:mb-0">
            <h1 className="text-3xl font-bold">Indus Culture</h1>
          </div>
          <div className="contactContainer grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bar flex items-center">
              <img src={lnkdn} alt="LinkedIn" className="w-6 h-6 mr-2" />
              <a target="_blank" href="https://www.linkedin.com/in/hy-sumit/" className="text-black">
                <p>hy-sumit</p>
              </a>
            </div>
            <div className="bar flex items-center">
              <img src={git} alt="GitHub" className="w-6 h-6 mr-2" />
              <a target="_blank" href="https://github.com/hySumit" className="text-black">
                <p>hySumit</p>
              </a>
            </div>
            <div className="bar flex items-center">
              <img src={ins} alt="Instagram" className="w-6 h-6 mr-2" />
              <a target="_blank" href="https://www.instagram.com/hy.sumit_/" className="text-black">
                <p>hy.sumit_</p>
              </a>
            </div>
            <div className="bar flex items-center">
              <img src={gml} alt="Gmail" className="w-6 h-6 mr-2" />
              <a href="mailto:Sumitbth67@gmail.com" className="text-black">
                <p>S@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
