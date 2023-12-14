import React from "react";
import facebookIcon from "../../assets/social-icons/facebook.svg";
import linkedInIcon from "../../assets/social-icons/linkedin.svg";
import twitterIcon from "../../assets/social-icons/twitter.svg";

const MemberCard = ({
  img,
  name,
  designation,
  description,
  socialLinks
}) => {
  return (
    <div className="member-card flex flex-col items-center justify-around px-4 pb-4 hover:shadow-3xl  hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-lg">
      <div className="py-4 px-16 relative">
        <img
          className="member-img transition-shadow duration-100 w-[150px] absolute top-[-80px] left-0 rounded-full"
          src={img}
          alt={`${name}-Profile Image`}
        />
      </div>
      <div className="text-center mt-5">
        <h3 className="font-medium  text-[18px]">{name}</h3>
        <p className="font-light text-[12px]">{designation}</p>
      </div>
      <p className="text-center">{description}</p>
      <div className="flex gap-3 py-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            {index === 0 && <img className="w-8" src={facebookIcon}/> }
            {index === 1 && <img className="w-8" src={linkedInIcon}/> }
            {index === 2 && <img className="w-8" src={twitterIcon}/> }
          </a>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;
