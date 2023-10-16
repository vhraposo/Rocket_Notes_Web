import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn(){

    const data = useAuth()
    console.log('Meu contexto ->', data)

    return(
       <Container>
           <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Entrar" />

                <Link to='/register'>Crar conta</Link>
            </Form> 
            <Background />
       </Container> 
    )
}