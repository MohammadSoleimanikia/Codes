import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/Appbar";
export default function Layout(){
    return<>
    <SearchAppBar />
    <Outlet/>
    </>
}