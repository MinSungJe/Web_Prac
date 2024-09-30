import axios from "axios";
import { useEffect, useState } from "react";

export function useName() {
    let [name, setName] = useState('')
    useEffect(async ()=>{
        try {
            await axios.get('/username.json').then((r) => {
                setName(r.data)
            })
        } catch (e) {
            console.error(e)
        }
    }, [])
    
    return name
}
