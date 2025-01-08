import React from 'react'
import "./CSS/BlocoComentarioStyle.css"
    const BlocoComentario = ({Avaliações, SetAvaliação}) => {
        const AvaliaçãoC = Avaliações.filter( AvaliaçãoComentario => AvaliaçãoComentario.Comentario);

    
        
    return (
        <div className='BarraComentarios'>
            
            {AvaliaçãoC.map((AvaliaçãoComentario) =>(
                <p><span class="material-icons" id='person'>person</span>{AvaliaçãoComentario.Comentario}</p>
            ))}
            
        </div>




    )

}

export default BlocoComentario