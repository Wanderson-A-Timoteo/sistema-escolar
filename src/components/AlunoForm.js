import { useState } from "react";
import styles from './AlunoForm.module.css';

function AlunoForm({ adicionarAluno }) {
    const [nome, setNome] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!nome.trim()) return;

        adicionarAluno(nome);
        setNome('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grupoInput}>
                <label htmlFor="nomeAluno">Nome do Aluno:</label>
                <input
                    id="nomeAluno"
                    type="text"
                    placeholder="Ex: Maria da Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default AlunoForm;
