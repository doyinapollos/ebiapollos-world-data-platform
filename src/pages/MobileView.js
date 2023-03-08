/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import protechLogo from '../assets/svgs/protech-logo.svg';
import menuIcon from '../assets/svgs/menu-icon.svg';
import arrowLeft from '../assets/svgs/arrow-left.svg';
import arrowRight from '../assets/svgs/arrow-right.svg';
import graph from '../assets/svgs/graph.svg';
import blueRoundDot from '../assets/svgs/blue-round-dot.svg';
import blueRoundDot2 from '../assets/svgs/blue-round-dot2.svg';
import blueRoundDot3 from '../assets/svgs/blue-round-dot3.svg';
import blueRoundDot4 from '../assets/svgs/blue-round-dot4.svg';
import map from '../assets/svgs/map.svg';
import downArrowIcon from '../assets/svgs/down-arrow-icon.svg';
import datePicker from '../assets/svgs/date-picker.svg';
import settingIcon from '../assets/svgs/setting-icon.svg';
import ukFlag from '../assets/svgs/uk-flag.svg';
import pointedArrowUp from '../assets/svgs/pointed-arrow-up.svg';
import pointedArrowDown from '../assets/svgs/pointed-arrow-down.svg';
import ring1 from '../assets/svgs/ring1.svg';
import ring2 from '../assets/svgs/ring2.svg';
import ring3 from '../assets/svgs/ring3.svg';
import verticalLine from '../assets/svgs/vertical-line.svg';
import instagramLogo from '../assets/svgs/instagram-logo.svg';
import whatsappLogo from '../assets/svgs/whatsapp-logo.svg';
import salesforceLogo from '../assets/svgs/salesforce-logo.svg';
import homeIcon from '../assets/svgs/home-icon.svg';
import emailIcon from '../assets/svgs/email-icon.svg';
import cartIcon from '../assets/svgs/cart-icon.svg';
import notificationIcon from '../assets/svgs/notification-icon.svg';
import loveIcon from '../assets/svgs/love-icon.svg';
import dpIcon from '../assets/svgs/dp-icon.svg';

