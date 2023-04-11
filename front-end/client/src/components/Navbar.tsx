export default function Navbar(): JSX.Element {
    return (
        <>
        <nav className="flex container-fluid mx-4">
            <div>TravelWay</div>
            <ul className="flex gap-4 ms-auto">
                <li>Travel</li>
                <li>User</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </nav>
        </>
    )
}