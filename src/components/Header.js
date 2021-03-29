import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Header() {
    const user = localStorage.getItem('user-info')
    const history = useHistory()
    function logout() {
        localStorage.clear();
        history.push('/login')
    }
    function profile()
    {
        history.push('/profile')
    }
    function wallet()
    {
        history.push('/wallet')
    }
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-LIBRARY</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper" >
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to='/'>Home</Link>
                                <Link to='/books'>Books</Link>
                                <Link to='/mybooks'>MyBooks</Link>
                                <Link to='/search'>Search</Link>
                               
                            </>
                            :
                            <>
                                <Link to='/'>Home</Link>
                                <Link to='/login'>Login</Link>


                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav>
                        <NavDropdown title='Wellcome Suvankar'>

                            <NavDropdown.Item onClick={profile}>Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={wallet}>Wallet</NavDropdown.Item>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null}
            </Navbar>
        </div>
    )
}

export default Header
