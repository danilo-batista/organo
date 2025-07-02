import './InputForm.css';
import { TextField } from '../TextField/TextField';
import { DropdownField } from '../DropdownField/DropdownField';
import { Button } from '../Button/Button';

const teams = [
    'Programação',
    'Front-end',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

const onSave = (event) => {
    event.preventDefault();
    console.log("Form foi submetido!")
}

export function InputForm() {
    return (
        <section className='inputForm'>
            <form className='inputForm__form' onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite o seu " />
                <TextField required={true} label="Cargo" placeholder="Digite o seu " />
                <TextField label="Imagem" placeholder="Informe o endereço da " />
                <DropdownField required={true} label='Time' items={teams} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}