import './Header.css'
import erik from '../../assets/erik.jpg'

const Header = () => {
    return (
        <header className='page-header'>
            <img src={erik} alt="picture of Erik Persson" />
            <h1>Erik Persson</h1>
            <h2>Software engineering student</h2>
        </header>   
    )
}

export default Header