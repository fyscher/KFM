import '../static/css/Nav.css'
import { Link } from 'react-router-dom';

const Nav = () =>
{
    return (
        <nav>
            <div>
                <Link className='image' to='/'><img src='./static/images/logo.jpg' /></Link>
            </div>
            <div>
                <Link className='login' to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Nav;