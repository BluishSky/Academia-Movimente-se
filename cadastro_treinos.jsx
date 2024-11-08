import React from 'react';
import './cadastro_treinos.css';

function CadastroTreinos() {
  return (
    <div className="container">
      <button className="back-button">Voltar</button>
      <div className="logo">
        <img src="uploads/logoacademia.png" alt="Logo" />
      </div>
      <h1>Cadastro de Treinos</h1>
      <hr />

      {/* Adicionando um flex-container para as duas colunas */}
      <div className="flex-container">
        <div className="box1">
          <div className="form-row">
            <label htmlFor="titulo">Título do Treino</label>
            <input type="text" id="titulo" placeholder="digite aqui..." />
            <label htmlFor="id">ID</label>
            <input type="number" id="id" placeholder="digite aqui..." />
            <label htmlFor="descricao">Descrição:</label>
            <textarea id="descricao" maxLength="45" placeholder="digite aqui..."></textarea>
          </div>
        </div>

        <div className="box2">
          <label htmlFor="title">Tipo de Treino</label>
          <div className="type-list">
            <button>Mobilidade</button>
            <button>Fortalecimento Específico</button>
            <button>Superiores</button>
            <button>CORE</button>
            <button>Estabilidade</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroTreinos;