import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "../Input/styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{} 

//Campos curtos usamos o Input
export function Input({ ...rest }: InputProps) {
    return(
        <input className={styles.input} {...rest}/>
    )
}

//Para descricao usamos o TextArea
export function TextArea({ ...rest }: TextAreaProps) {
    return(
        <textarea className={styles.input} {...rest}></textarea>
    )
}