//TODO turn this into general client button

'use client'

import { signOut } from "next-auth/react"

const SignOutLink = ({className, labelText}: {className: string, labelText: string}) => {
    return (
        <span 
        className={`${className}`}
        onClick={
            ()=> {signOut({callbackUrl: '/'})}
            }
        >
            {labelText}
        </span>
    )
}

export default SignOutLink