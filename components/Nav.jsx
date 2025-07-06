import '../static/css/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () =>
{
    return (
        <nav>
            <Link className='image' to='/'><img src='./static/images/logo.jpg' /></Link>
            <Link className='login' to='/login'>Login</Link>
        </nav>
    )
}

export default Nav;