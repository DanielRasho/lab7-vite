import { VIEW_ROUTES } from "../providers/router"

export default function NavBar(){
   return (
    <ul>
        <li>
            <a href={VIEW_ROUTES.HOME}>Home</a>
        </li>
        <li>
            <a href={VIEW_ROUTES.LOGIN}>Login</a>
        </li>
    </ul>
   ) 
}