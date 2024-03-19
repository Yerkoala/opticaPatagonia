import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import instagram from '../assets/img/nav-icon3.svg'
import facebook from '../assets/img/nav-icon2.svg'
import logo from '../assets/img/logopatagonia.png'



export const NavBar = () => {
    const [activelLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateACtiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'>Menú</span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activelLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateACtiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#Servicios" className={activelLink === 'Servicios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateACtiveLink('Servicios')}>Servicios</Nav.Link>
                        <Nav.Link href="#Nosotros" className={activelLink === 'Nosotros' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateACtiveLink('Nosotros')}>Nosotros</Nav.Link>
                        <Nav.Link href="#Contacto" className={activelLink === 'Contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateACtiveLink('Contacto')}>Contacto</Nav.Link>
                        <Nav.Link href="#Catalogo" className={activelLink === 'Catalogo' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateACtiveLink('Catalogo')} style={{borderRight:"none"}}>Catálogo</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.instagram.com/opticapatagonia.cl" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100088677781830&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="" />
                            </a>
                        </div>
                        <button className='vvd' onClick={() => window.open("https://serviciosoftalmologicospatagonia.site.agendapro.com/cl/sucursal/14002", "_blank")}>
                            <span>Reservar Hora</span>
                        </button>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
