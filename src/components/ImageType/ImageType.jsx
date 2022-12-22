import { selectTypePokemonIcon } from '../../helpers/selectIconsType'
import './imagetype.css'

export const ImageType = ({name,title, index}) => {

  return (
    <img 
        alt='iconType' 
        className='iconTypePokemon'
        src={selectTypePokemonIcon(name)} 
        key={index? index : ''}
        title={title}
        >
    </img> 
  )
}
