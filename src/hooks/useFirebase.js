import { useEffect, useState } from "react"

const useFirebase = () =>{
    const [user, setUser] = useState({});

    useEffect( () => {

    }, []);

    const singInWithGoogle = () =>{
        console.log("sign");
    }
    return {user, singInWithGoogle}
}

export default useFirebase;