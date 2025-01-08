import React, { useState } from 'react'
import "./CSS/EntradaAvaliaçãoStyle.css"
import BlocoComentario from './BlocoComentario';

function EntradaAvaliação () {

    const [Avaliações, SetAvaliação] = useState([
        {
            id: 0,
            Comentario: "",
        }


    ]);

    const [NovoComentario, setComentario] = useState("");

    
            
        const NewAvaliação = (A) => {
            A.preventDefault();

            if (!NovoComentario) {
                return;
            };

            AddComentario(NovoComentario);
            
            setComentario("");
        };

        const AddComentario = (Comentario) => {
            const AddAvaliação = [...Avaliações, {

                id: Math.floor(Math.random() * 100000),
                Comentario,
            },
            ]; 
            
            SetAvaliação(AddAvaliação);
            return;
        };
    

    return(
        <div className='ComentarioTodo'>
            <form>
                <input className='InputComentario' type='text' value={NovoComentario} onChange={(A) => setComentario(A.target.value)} placeholder='Comente'></input>
                <button className='BotãoComentario' onClick={NewAvaliação}>Enviar</button>
            </form>
            <BlocoComentario Avaliações={Avaliações} SetAvaliação={SetAvaliação}/>
        </div>

    )

}

export default EntradaAvaliação