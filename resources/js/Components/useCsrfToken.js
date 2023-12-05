import {useState, useEffect} from "react";

function useCsrfToken(){
    const [token, setToken] = useState(null)

    useEffect(()=>{
        fetch('/sanctum/csrf-token')
            .then(response => response.json())
            .then(data => {
                setToken(data.token)
            })
    }, [])

    return {token}
}

export default useCsrfToken;