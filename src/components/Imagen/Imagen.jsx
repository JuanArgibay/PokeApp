import './style.css'

export const Imagen = ({ url, loading }) => {
    return (
        <>
            {!loading ? (<img className='image-pokemon' src={url} alt='pokeImage'></img>) : null}
        </>
    )
}