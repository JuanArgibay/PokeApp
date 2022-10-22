import { Link } from "react-router-dom"
//import { Searcher } from "../components/Searcher/Searcher"


export const Header = () => {
    return (
        <section className="header">
            <article >
                <h1>Pokemon</h1>
                <h2>Hazte con todos</h2>

            </article>
            <aside className="home">
                <Link to='/'>
                    <button>HOME</button>
                </Link>
            </aside>
        </section>
    )
}