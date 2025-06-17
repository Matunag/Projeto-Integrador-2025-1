package repository

import (
	"back/model"
	"database/sql"
	"fmt"
)

type EnfermeiroRepository struct {
	connection *sql.DB
}

func NewEnfermeiroRepository(conn *sql.DB) EnfermeiroRepository {
	return EnfermeiroRepository{
		connection: conn,
	}
}

func (mr *EnfermeiroRepository) CreateEnfermeiro(enfermeiro *model.Enfermeiro) (*model.Enfermeiro, error) {
	query, err := mr.connection.Prepare("INSERT INTO enfermeiro (id_ubs, coren, email, cpf, senha, nome) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id")
	if err != nil {
		return nil, err
	}

	defer query.Close()

	err = query.QueryRow(enfermeiro.IdUbs, enfermeiro.COREN, enfermeiro.Email, enfermeiro.CPF, enfermeiro.Senha, enfermeiro.Nome).Scan(
		&enfermeiro.ID,
	)
	if err != nil {
		return nil, err
	}

	return enfermeiro, nil
}

func (mr *EnfermeiroRepository) GetEnfermeiroByID(cpf string) (*model.Enfermeiro, error) {
	query, err := mr.connection.Prepare("SELECT * FROM enfermeiro WHERE cpf = $1")
	if err != nil {
		return nil, err
	}

	var enfermeiro model.Enfermeiro

	err = query.QueryRow(cpf).Scan(
		&enfermeiro.ID,
		&enfermeiro.IdUbs,
		&enfermeiro.COREN,
		&enfermeiro.Email,
		&enfermeiro.CPF,
		&enfermeiro.Senha,
		&enfermeiro.Nome,
	)

	defer query.Close()

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, err
	}

	return &enfermeiro, nil
}
func (ur *UbsRepository) DeleteEnfermeiroByID (id int) error {
	query, err := ur.connection.Prepare("DELETE FROM enfermeiro WHERE id = $1")
	if err != nil {
		return err
	}
	defer query.Close()

	result, err := query.Exec(id)
	if err != nil {
		return err
	}

	affectedRows, err := result.RowsAffected()

	if err != nil {
		return err
	}

	if affectedRows == 0 {
		return fmt.Errorf("Nenhum enfermeiro foi encontrado com o id %v", id)
	}

	return nil
}