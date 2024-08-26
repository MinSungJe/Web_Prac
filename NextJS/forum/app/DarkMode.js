'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkMode() {
    let router = useRouter()
    let [modeCookie, setModeCookie] = useState('')

    useEffect(() => {
        setModeCookie(('; ' + document.cookie).split('; mode=').pop().split(';')[0])
        if (modeCookie == '') {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }
    }, [])

    return (
        <span onClick={() => {
            if (modeCookie == 'light') {
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
            } else {
                document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
            }
            setModeCookie(('; ' + document.cookie).split('; mode=').pop().split(';')[0])
            router.refresh()
        }}> {(modeCookie != 'light') ? `☀️` : `🌙`} </span>
    )
}