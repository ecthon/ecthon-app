import type { InternetIcon } from "@hugeicons/core-free-icons";

export interface SocialLink {
  label: string;
  url: string;
  icon: typeof InternetIcon;
}

export interface ProfileData {
  name: string;
  avatarUrl: string;
  location: string;
  socialLinks: SocialLink[];
  verified?: boolean;
}
