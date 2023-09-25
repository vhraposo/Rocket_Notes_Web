import { Container, Profile } from "./styles";



export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/vhraposo.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Victor Raposo</strong>
                </div>
            </Profile>
        </Container>
    )
}