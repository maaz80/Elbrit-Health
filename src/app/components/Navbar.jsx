import Image from "next/image"
import Logo from "../Assets/Logo.png"
function Navbar() {
    return (
        <div className="w-full px-2 md:px-60 py-2">
            <Image src={Logo} alt="Description" className="w-52 h-12" />
        </div>
    )
}

export default Navbar
