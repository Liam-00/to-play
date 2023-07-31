'use client'

import { signIn } from 'next-auth/react'
import AuthButton from '@/app/components/AuthButton'
import style from './test.module.css'

const page = () => {
    return (
        <div className={`${style.body}`}>
            <h1>Main Page:</h1>
            <AuthButton text="Sign in with Google!"/>
            <button
                onClick={ async () => {
                    let a = await fetch('/api/addgame', {method: 'POST'}).then(async (val) => await val.json())
                    console.log(a)
                }}
            
            >ADD GAME</button>
            <button
                onClick={ async () => {
                    let a = await fetch('/api/removegame', {method: 'POST'}).then(async (val) => await val.json())
                    console.log(a)
                }}
            
            >REMOVE GAME</button>
        </div>
    )
}

export default page 