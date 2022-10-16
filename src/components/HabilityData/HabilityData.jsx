import { useMove } from '../../hooks/useMove'

export const HabilityData = () => {

    const { move } = useMove();

    return (
        <section>
            <p>{move?.name}</p>
        </section>
    )
}