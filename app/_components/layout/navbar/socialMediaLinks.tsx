import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

export const socialMediaLinks = [
  {
    url: "https://linkedin.com/",
    icon: (size = 24) => (
      <FaLinkedin
        size={size}
        className="duration-200 fill-white hover:fill-cyan scale-125"
      />
    ),
    label: "Linkedin",
  },
  {
    url: "https://github.com/ZeyadSaeed",
    icon: (size = 24) => (
      <FaGithub
        size={size}
        className="duration-200 fill-white hover:fill-cyan scale-125"
      />
    ),
    label: "Github",
  },
  {
    url: "https://twitter.com/",
    icon: (size = 24) => (
      <FaTwitter
        size={size}
        className="duration-200 fill-white hover:fill-cyan scale-125"
        color="white"
      />
    ),
    label: "Twitter",
  },
  {
    url: "https://instagram.com/",
    icon: (size = 24) => (
      <FaInstagram
        size={size}
        className="duration-200 fill-white hover:fill-cyan scale-125"
        color="white"
      />
    ),
    label: "Instagram",
  },
];
