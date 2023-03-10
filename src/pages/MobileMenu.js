/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import protechLogo from '../assets/svgs/protech-logo.svg';
import menuIcon from '../assets/svgs/menu-icon.svg';
import homeIcon from '../assets/svgs/home-icon.svg';
import emailIcon from '../assets/svgs/email-icon.svg';
import cartIcon from '../assets/svgs/cart-icon.svg';
import notificationIcon from '../assets/svgs/notification-icon.svg';
import loveIcon from '../assets/svgs/love-icon.svg';
import dpIcon from '../assets/svgs/dp-icon.svg';
import threeDots from '../assets/svgs/three-dots.svg';
import manPic from '../assets/svgs/man-pic.svg';
import profilePic from '../assets/images/profile-picture2.jpg';
import datePicker from '../assets/svgs/date-picker.svg';
import locationIcon from '../assets/svgs/location-icon.svg';

function MobileMenu() {
  return (
    <div className="md:hidden lg:hidden ">
      <nav className="hidden w-[100%] h-[78px] border-b border-solid border-[#DDE3E9] flex justify-between items-center bg-[#ffffff] ">
        <div className="w-[30%] h-[100%] flex justify-center items-center">
          <img className="w-[113px] h-[70px] " src={protechLogo} alt="" />
        </div>
        <div className="w-[30%] h-[100%] flex justify-center items-center">
          <img className="w-[39px] h-[39px] " src={menuIcon} alt="" />
        </div>
      </nav>{' '}
      <form className="w-[100%] h-[500px] flex flex-col justify-around items-center bg-[#F5F5F5]  ">
        <div className="w-[80%] ">
          <p className="mb-[5px] ">LOCATION</p>
          <div className="w-[100%] h-[45px] flex justify-center items-center rounded-[5px] border border-solid border-[#DDE3E9] ">
            <div className="w-[10%] h-[42px] flex justify-center items-center bg-[#ffffff] ">
              <img className="w-[18px] h-[19px] " src={locationIcon} alt="" />
            </div>
            <input
              className="w-[90%] h-[42px] rounded-[5px]   "
              type="text"
              placeholder="Enter Location "
            />
          </div>
        </div>
        <div className="w-[80%] ">
          <p className="mb-[5px]">DATE RANGE</p>
          <div className="w-[100%] h-[45px] flex justify-center items-center rounded-[5px] border border-solid border-[#DDE3E9] ">
            <div className="w-[10%] h-[42px] flex justify-center items-center bg-[#ffffff] ">
              <img className="w-[18px] h-[19px] " src={datePicker} alt="" />
            </div>
            <input
              className="w-[90%] h-[42px] rounded-[5px]   "
              type="text"
              placeholder=" Sellect Dates"
            />
          </div>
        </div>
        <div className="w-[80%] flex justify-start items-center ">
          <div>
            <p className="mb-[5px]">VIP</p>
            <div className="w-[45px] h-[27px] flex justify-start items-center rounded-[66px] bg-[#0094FF] ">
              <input
                type="radio"
                id="option1"
                name="options"
                value="option1"
                className="w-[17px] h-[17px] "
              />
              <label htmlFor="option1"></label>
            </div>
          </div>
          <div>
            <div className="ml-[25px] ">
              <p className="mb-[5px]">INFLUENCER</p>
              <div className="w-[45px] h-[27px] flex justify-end items-center rounded-[66px] border-2 border-solid border-[#0094FF] ">
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  className="w-[17px] h-[17px] "
                />
                <label htmlFor="option1"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] ">
          <p className="mb-[5px]">COMPANY TYPE</p>
          <div className="flex justify-between items-center ">
            <input
              className="w-[47%] h-[42px] rounded-[5px] pl-[5px] border border-solid border-[#DDE3E9] "
              type="text"
              placeholder="Staff Count"
            />
            <input
              className="w-[47%] h-[42px] rounded-[5px] pl-[5px] border border-solid border-[#DDE3E9]  "
              type="text"
              placeholder="Revenue Vol."
            />
          </div>
        </div>
        <button className="w-[80%] h-[42px] bg-[#0094FF] rounded-[5px] text-[#ffffff] ">
          Search
        </button>
      </form>
      <div className="w-[100%] h-auto flex flex-col justify-center items-center bg-[#F5F5F5] ">
        <div className="w-[80%] h-[50px] flex justify-between items-center ">
          <p> TOP CUSTOMERS </p> <img src={threeDots} alt="" />
        </div>
        <div className="w-[80%] h-[60px] flex justify-between items-center  ">
          <div className="w-[50%] h-[100%]  flex justify-start items-center ">
            <div className="w-[30%] h-[100%] flex justify-start items-center  ">
              <img
                className="w-[32px] h-[32px] rounded-[50px] "
                src={profilePic}
                alt=""
              />
            </div>{' '}
            <div className=" flex justify-start items-center text-[14px] ">
              <p> ebiapollos </p>{' '}
            </div>{' '}
          </div>{' '}
          <div className="w-[50%] h-[100%] text-[14px] flex justify-start items-center ">
            <div className="w-[30%] h-[100%] flex justify-start items-center ">
              <img className="w-[32px] h-[32px] " src={manPic} alt="" />
            </div>{' '}
            <div className=" flex justify-start items-center ">
              <p> Ronald Richards </p>{' '}
            </div>{' '}
          </div>{' '}
        </div>
        <div className="w-[80%] h-[60px] flex justify-between items-center  ">
          <div className="w-[50%] h-[100%]  flex justify-start items-center ">
            <div className="w-[30%] h-[100%] flex justify-start items-center ">
              <img
                className="w-[32px] h-[32px] rounded-[50px] "
                src={profilePic}
                alt=""
              />
            </div>{' '}
            <div className=" flex justify-start items-center text-[14px] ">
              <p> ebiapollos </p>{' '}
            </div>{' '}
          </div>{' '}
          <div className="w-[50%] h-[100%] text-[14px] flex justify-start items-center ">
            <div className="w-[30%] h-[100%] flex justify-start items-center ">
              <img className="w-[32px] h-[32px] " src={manPic} alt="" />
            </div>{' '}
            <div className=" flex justify-start items-center ">
              <p> Ronald Richards </p>{' '}
            </div>{' '}
          </div>{' '}
        </div>
        <button className="w-[80%] h-[42px] bg-[#ffffff] text-[#0094FF] my-[25px] rounded-[5px] border border-solid border-[#0094FF] ">
          View More
        </button>
      </div>
      <div className="w-[100%] h-[60px] bg-[#F5F5F5]  flex justify-around items-center  border-y border-solid border-[#0094FF] ">
        <div className="w-[90%] h-[100%] flex justify-around items-center ">
          <img className="w-[21px] h-[23px] " src={homeIcon} alt="" />
          <img className="w-[21px] h-[23px] " src={emailIcon} alt="" />
          <img className="w-[21px] h-[23px] " src={cartIcon} alt="" />
          <img className="w-[21px] h-[23px] " src={notificationIcon} alt="" />
          <img className="w-[21px] h-[23px] " src={loveIcon} alt="" />
          <img className="w-[21px] h-[23px] " src={dpIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
