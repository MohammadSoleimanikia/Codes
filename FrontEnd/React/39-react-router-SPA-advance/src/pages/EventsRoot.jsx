import { Outlet } from "react-router-dom";
import EventsNavigation from '../components/EventsNavigation'
export default function EventsRootLayout(){
return <>
    <EventsNavigation/>
    <Outlet/>
</>
}