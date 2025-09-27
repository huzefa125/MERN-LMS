"use client"

import { useEffect } from "react"

export default function ErrorExampleUi({error} :{
        error : Error & {diest ? : string},
        rest : () => void
    }){
        useEffect(()=>{

        },[error])
        return(
            <div>
                <p className="text-red-600">{error?.message || "An Error Occured"}</p>
            </div>
        )
    }