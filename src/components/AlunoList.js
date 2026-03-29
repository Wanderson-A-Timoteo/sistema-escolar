import { FaTrashAlt } from 'react-icons/fa';
import styles from '../pages/CadastrarAlunos.module.css';

function AlunoList({ alunos, removerAluno }) {
    if (alunos.length === 0) {
        return <p style={{ marginTop: '20px' }}>Nenhum aluno cadastrado.</p>; 
    }

    return (
        <div className={styles.preview}>
            <h3>Alunos Adicionados:</h3>
            
            <ul className={styles.lista}>
                {alunos.map(aluno => (
                    <li key={aluno.id} className={styles.item}>
                        <strong>{aluno.nome}</strong>
                        <button 
                            className={styles.btnExcluir} 
                            onClick={() => removerAluno(aluno.id)}
                            title="Remover aluno"
                        >
                            <FaTrashAlt />
                        </button>                    
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlunoList;
