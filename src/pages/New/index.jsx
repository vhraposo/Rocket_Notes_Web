import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom'


export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://app.rocketseat.com.br/node/stage-09" />
                        <NoteItem  isNew placeholder='Novo link' />

                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem  isNew placeholder='Nova tag' />
                            <NoteItem  isNew placeholder='Nova tag' />

                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}