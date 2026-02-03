import './Header.css'
import erik from '../../assets/erik.jpg'

const Header = () => {
    return (
        <header className='page-header'>
            <div>
                <h1>Erik Persson</h1>
                <h2>Software engineering student</h2>
            </div>
            <img src={erik} alt="picture of Erik Persson" />
        </header>   
    )
}

export default Header