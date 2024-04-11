import { Link } from "react-router-dom"
function NavBar() {
    return(
        <div>

            <Link to="/">Home</Link>

            <Link to="/history">History</Link>

            <Link to="/rules">Rules</Link>

        </div>
    )
}
export default NavBar