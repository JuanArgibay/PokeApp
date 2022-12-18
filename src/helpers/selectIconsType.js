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

    let iconType = '';

   export const selectTypeIcon = (type) => {
        switch (type) {
            case 'bug':
                iconType = bug;
                return iconType;
            case 'dark':
                iconType = dark;
                return iconType;
            case 'dragon':
                iconType = dragon;
                return iconType;
            case 'electric':
                iconType = electric;
                return iconType;
            case 'fairy':
                iconType = fairy;
                return iconType;
            case 'fighting':
                iconType = fighting;
                return iconType;
            case 'fire':
                iconType = fire;
                return iconType;
            case 'flying':
                iconType = flying;
                return iconType;
            case 'ghost':
                iconType = ghost;
                return iconType;
            case 'grass':
                iconType = grass;
                return iconType;
            case 'ground':
                iconType = ground;
                return iconType;
            case 'ice':
                iconType = ice;
                return iconType;
            case 'normal':
                iconType = normal;
                return iconType;
            case 'psychic':
                iconType = psychic;
                return iconType;
            case 'poison':
                iconType = poison;
                return iconType;
            case 'rock':
                iconType = rock;
                return iconType;
            case 'steel':
                iconType = steel;
                return iconType;
            case 'water':
                iconType = water;
                return iconType;    
            default:
                break;
        }
   } 