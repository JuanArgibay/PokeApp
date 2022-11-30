import { HomeButton } from "../components/HomeButton/HomeButton"


export const Header = () => {
    return (
        <section className="header">
            <article >
                <h1>Pokemon</h1>
                <h2>Hazte con todos</h2>
            </article>
            <HomeButton/>
        </section>
    )
}