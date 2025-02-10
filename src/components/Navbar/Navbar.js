import './Navbar.css'

export default function Navbar(){
    return(
        <div className="nav-container">
            <div className="logo-container">
                <img src="./assets/logo2.png"  alt="logo" />
                <span>The Collector</span>
            </div>
            <div className="nav-items">
                <ul className='navList'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Space Units</a></li>  
                    <li><a href='#'>Ships</a></li>  
                    <li><a href='#'>Bifrost address</a></li>  
                    <li><a href='#'>Contact</a></li>  
                </ul>
            </div>
        </div>
    )
}