import { Link } from 'react-router-dom'
import home from '../../assets/home.png';
import './homeButton.css'

export const HomeButton = () => {
  return (
    <Link className='home' to='/'>
         <img className='home-logo' alt='log' src={home}></img>
    </Link>
  )
}
