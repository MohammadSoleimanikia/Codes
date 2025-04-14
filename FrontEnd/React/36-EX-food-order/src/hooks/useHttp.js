// This custom hook handles HTTP requests and manages loading, error, and response state.
import { useCallback, useEffect, useState } from 'react';

// Helper function to send the HTTP request
// We keep this outside the hook to avoid triggering side effects on mount.
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    // If the response is not OK, throw an error with a message from the response (if available)
    throw new Error(
      resData.message || 'Something went wrong, failed to send request.'
    );
  }

  // If no error, return the response data
  return resData;
}

// Custom hook for handling HTTP logic in React components
export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData); // Store fetched or submitted data
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(); // Store error message (if any)

  function clearData(){
    // reset data for prevent stay in success modal after closing checkout
    setData(initialData)
  }
  // Function to send the HTTP request and update state accordingly
  // Wrapped with useCallback to avoid unnecessary re-creations on every render
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        // add await
        const resData = await sendHttpRequest(url, {...config,body:data});
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [url, config] // Re-create the function only if url or config changes
  );

  // Automatically send the request on mount if it's a GET request
  useEffect(() => {
    // if config set to get  or method is not specified we sendRequest
    const isGetRequest =
      (config && (config.method === 'GET' || !config.method)) || !config;

    if (isGetRequest) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,         // The fetched data or response
    isLoading,    // Boolean indicating loading state
    error,        // Error message, if any
    sendRequest,  // Expose the function for manual triggering (useful for POST, PUT, etc.)
    clearData,
  };
}
