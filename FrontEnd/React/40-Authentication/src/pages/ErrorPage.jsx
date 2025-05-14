import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PageContent'
import MainNavigation from '../components/MainNavigation';
export default function ErrorPage(){
    const error=useRouteError();
    // we should use Response for throwing error because that gets us status property.

    // set default error message 
    let title="An error occurred!";
    let message="Something went wrong!"
    // use status code to change the message 
    if(error.status===500){
        message=JSON.parse(error.data).message;
    }
    if(error.status ===404){
        title="Not found";
        message="Could not find resource or page"
    }
    return<>
    <MainNavigation/>
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
    </> 
}