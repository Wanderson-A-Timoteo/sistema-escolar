import { useState } from "react";
import styles from './LivroForm.module.css';

function LivroForm({ adicionarLivro }) {
    const [livro, setLivro] = useState({ titulo: '', autor: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setLivro({ ...livro, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!livro.titulo.trim() || !livro.autor.trim()) return;
        adicionarLivro(livro);
        setLivro({ titulo: '', autor: '' });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grupoInput}>
                <label htmlFor="titulo">Título do Livro:</label>
                <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    placeholder="Ex: Fundamentos de React"
                    value={livro.titulo}
                    onChange={handleChange}
                />
            </div>
            
            <div className={styles.grupoInput}>
                <label htmlFor="autor">Autor:</label>
                <input
                    id="autor"
                    name="autor"
                    type="text"
                    placeholder="Ex: Maria da Silva"
                    value={livro.autor}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Cadastrar Livro</button>
        </form>
    );
}

export default LivroForm;
