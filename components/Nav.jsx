import '../static/css/Nav.css'

const Nav = () =>
{
    return (
        <nav>
            <a className='image' href='/'><img src='./static/images/logo.jpg' /></a>
            <a className='login' href='/login'>Login</a>
        </nav>
    )
}

export default Nav;