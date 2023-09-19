import { useEffect,useState } from "react";

export default function useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [controller,setController] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);

        fetch(url, { signal: abortController.signal })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Request cancelled');
                }
                setError(err);
            })
            .finally(() => setLoading(false));
        
        return () => abortController.abort;
    },[])

    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
            setError('Request cancelled');
        }
    }

    return { data,loading,error,handleCancelRequest};
}