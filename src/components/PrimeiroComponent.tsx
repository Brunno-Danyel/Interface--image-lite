'use client'

interface PrimeiroComponentProps{
 mensagem? : string;
 mensagemBotão?: string;
}

export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {

    function handleClick(){
        console.log(props.mensagemBotão)
    }

    return(
        <div>
            {props.mensagem}

            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
    <h2>Arrow Function</h2>
    )
}