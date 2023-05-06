import './Layout.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header>
                <h1>@Contatinhos</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copyright 2023.</p>
            </footer>
        </>
    )
}