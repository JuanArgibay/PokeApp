import { useHability } from '../../hooks/useHability'

export const HabilityData = (url) => {
    console.log(url);

    const { hability } = useHability(url);

    return (
        <section>
            <p>{hability.name}</p>
        </section>
    )
}