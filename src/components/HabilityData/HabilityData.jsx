import { useHability } from '../../hooks/useHability'

export const HabilityData = () => {

    const { hability } = useHability();

    return (
        <section>
            <p>{hability?.name}</p>
        </section>
    )
}