import { useForm } from 'react-hook-form'
export default function Novo() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const onSubmit = (data) => {

    }

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id='nome' {...register('nome', {required: 'Campo obrigatório'})}/>
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id='telefone' {...register('telefone', {required: 'Campo obrigatório'})}/>
                {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>
            <button>Enviar</button>
        </form>
    )
}