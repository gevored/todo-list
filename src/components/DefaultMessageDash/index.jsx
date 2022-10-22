import imgClipBoard from '../../asset/images/Clipboard.svg'

export function DefaultMessageDash() {

    return (
        <>
            <img src={imgClipBoard} alt='icon ClipBoard' />
            <div>
                <p>Você ainda não tem tarefas cadastradas </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </>
    )
}

