import FindUs from "../Components/pages/contact/FindUs";
import GetInTouch from "../Components/pages/contact/GetInTouch";
import HeroContact from "../Components/pages/contact/HeroContact";

export default function Contact() {
return(
    <div className="bg-gray-300">
        <HeroContact />
        <GetInTouch />
        <FindUs />
    </div>
);
}