import { MyLinks } from "@/components/sections/profile";
import { profileData } from "@/constants/profile";

export default function LinksPage() {
    return (
        <MyLinks data={profileData} />
    );
}
