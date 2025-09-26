import { RoutesComp } from "../../RouterComp"
import FooterSite from "./FooterSite"
import HeaderSite from "./HeaderSite"
import Navigation from "./Navigation"
import UserList from "./UserList"


export const UserHome = () => {

    return (
        <>
        <HeaderSite />
        <Navigation />
         
        <UserList />
            <h1>tmp wrx</h1>
        <FooterSite />
    </>)

}