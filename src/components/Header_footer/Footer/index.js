import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaEdge } from "react-icons/fa";
import { MdAccountBalance, MdAlarm } from "react-icons/md";

const Footer = ({ data }) => {
  return data.siteData ? (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">Waves</div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact Information</h2>
            <div className="business_nfo">
              <div className="tag">
                <MdAccountBalance className="icon" />
                <div className="nfo">
                  <div>Address</div>
                  <div>{data.siteData[0].address}</div>
                </div>
              </div>
              <div className="tag">
                <IoIosCall className="icon" />
                <div className="nfo">
                  <div>Phone</div>
                  <div>{data.siteData[0].phone}</div>
                </div>
              </div>
              <div className="tag">
                <MdAlarm className="icon" />
                <div className="nfo">
                  <div>Working hourse</div>
                  <div>{data.siteData[0].hours}</div>
                </div>
              </div>
              <div className="tag">
                <FaEdge className="icon" />
                <div className="nfo">
                  <div>Email</div>
                  <div>{data.siteData[0].email}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <h2>Be the first to know.</h2>
            <div>
              Get all the infomation on events, sales and offers. You can't miss
              out on.
            </div>
          </div>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
