'use client'
import React, {createContext, useEffect, useState, useRef, DOMElement} from 'react'
import style from './ToastProvider.module.css'

//Provider Context Object
export const ToastContext = createContext<any>(null)


//ToastProvider wraps child elements and inserts notification component
export const ToastProvider = ({children}: {children: React.ReactNode | React.ReactNode[]}) => {
    
    const [ToastState, setToastState] = useState({message: '', active: false})
    const toast_DOM_element = useRef<any>(null)
    
    let timer: NodeJS.Timeout;
    
    const setToast = (message: string) => {
        setToastState({message: message, active: true})
    }

    useEffect(
        () => {
            timer = setTimeout(() => {
                setToastState({...ToastState, active: false})
            }, 1000)

            return () => {
                clearTimeout(timer)
            }
        }, [ToastState]
    )

    return (
        <>
            <ToastContext.Provider value={setToast} >
                {children}
                
                <span 
                    className={`${style.toast__body} border shadow ${ToastState.active && style.fade_in}`}
                    ref={toast_DOM_element}
                    key={Date.now()}
                 >
                    {ToastState.message}
                </span>
            </ToastContext.Provider>
            
        </>
    )
}

