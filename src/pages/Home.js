/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import React from 'react';
import downArrowIcon from '../assets/svgs/down-arrow-icon.svg';
import instagramLogo from '../assets/svgs/instagram-logo.svg';
import whatsappLogo from '../assets/svgs/whatsapp-logo.svg';
import salesforceLogo from '../assets/svgs/salesforce-logo.svg';
import menuIcon from '../assets/svgs/menu-icon.svg';
import languageIcon from '../assets/svgs/language-icon.svg';
import threeDots from '../assets/svgs/three-dots.svg';
import manPic from '../assets/svgs/man-pic.svg';
import protechLogo from '../assets/svgs/protech-logo.svg';
import arrowDown from '../assets/svgs/arrow-down.svg';
import profilePic from '../assets/images/profile-picture2.jpg';
import settingIcon from '../assets/svgs/setting-icon.svg';
import blueRoundDot from '../assets/svgs/blue-round-dot.svg';
import blueRoundDot2 from '../assets/svgs/blue-round-dot2.svg';
import blueRoundDot3 from '../assets/svgs/blue-round-dot3.svg';
import blueRoundDot4 from '../assets/svgs/blue-round-dot4.svg';
import arrowLeft from '../assets/svgs/arrow-left.svg';
import arrowRight from '../assets/svgs/arrow-right.svg';
import ukFlag from '../assets/svgs/uk-flag.svg';
import pointedArrowUp from '../assets/svgs/pointed-arrow-up.svg';
import pointedArrowDown from '../assets/svgs/pointed-arrow-down.svg';
import map from '../assets/svgs/map.svg';
import ring1 from '../assets/svgs/ring1.svg';
import ring2 from '../assets/svgs/ring2.svg';
import ring3 from '../assets/svgs/ring3.svg';
import graph from '../assets/svgs/graph.svg';
import verticalLine from '../assets/svgs/vertical-line.svg';

