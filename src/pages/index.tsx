import { useContext, FormEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/home.module.scss";

import Logo from "../../public/sua logo.png";
import { Input } from "../components/ui/Input/index";
import { Button } from "../components/ui/Button/index";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault(); //FormEvent, para nao deixar a pagina atualizar!
    
    let data = {
      email: "algum@teste.com",
      password: "123"
    }

    await signIn(data);

  }

  return(
    <>
      <Head>
        <title>Sujeito pizza - faca seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.logoTopo} src={Logo} alt="Logo Sujeito Pizzaria"/>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
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
              Acessar
            </Button>
          </form>

            <Link href="/signup">
               <p className={styles.text}>Nao possui uma conta? Cadastre-se</p>
            </Link>
            
          
        </div>
      </div>
    </>
  )
}