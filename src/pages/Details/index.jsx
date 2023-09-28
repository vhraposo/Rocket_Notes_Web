import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, hic? Hic, rem vitae. Quod libero saepe laboriosam dolore odit iusto, tempore obcaecati tempora consectetur quia eaque? Et rem sequi repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, hic? Hic, rem vitae. Quod libero saepe laboriosam dolore odit iusto, tempore obcaecati tempora consectetur quia eaque? Et rem sequi repudiandae</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="node"/>
          </Section>

          <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}