function Home() {
  return (
    <div className="w-full h-auto ">
      <div className="w-[100%] h-[100%] font-inter flex justify-center items-center  ">
        <div className="w-[25%] h-[1114px] border-r border-solid border-[#DDE3E9] flex flex-col justify-start items-center ">
          <div className="w-[80%] h-[8%] flex justify-start items-center ">
            <img className="w-[33px] h-[21px] " src={menuIcon} alt="" />
            <button className="w-[82px] h-[27px] border border-solid border-[#DDE3E9] rounded-[5px] ml-[7px] flex justify-around items-center ">
              <img className="w-[18px] h-[17px] " src={languageIcon} alt="" />
              <p className="text-[12px] ">English</p>
              <img className="w-[11px] h-[10px] " src={downArrowIcon} alt="" />
            </button>
          </div>
          <form className="w-[100%] h-[36%] flex flex-col justify-around items-center ">
            <div className="w-[80%] ">
              <p className="mb-[5px] ">LOCATION</p>
              <input
                className="w-[100%] h-[42px] rounded-[5px] pl-[5px] border border-solid border-[#DDE3E9] "
                type="text"
                placeholder="Enter Location"
              />
            </div>
            <div className="w-[80%] ">
              <p className="mb-[5px]">DATE RANGE</p>
              <input
                className="w-[100%] h-[42px] rounded-[5px] pl-[5px] border border-solid border-[#DDE3E9] "
                type="text"
                placeholder="Sellect Dates"
              />
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
                  className="w-[47%] h-[42px] text-[12px] rounded-[5px] pl-[5px] border border-solid border-[#DDE3E9] "
                  type="text"
                  placeholder="Staff Count"
                />
                <input
                  className="w-[47%] h-[42px] text-[12px] rounded-[5px] pl-[5px] border border-solid border-[#DDE3E9]  "
                  type="text"
                  placeholder="Revenue Vol."
                />
              </div>
            </div>
            <button className="w-[80%] h-[42px] text-white bg-[#0094FF] rounded-[5px] ">
              Search
            </button>
          </form>
          <hr className="w-[80%] my-[20px] border border-solid border-[#0094FF] " />
          <div className="w-[80%] h-[50%] ">
            <div className="w-[100%] h-[10%] flex justify-between items-center ">
              <p> TOP CUSTOMERS </p> <img src={threeDots} alt="" />
            </div>
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img
                  className="w-[32px] h-[32px] rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> ebiapollos </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img className="w-[32px] h-[32px] " src={manPic} alt="" />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> Ronald Richards </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img className="w-[32px] h-[32px] " src={manPic} alt="" />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> Ronald Richards </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img
                  className="w-[32px] h-[32px] rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> ebiapollos </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img
                  className="w-[32px] h-[32px] rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> ebiapollos </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img className="w-[32px] h-[32px] " src={manPic} alt="" />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> Ronald Richards </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img
                  className="w-[32px] h-[32px] rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> ebiapollos </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img className="w-[32px] h-[32px] " src={manPic} alt="" />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> Ronald Richards </p>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[100%] h-[10%] text-[14px] flex justify-start items-center ">
              <div className="w-[17%] h-[100%] flex justify-start items-center ">
                <img
                  className="w-[32px] h-[32px] rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>{' '}
              <div className=" flex justify-start items-center ">
                <p> ebiapollos </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </div>
        <div className="w-[75%] h-full flex flex-col justify-start items-center ">
          <nav className="w-[100%] h-[80px] px-[10px] mb-[20px] border-b border-solid border-[#DDE3E9] flex justify-between items-center bg-white ">
            <div className="w-[20%] h-[100%] flex justify-start items-center">
              <img className="w-[113px] h-[70px] " src={protechLogo} alt="" />
            </div>
            <div className="w-[20%] h-[100%] flex justify-around items-center">
              <p>ebiapollos</p>
              <img src={arrowDown} alt="" />
              <img
                className="w-[39px] h-[39px] rounded-[50px] "
                src={profilePic}
                alt=""
              />
            </div>
          </nav>{' '}
          <div className="w-[95%] h-[364px] flex justify-around items-center ">
            <div className="w-[47%] h-[100%] border border-solid border-[#DDE3E9] flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[10%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-between items-center  ">
                <p>ANALYTICS</p>
                <button className="w-[112px] h-[28px] text-[12px] text-[#7F8694] rounded-[5px] border border-solid border-[#DDE3E9] flex justify-around items-center ">
                  1 Dec - 20 Jan
                  <img
                    className="w-[10px] h-[5px] "
                    src={downArrowIcon}
                    alt=""
                  />
                </button>
              </div>
              <div className="w-[100%] h-[10%] px-[10px] flex justify-end items-center ">
                <div className="w-[20%] h-[100%] flex justify-end items-center ">
                  <div className="w-[23px] h-[23px] bg-[#DDE3E9] rounded-[3px] flex justify-center items-center ">
                    <img className="w-[6px] h-[10px] " src={arrowLeft} alt="" />
                  </div>
                  <div className="w-[23px] h-[23px] bg-[#DDE3E9] ml-[5px] rounded-[3px] flex justify-center items-center ">
                    <img className="w-[6px] h-[10px]" src={arrowRight} alt="" />
                  </div>
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[80%] flex flex-col justify-end items-end ">
                <div className="w-[90%] h-[80%] text-[13px] flex justify-center items-center ">
                  <div className="w-[45px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Jan
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[50px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Fen
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[45px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Mar
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[50px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Apr
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[45px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      May
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[50px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Jun
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[45px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Jul
                      <br /> 22
                    </span>
                  </div>
                  <div className="w-[50px] h-[100%] border-l border-solid border-[#DDE3E9] flex justify-start items-start">
                    <span>
                      Aug
                      <br /> 22
                    </span>
                  </div>
                </div>

                <div className="w-[33%] absolute ">
                  <img className="w-full h-full " src={graph} alt="" />
                </div>
              </div>
            </div>{' '}
            <div className="w-[47%] h-[100%] border border-solid border-[#DDE3E9] flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[10%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-between items-center  ">
                <p>GLOBAL HEATMAP</p>
                <button className="w-[112px] h-[28px] text-[12px] text-[#7F8694] rounded-[5px] border border-solid border-[#DDE3E9] flex justify-around items-center ">
                  1 Dec - 20 Jan
                  <img
                    className="w-[10px] h-[5px] "
                    src={downArrowIcon}
                    alt=""
                  />
                </button>
              </div>{' '}
              <div className="w-[100%] h-[80%] flex justify-center items-center ">
                <img className="w-[95%] h-[95%] " src={map} alt="" />
              </div>{' '}
              <div className="w-[100%] h-[10%] flex justify-end items-center ">
                <div className="w-[45%] h-[100%] text-[10px] flex justify-around items-center ">
                  <div className="flex justify-around items-center">
                    <img
                      className="w-[6px] h-[6px] mr-[5px] "
                      src={blueRoundDot}
                      alt=""
                    />
                    <p>1m+</p>
                  </div>
                  <div className="flex justify-around items-center">
                    <img
                      className="w-[6px] h-[6px] mr-[5px]"
                      src={blueRoundDot2}
                      alt=""
                    />
                    <p>500k+</p>
                  </div>
                  <div className="flex justify-around items-center">
                    <img
                      className="w-[6px] h-[6px] mr-[5px]"
                      src={blueRoundDot3}
                      alt=""
                    />
                    <p>100k+</p>
                  </div>
                  <div className="flex justify-around items-center">
                    <img
                      className="w-[6px] h-[6px] mr-[5px]"
                      src={blueRoundDot4}
                      alt=""
                    />
                    <p className="flex justify-center items-center ">
                      <img
                        className="w-[6px] h-[7px] mr-[1px]"
                        src={arrowLeft}
                        alt=""
                      />
                      5k
                    </p>
                  </div>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="w-[95%] h-[650px] mt-[20px] flex justify-center items-center ">
            <div className="w-[65%] h-[100%] flex flex-col justify-start items-center ">
              <div className="w-[98%] h-[273px] text-[12px] flex justify-around items-center ">
                <div className="w-[47%] h-[100%] border border-solid border-[#DDE3E9]  flex flex-col justify-center items-center ">
                  <div className="w-[100%] h-[15%] px-[10px]  border-b border-solid border-[#DDE3E9] flex justify-between items-center ">
                    <p className="text-[15px] ">CUSTOMER GROWTH</p>
                    <div className="w-[50px] h-full flex justify-around items-center ">
                      <img
                        className="w-[17px] h-[17px] "
                        src={settingIcon}
                        alt=""
                      />
                      <img
                        className="w-[10px] h-[15px] "
                        src={menuIcon}
                        alt=""
                      />
                    </div>
                  </div>{' '}
                  <div className="w-[100%] h-[70%] flex flex-col justify-center items-center ">
                    <img className="absolute" src={ring1} alt="" />
                    <img className="absolute" src={ring2} alt="" />
                    <img className="absolute" src={ring3} alt="" />
                    <div>
                      <span>
                        365 <br />
                        days
                      </span>
                    </div>
                  </div>{' '}
                  <div className="w-[100%] h-[15%]  border-t border-solid border-[#DDE3E9] flex justify-around items-center ">
                    <div className="flex justify-around items-center">
                      <img
                        className="w-[6px] h-[6px] mr-[5px] "
                        src={blueRoundDot}
                        alt=""
                      />
                      <p>Weekly</p>
                    </div>
                    <div className="flex justify-around items-center">
                      <img
                        className="w-[6px] h-[6px] mr-[5px]"
                        src={blueRoundDot2}
                        alt=""
                      />
                      <p>Monthly</p>
                    </div>
                    <div className="flex justify-around items-center">
                      <img
                        className="w-[6px] h-[6px] mr-[5px]"
                        src={blueRoundDot3}
                        alt=""
                      />
                      <p>Yearly</p>
                    </div>
                  </div>{' '}
                </div>{' '}
                <div className="w-[47%] h-[100%]  border border-solid border-[#DDE3E9] flex flex-col justify-center items-center ">
                  <div className="w-[100%] h-[15%] px-[10px]  border-b border-solid border-[#DDE3E9] flex justify-between items-center  ">
                    <p className="text-[15px] ">SALES DATA</p>
                    <div className="w-[50px] h-full flex justify-around items-center ">
                      <img
                        className="w-[17px] h-[17px] "
                        src={settingIcon}
                        alt=""
                      />
                      <img
                        className="w-[10px] h-[15px] "
                        src={menuIcon}
                        alt=""
                      />
                    </div>
                  </div>{' '}
                  <div className="w-[100%] h-[80%] flex flex-col justify-end items-center ">
                    <div className="w-[90%] h-[85%] flex justify-between items-end ">
                      <img className="h-[28px] " src={verticalLine} alt="" />
                      <img className="h-[41px] " src={verticalLine} alt="" />
                      <img className="h-[50px] " src={verticalLine} alt="" />
                      <img className="h-[70px] " src={verticalLine} alt="" />
                      <img className="h-[91px] " src={verticalLine} alt="" />
                      <img className="h-[79px] " src={verticalLine} alt="" />
                      <img className="h-[62px] " src={verticalLine} alt="" />
                      <img className="h-[95px] " src={verticalLine} alt="" />
                      <img className="h-[82px] " src={verticalLine} alt="" />
                      <img className="h-[86px] " src={verticalLine} alt="" />
                      <img className="h-[86px] " src={verticalLine} alt="" />
                      <img className="h-[86px] " src={verticalLine} alt="" />
                      <img className="h-[74px] " src={verticalLine} alt="" />
                      <img className=" h-[106px] " src={verticalLine} alt="" />
                      <img className=" h-[124px] " src={verticalLine} alt="" />
                    </div>
                    <div className="w-[90%] h-[15%] flex justify-between items-center ">
                      <span>01</span>
                      <span>02</span>
                      <span>03</span>
                      <span>04</span>
                      <span>05</span>
                      <span>06</span>
                    </div>
                  </div>{' '}
                  <div className="w-[100%] h-[15%]  border-t border-solid border-[#DDE3E9] flex justify-around items-center ">
                    <div className="flex justify-around items-center">
                      <img
                        className="w-[6px] h-[6px] mr-[5px] "
                        src={blueRoundDot}
                        alt=""
                      />
                      <p>Weekly</p>
                    </div>
                    <div className="flex justify-around items-center">
                      <img
                        className="w-[6px] h-[6px] mr-[5px]"
                        src={blueRoundDot2}
                        alt=""
                      />
                      <p>Monthly</p>
                    </div>
                    <div className="flex justify-around items-center">
                      <img
                        className="w-[6px] h-[6px] mr-[5px]"
                        src={blueRoundDot3}
                        alt=""
                      />
                      <p>Yearly</p>
                    </div>
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className="w-[95%] h-[350px] mt-[20px] text-[12px]  border border-solid border-[#DDE3E9] flex flex-col justify-start items-center ">
                <div className="w-[100%] h-[15%] px-[10px]  border-b border-solid border-[#DDE3E9] flex justify-between items-center ">
                  <p> NEW LEADS </p>{' '}
                  <div className="w-[20%] h-[100%] flex justify-end items-center ">
                    <div className="w-[23px] h-[23px] bg-[#DCE7F1] rounded-[3px] flex justify-center items-center ">
                      <img
                        className="w-[6px] h-[10px] "
                        src={arrowLeft}
                        alt=""
                      />
                    </div>
                    <div className="w-[23px] h-[23px] bg-[#DCE7F1] ml-[5px] rounded-[3px] flex justify-center items-center ">
                      <img
                        className="w-[6px] h-[10px]"
                        src={arrowRight}
                        alt=""
                      />
                    </div>
                  </div>{' '}
                </div>{' '}
                <div className="w-[100%] h-[15%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-center items-center ">
                  <div className="w-[15%] h-[100%] flex justify-start items-center ">
                    <p> Sources </p>{' '}
                    <img
                      className="w-[10px] h-[5px] ml-[5px] mt-[5px] "
                      src={downArrowIcon}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[20%] h-[100%] flex justify-start items-center ">
                    <p> Date </p>{' '}
                    <img
                      className="w-[10px] h-[5px] ml-[5px] mt-[5px]"
                      src={downArrowIcon}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[15%] h-[100%] flex justify-start items-center  ">
                    <p> Quote </p>{' '}
                    <img
                      className="w-[10px] h-[5px] ml-[5px] mt-[5px]"
                      src={downArrowIcon}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Manager </p>{' '}
                    <img
                      className="w-[10px] h-[5px] ml-[5px] mt-[5px]"
                      src={downArrowIcon}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Customer </p>{' '}
                    <img
                      className="w-[10px] h-[5px] ml-[5px] mt-[5px]"
                      src={downArrowIcon}
                      alt=""
                    />
                  </div>{' '}
                </div>{' '}
                <div className="w-[100%] h-[15%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-center items-center ">
                  <div className="w-[15%] h-[100%] flex justify-start items-center ">
                    <img
                      className="w-[32px] h-[32px] "
                      src={instagramLogo}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[20%] h-[100%] flex justify-start items-center ">
                    <p> 18 Jan 2023 </p>{' '}
                  </div>{' '}
                  <div className="w-[15%] h-[100%] flex justify-start items-center  ">
                    <p> £46, 234 </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Francesca Simonz </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> mthurn @meta.com </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="w-[100%] h-[15%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-center items-center ">
                  <div className="w-[15%] h-[100%] flex justify-start items-center ">
                    <img
                      className="w-[32px] h-[32px] "
                      src={salesforceLogo}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[20%] h-[100%] flex justify-start items-center ">
                    <p> 18 Jan 2023 </p>{' '}
                  </div>{' '}
                  <div className="w-[15%] h-[100%] flex justify-start items-center  ">
                    <p> £46, 234 </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Francesca Simonz </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> mthurn @meta.com </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="w-[100%] h-[15%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-center items-center ">
                  <div className="w-[15%] h-[100%] flex justify-start items-center ">
                    <img
                      className="w-[32px] h-[32px] "
                      src={whatsappLogo}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[20%] h-[100%] flex justify-start items-center ">
                    <p> 18 Jan 2023 </p>{' '}
                  </div>{' '}
                  <div className="w-[15%] h-[100%] flex justify-start items-center  ">
                    <p> £46, 234 </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Francesca Simonz </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> mthurn @meta.com </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="w-[100%] h-[15%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-center items-center ">
                  <div className="w-[15%] h-[100%] flex justify-start items-center ">
                    <img
                      className="w-[32px] h-[32px] "
                      src={instagramLogo}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[20%] h-[100%] flex justify-start items-center ">
                    <p> 18 Jan 2023 </p>{' '}
                  </div>{' '}
                  <div className="w-[15%] h-[100%] flex justify-start items-center  ">
                    <p> £46, 234 </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Francesca Simonz </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> mthurn @meta.com </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="w-[100%] h-[15%] px-[10px] flex justify-center items-center ">
                  <div className="w-[15%] h-[100%] flex justify-start items-center ">
                    <img
                      className="w-[32px] h-[32px] "
                      src={salesforceLogo}
                      alt=""
                    />
                  </div>{' '}
                  <div className="w-[20%] h-[100%] flex justify-start items-center ">
                    <p> 18 Jan 2023 </p>{' '}
                  </div>{' '}
                  <div className="w-[15%] h-[100%] flex justify-start items-center  ">
                    <p> £46, 234 </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> Francesca Simonz </p>{' '}
                  </div>{' '}
                  <div className="w-[25%] h-[100%] flex justify-start items-center  ">
                    <p> mthurn @meta.com </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="w-[35%] h-[100%] mr-[13px] border border-solid border-[#DDE3E9] text-[12px] ">
              <div className="w-[100%] h-[5%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-between items-center  ">
                <p className="text-[15px] ">TRENDING LOCATIONS</p>
                <div className="w-[50px] h-full flex justify-around items-center ">
                  <img
                    className="w-[17px] h-[17px] "
                    src={settingIcon}
                    alt=""
                  />
                  <img className="w-[10px] h-[15px] " src={menuIcon} alt="" />
                </div>
              </div>{' '}
              <div className="w-[100%] h-[7%] px-[10px] border-b border-solid border-[#DDE3E9] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> COUNTRY </p>{' '}
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> CITY </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> VISITS </p>{' '}
                  <img
                    className="w-[10px] h-[5px] ml-[15px] mt-[2px]"
                    src={downArrowIcon}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowUp}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowDown}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowDown}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowDown}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowUp}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowDown}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowUp}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowDown}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[7%] border-b border-solid border-[#DDE3E9] text-[14px] flex justify-center items-center ">
                <div className="w-[33%] h-[100%] flex justify-center items-center ">
                  <img className="w-[28px] h-[20px] " src={ukFlag} alt="" />
                </div>{' '}
                <div className="w-[33%] h-[100%] flex justify-start items-center ">
                  <p> London </p>{' '}
                </div>{' '}
                <div className="w-[34%] h-[100%] flex justify-start items-center  ">
                  <p> 95554 </p>{' '}
                  <img
                    className="w-[10px] h-[10px] ml-[10px] mt-[2px]"
                    src={pointedArrowUp}
                    alt=""
                  />
                </div>{' '}
              </div>{' '}
              <div className="w-[100%] h-[5%] mt-[20px] px-[10px] border border-solid border-[#DDE3E9] flex justify-between items-center  ">
                <p className="text-[15px] ">REVENUE</p>
                <div className="w-[50px] h-full flex justify-around items-center ">
                  <img
                    className="w-[17px] h-[17px] "
                    src={settingIcon}
                    alt=""
                  />
                  <img className="w-[10px] h-[15px] " src={menuIcon} alt="" />
                </div>
              </div>{' '}
              <div className="w-[100%] h-[10%] px-[10px] border-x border-b border-solid border-[#DDE3E9] flex justify-start items-center ">
                <div>
                  <p className="mb-[2px] text-[14px] ">Year To Date</p>
                  <div className="flex justify-start items-center  ">
                    <p className="text-[14px] ">£53288</p>
                    <p className="text-[12px] ml-[5px]">+ 45%</p>
                  </div>
                </div>
                <div>
                  <div className="ml-[25px] ">
                    <p className="mb-[2px] text-[14px] ">Monthly</p>
                    <div className="flex justify-start items-center ">
                      <p className="text-[14px]  ">£8628</p>
                      <p className="text-[12px] ml-[5px] ">+ 12%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default Home;
