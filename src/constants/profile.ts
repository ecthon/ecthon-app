import { Github01Icon, InternetIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import type { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  name: "Ecthon Almeida",
  avatarUrl: "https://github.com/ecthon.png",
  location: "Manaus • AM",
  verified: true,
  socialLinks: [
    {
      label: "ecthon.me",
      url: "https://ecthon.me",
      icon: InternetIcon,
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/ecthon/",
      icon: Linkedin01Icon,
    },
    {
      label: "github",
      url: "https://github.com/ecthon",
      icon: Github01Icon,
    },
  ],
};
