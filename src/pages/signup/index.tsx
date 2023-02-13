import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/home.module.scss";

import Logo from "../../../public/sua logo.png";
import { Input } from "../../components/ui/Input/index";
import { Button } from "../../components/ui/Button/index";

import Link from "next/link";

export default function Signup() {
  return(
    <>
      <Head>
        <title>Faca seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={Logo} className={styles.logoTopo} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>

            <h1 className={styles.titulo}>Criando sua conta</h1>
          <form >
            <Input 
              placeholder="Digite seu nome"
              type="text"
            />
            <Input 
              placeholder="Digite seu email"
              type="text"
            />
            <Input 
              placeholder="Sua senha"
              type="password"
            />  

            <Button 
              type="submit"
              loading={false}

            >
              Cadastrar
            </Button>
          </form>
            <Link href="/"> 
                <p className={styles.text}>Ja possui uma conta?</p>
            </Link>
                    
        </div>
      </div>
    </>
  )
}