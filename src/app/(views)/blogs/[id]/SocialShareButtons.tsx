"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";

const SocialShareButtons = () => {
  return (
    <div className="flex gap-5 items-center my-10">
      <h4>Share this blog :</h4>
      <div className="flex gap-2">
        <FacebookShareButton
          url={window.location.href}
          quote="Check out this Amazing blog on ultrablogs.in"
        >
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <WhatsappShareButton url={window.location.href}>
          <WhatsappIcon size={32} />
        </WhatsappShareButton>
        <TwitterShareButton url={window.location.href}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialShareButtons;
