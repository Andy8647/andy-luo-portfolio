import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";
import { log } from "../../utils/log";

const Socials = ({ className }) => {


  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => {
          log('social_click', { social: social.title });
          window.open(social.link, '_blank');
        }}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
