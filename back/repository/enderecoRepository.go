package repository

import (
	"back/model"
	"database/sql"
)

type EnderecoRepository struct {
	connection *sql.DB
}

func NewEnderecoRepository(conn *sql.DB) EnderecoRepository {
	return EnderecoRepository{
		connection: conn,
	}
}

func (er *EnderecoRepository) GetEnderecoByID(id int) (*model.Endereco, error) {
	query, err := er.connection.Prepare("SELECT id, logradouro, numero, complemento, bairro, cidade, uf, cep, referencia FROM endereco WHERE id = $1")
	if err != nil {
		return nil, err
	}

	var endereco model.Endereco

	err = query.QueryRow(id).Scan(
		&endereco.ID,
		&endereco.Logradouro,
		&endereco.Numero,
		&endereco.Complemento,
		&endereco.Bairro,
		&endereco.Cidade,
		&endereco.Uf,
		&endereco.CEP,
		&endereco.Referencia,
	)

	defer query.Close()

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, err
	}

	return &endereco, nil
}