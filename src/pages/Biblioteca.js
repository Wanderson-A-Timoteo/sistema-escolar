import { useState, useEffect } from "react";
import styles from './Biblioteca.module.css'


function Biblioteca(){

    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(process.env.PUBLIC_URL + "/db.json")
                .then((resp) => resp.json())
                .then((data) => {
                    setLivros(data.livros); // pega apenas o array de livros
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }, 2000);
    }, []);
    
    if(loading){
        return <p>Carregando livros...</p>
    }

    return(
        <div className={styles.container}>
            <h1>Lista de Livros</h1>

            {livros.length === 0 ? (<p>Nenhum livro encontrado</p>) 
            : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro =>(
                            <tr key={livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
    
}

export default Biblioteca;