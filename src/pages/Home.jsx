import { Link } from 'react-router-dom'
import BannerImage from '../assets/homebanner.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1> MIGÜ </h1>
                <p> CONOCE A LOS AMIGÜS </p>
                <Link to="https://glunam.itch.io/mapa-migu">
                    <button> Explorar </button>
                </Link>
            </div>
        </div>
    )
}

export default Home