//import { HomeButton } from "../components/HomeButton/HomeButton"
import { HomeButton } from "../components/HomeButton/HomeButton"
import { Logo } from "../components/Logo/Logo"

export const Header = () => {
    return (
        <section className="header">
            <Logo/>
            <HomeButton/>
        </section>
    )
}