function MobileView() {
  return (
    <div>
      <nav className="w-[100%] h-[78px] border-b-2 border-solid border-gray-400 flex justify-between items-center bg-gray-300 ">
        <div className="w-[20%] h-[100%] flex justify-center items-center">
          <img className="w-[113px] h-[70px] " src={protechLogo} alt="" />
        </div>
        <div className="w-[30%] h-[100%] flex justify-center items-center">
          <img className="w-[39px] h-[39px] " src={menuIcon} alt="" />
        </div>
      </nav>{' '}
      <div className="w-[100%] h-[400px] flex flex-col justify-center items-center bg-green-300 ">
        <div className="w-[90%] h-[10%] flex justify-between items-center bg-blue-400 ">
          <p>ANALYTICS</p>
          <div className="w-[30%] h-[100%] flex justify-end items-center bg-yellow-200 ">
            <div className="w-[23px] h-[23px] bg-[#DCE7F1] rounded-[3px] flex justify-center items-center ">
              <img className="w-[6px] h-[10px] " src={arrowLeft} alt="" />
            </div>
            <div className="w-[23px] h-[23px] bg-[#DCE7F1] ml-[5px] rounded-[3px] flex justify-center items-center ">
              <img className="w-[6px] h-[10px]" src={arrowRight} alt="" />
            </div>
          </div>{' '}
        </div>{' '}
        <div className="w-[90%] h-[80%] flex flex-col justify-end items-end bg-red-700 ">
          <div className="w-[100%] h-[80%] bg-purple-600 flex justify-center items-center ">
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-green-600 flex justify-start items-start">
              <span>
                Jan
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-red-600 flex justify-start items-start">
              <span>
                Fen
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-green-600 flex justify-start items-start">
              <span>
                Mar
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-blue-600 flex justify-start items-start">
              <span>
                Apr
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-green-600 flex justify-start items-start">
              <span>
                May
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-red-600 flex justify-start items-start">
              <span>
                Jun
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-green-600 flex justify-start items-start">
              <span>
                Jul
                <br /> 22
              </span>
            </div>
            <div className="w-[40px] h-[100%] border-l-2 border-solid border-gray-400 bg-blue-600 flex justify-start items-start">
              <span>
                Aug
                <br /> 22
              </span>
            </div>
          </div>

          <div className="w-[90%] absolute ">
            <img className="w-full h-full " src={graph} alt="" />
          </div>
        </div>
      </div>{' '}
      <div className="w-[100%] h-[400px] flex flex-col justify-center items-center bg-green-700 ">
        <div className="w-[90%] h-[10%] bg-purple-300 flex justify-between items-center  ">
          <p>GLOBAL HEATMAP</p>
          <img className="w-[18px] h-[19px] " src={datePicker} alt="" />
        </div>{' '}
        <div className="w-[90%] h-[80%] flex justify-center items-center bg-purple-700 ">
          <img className="w-[95%] h-[95%] " src={map} alt="" />
        </div>{' '}
        <div className="w-[90%] h-[10%] flex justify-end items-center bg-blue-400 ">
          <div className="w-[60%] h-[100%] text-[10px] flex justify-around items-center bg-yellow-200 ">
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
      <div className="w-[100%] h-[550px] text-[12px] bg-green-400 flex flex-col justify-center items-center  ">
        <div className="w-[90%] h-[10%] bg-purple-300 flex justify-between items-center  ">
          <p className="text-[15px] ">TRENDING LOCATIONS</p>
          <div className="w-[50px] h-full flex justify-around items-center ">
            <img className="w-[17px] h-[17px] " src={settingIcon} alt="" />
            <img className="w-[10px] h-[15px] " src={menuIcon} alt="" />
          </div>
        </div>{' '}
        <div className="w-[90%] h-[10%] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-start items-center bg-red-500 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[10%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-700 ">
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
      </div>{' '}
      <div className="w-[100%] h-[320PX]  flex flex-col justify-center items-center bg-green-300 ">
        <div className="w-[90%] h-[15%]  bg-red-300 flex justify-between items-center ">
          <p className="text-[15px] ">CUSTOMER GROWTH</p>
          <div className="w-[50px] h-full flex justify-around items-center ">
            <img className="w-[17px] h-[17px] " src={settingIcon} alt="" />
            <img className="w-[10px] h-[15px] " src={menuIcon} alt="" />
          </div>
        </div>{' '}
        <div className="w-[90%] h-[70%] flex flex-col justify-center items-center bg-red-700 ">
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
        <div className="w-[90%] h-[15%] bg-red-500 flex justify-around items-center ">
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
      <div className="w-[100%] h-[300px] flex flex-col justify-center items-center bg-green-700 ">
        <div className="w-[90%] h-[15%] bg-purple-300 flex justify-between items-center  ">
          <p className="text-[15px] ">SALES DATA</p>
          <div className="w-[50px] h-full flex justify-around items-center ">
            <img className="w-[17px] h-[17px] " src={settingIcon} alt="" />
            <img className="w-[10px] h-[15px] " src={menuIcon} alt="" />
          </div>
        </div>{' '}
        <div className="w-[90%] h-[80%] bg-purple-700 flex flex-col justify-end items-center ">
          <div className="w-[90%] h-[85%] bg-green-400 flex justify-between items-end ">
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
          <div className="w-[90%] h-[15%] bg-yellow-300 flex justify-between items-center ">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
          </div>
        </div>{' '}
        <div className="w-[90%] h-[15%] bg-purple-500 flex justify-around items-center ">
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
      <div className="w-[100%] h-[150px] flex flex-col justify-col items-center bg-pink-400 ">
        <div className="w-[90%] h-[40%] bg-purple-300 flex justify-between items-center  ">
          <p className="text-[15px] ">REVENUE</p>
          <div className="w-[50px] h-full flex justify-around items-center ">
            <img className="w-[17px] h-[17px] " src={settingIcon} alt="" />
            <img className="w-[10px] h-[15px] " src={menuIcon} alt="" />
          </div>
        </div>{' '}
        <div className="w-[90%] h-[50%] flex justify-start items-center bg-pink-700 ">
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
      </div>
      <div className="w-[100%] h-[250px] bg-yellow-200 flex flex-col justify-center items-center ">
        <div className="w-[90%] h-[23%] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-start items-center bg-red-500 ">
            <p> Sources </p>
            <img
              className="w-[10px] h-[5px] ml-[5px] mt-[5px] "
              src={downArrowIcon}
              alt=""
            />
          </div>{' '}
          <div className="w-[33%] h-[100%] flex justify-start items-center ">
            <p> Quotes </p>{' '}
            <img
              className="w-[10px] h-[5px] ml-[5px] mt-[5px]"
              src={downArrowIcon}
              alt=""
            />
          </div>{' '}
          <div className="w-[34%] h-[100%] flex justify-start items-center  ">
            <p> Customer </p>{' '}
            <img
              className="w-[10px] h-[5px] ml-[5px] mt-[5px]"
              src={downArrowIcon}
              alt=""
            />
          </div>{' '}
        </div>{' '}
        <div className="w-[90%] h-[23%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-start items-center bg-red-700 ">
            <img className="w-[32px] h-[32px] " src={instagramLogo} alt="" />
          </div>{' '}
          <div className="w-[33%] h-[100%] flex justify-start items-center  ">
            <p> £46, 234 </p>{' '}
          </div>{' '}
          <div className="w-[34%] h-[100%] flex justify-start items-center  ">
            <p> mthurn @meta.com </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="w-[90%] h-[23%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-start items-center bg-red-700 ">
            <img className="w-[32px] h-[32px] " src={salesforceLogo} alt="" />
          </div>{' '}
          <div className="w-[33%] h-[100%] flex justify-start items-center  ">
            <p> £46, 234 </p>{' '}
          </div>{' '}
          <div className="w-[34%] h-[100%] flex justify-start items-center  ">
            <p> mthurn @meta.com </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className="w-[90%] h-[23%] text-[14px] flex justify-center items-center bg-blue-600 ">
          <div className="w-[33%] h-[100%] flex justify-start items-center bg-red-700 ">
            <img className="w-[32px] h-[32px] " src={whatsappLogo} alt="" />
          </div>{' '}
          <div className="w-[33%] h-[100%] flex justify-start items-center  ">
            <p> £46, 234 </p>{' '}
          </div>{' '}
          <div className="w-[34%] h-[100%] flex justify-start items-center  ">
            <p> mthurn @meta.com </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>
      <div className="w-[100%] h-[60px] flex justify-around items-center bg-blue-600  ">
        <div className="w-[90%] h-[100%] flex justify-around items-center bg-blue-200 ">
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

export default MobileView;
