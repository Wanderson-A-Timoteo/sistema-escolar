import { useEffect, useState } from "react";
import styles from './Alunos.module.css'

function Alunos(){    

    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    
    useEffect(() => {
        fetch("http://localhost:5001/alunos")
            .then((resposta) => resposta.json())
            .then((dados) => {
                setAlunos(dados);
                setLoading(false);
            })
            .catch((erro) => {
                console.error("Erro ao buscar os alunos:", erro);
                setLoading(false);
            });
    }, []);

    const alunosFiltrados = alunos.filter(aluno => 
        aluno.nome.toLowerCase().includes(busca.toLowerCase())
    );

    if(loading){
        return <p className={styles.loading}>Carregando alunos...</p>
    }

    return(
        <div className={styles.container}>
            <h1>Lista de Alunos</h1>

            <div className={styles.buscaContainer}>
                <label htmlFor="buscaAluno" className={styles.labelBusca}>
                    Buscar Aluno:
                </label>
                <input 
                    id="buscaAluno"
                    type="text"
                    placeholder="Digite o nome..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className={styles.inputBusca}
                />
            </div>

            {alunosFiltrados.length === 0 ? (<p className={styles.vazio}>Nenhum aluno encontrado.</p>) 
            : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosFiltrados.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default Alunos;