import { useState } from "react";
import styles from './CadastrarLivros.module.css';
import LivroForm from "../components/LivroForm";

function CadastrarLivros() {
    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]);

    function adicionarLivro(novoLivro) {
        setLivros([...livros, { ...novoLivro, id: Date.now() }]);
        
        setMensagem('Livro cadastrado com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Novo Livro</h1>

            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            <LivroForm adicionarLivro={adicionarLivro} />

            {livros.length > 0 && (
                <div className={styles.preview}>
                    <h3>Livros Adicionados:</h3>
                    <ul>
                        {livros.map(livro => (
                            <li key={livro.id}>
                                <strong>{livro.titulo}</strong> - {livro.autor}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CadastrarLivros;
