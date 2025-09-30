import './Header.css'
import erik from '../../assets/erik.jpg'

const Header = () => {
    return (
        <header className='page-header'>
            <img src={erik} className="logo" alt="Vite logo" />
            <h1>Erik Persson</h1>
            <h2>Software engineering student</h2>
        </header>   
    )
}

export default Header