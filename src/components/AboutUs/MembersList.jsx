import React from "react";
import { Link } from "react-router-dom";
import {aboutUsMembers} from '../../constants/team-members';
import MemberCard from "./MemberCard";

const MembersList = () => {
  
  return (
    <React.Fragment>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-y-24 max-md:gap-y-24">
        {aboutUsMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            img={member.img}
            designation={member.designation} 
            description={member.description}
            //Array of Social Links
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
      <Link to={"/about"}>
        <button className="mt-4 border px-4 py-2 rounded-full border-primary text-primary hover:bg-primary hover:text-slate-800 transition-colors">See More</button>
      </Link>
    </React.Fragment>
  );
};

export default MembersList;
