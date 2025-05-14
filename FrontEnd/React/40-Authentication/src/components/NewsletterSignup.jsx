
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
    const fetcher=useFetcher();
    const {data,state}=fetcher;
    useEffect(()=>{
        if(state==='idle' && data &&data.message){
            window.alert(data.message);
        }
    },[state,data])
  return (
    <fetcher.Form action='/newsletter' method="post" className={classes.newsletter}>
      <input
        type="email"     placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

