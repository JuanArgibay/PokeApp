import bug from '../assets/typesIcons/bug.png'
import dark from '../assets/typesIcons/dark.png'
import dragon from '../assets/typesIcons/dragon.png'
import electric from '../assets/typesIcons/electric.png'
import fairy from '../assets/typesIcons/fairy.png'
import fighting from '../assets/typesIcons/fighting.png'
import fire from '../assets/typesIcons/fire.png'
import flying from '../assets/typesIcons/flying.png'
import ghost from '../assets/typesIcons/ghost.png'
import grass from '../assets/typesIcons/grass.png'
import ground from '../assets/typesIcons/ground.png'
import ice from '../assets/typesIcons/ice.png'
import normal from '../assets/typesIcons/normal.png'
import psychic from '../assets/typesIcons/physhic.png'
import poison from '../assets/typesIcons/poison.png'
import rock from '../assets/typesIcons/rock.png'
import steel from '../assets/typesIcons/steel.png'
import water from '../assets/typesIcons/water.png'
import physical from '../assets/typesIcons/physicalI.png'
import status from '../assets/typesIcons/status.png'
import special from '../assets/typesIcons/specialI.png'

   export const selectTypePokemonIcon = (type) => {
        switch (type) {
            case 'bug':
                return bug;
            case 'dark':
                return dark;
            case 'dragon':
                return dragon;
            case 'electric':
                return electric;
            case 'fairy':
                return fairy;
            case 'fighting':
                return fighting;
            case 'fire':
                return fire;
            case 'flying':
                return flying;
            case 'ghost':
                return ghost;
            case 'grass':
                return grass;
            case 'ground':
                return ground;
            case 'ice':
                return ice;
            case 'normal':
                return normal;
            case 'psychic':
                return psychic;
            case 'poison':
                return poison;
            case 'rock':
                return rock;
            case 'steel':
                return steel;
            case 'water':
                return water;
            case 'physical':
                return physical;
            case 'status':
                return status;
            case 'special':
                return special;     
            default:
                break;
        }
   } 
