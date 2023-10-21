import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut(){
    navigation('/')
    signOut()
  }

  return (
    <Container>
      <Profile to='/profile'>
        <img src={avatarUrl} alt={`Foto de ${user.name}`} />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
