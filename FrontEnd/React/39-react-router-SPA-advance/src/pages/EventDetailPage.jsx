import { redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem'
export default function EventDetailPage(){
    const data= useRouteLoaderData('event-detail')
    return <EventItem event={data.event}/>
}
// loader function takes two argument
export async function loader({request,params}) {
    // we can use params without using the useParams
    // use the param that used in the route definition
    const id=params.id;
    const response=await fetch(`http://localhost:8080/events/${id}`);
    if(!response.ok){
        throw new Response(
            JSON.stringify({ message: "Could not fetch details for selected event" }),
            { status: 500 }
        );
    }else{
        return response;
    }
}

export async function action({params,request}){
    const id =params.id;
    const response=await fetch(`http://localhost:8080/events/${id}`,{
        method:request.method
    });
    if(!response.ok){
        throw new Response(
            JSON.stringify({ message: "Could not delete event" }),
            { status: 500 }
        );
    }
    return redirect('/events')
}