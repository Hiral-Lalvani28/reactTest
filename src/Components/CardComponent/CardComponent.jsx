import "../../Components/CardComponent/CardComponent.scss";
import React from "react";
import { Badge} from "reactstrap";
import { BsFillEyeFill, BsWhatsapp, BsTwitter } from "react-icons/bs";
import {
  AiOutlineLike,
  AiFillFacebook,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";

const CardComponent = (props) => {
  console.log(props)
  const cardData = props.cardData;
  return (
    <div className="cards">
      <div className="cards-content">
        <div>
          <img className="img-part" src="https://picsum.photos/200" />
        </div>
        <div className="data-part">
          <Badge color="" style={{ backgroundColor: "#6480FE" }}>
            RHAME
          </Badge>
          <div className="card-title">{cardData.title}</div>
          <div className="card-subtitle">{cardData.body}</div>
          <div class="margin-class">
            <div className="icons">
              <div>
                32 <BsFillEyeFill />
              </div>
              <hr />
              <div>
                10 <AiOutlineLike />
              </div>
              <hr />
              <div>
                0 <BiMessageRounded />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-footer">
        <div className="social-btn">
          <IoShareSocialSharp />
        </div>
        <div className="social-btn">
          <AiFillFacebook />
        </div>
        <div className="social-btn">
          <BsTwitter />
        </div>
        <div className="social-btn">
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
