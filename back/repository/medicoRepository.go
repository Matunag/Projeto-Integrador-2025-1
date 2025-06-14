package repository

import (
	"back/model"
	"database/sql"
)

type MedicoRepository struct {
	connection *sql.DB
}

func NewMedicoRepository(conn *sql.DB) MedicoRepository {
	return MedicoRepository{
		connection: conn,
	}
}

func (mr *MedicoRepository) CreateMedico(medico *model.Medico) (*model.Medico, error) {
	query, err := mr.connection.Prepare("INSERT INTO medico (id_ubs, crm, email, cpf, senha, nome) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id")
	if err != nil {
		return nil, err
	}

	defer query.Close()

	err = query.QueryRow(medico.IdUbs, medico.CRM, medico.Email, medico.CPF, medico.Senha, medico.Nome).Scan(
		&medico.ID,
	)
	if err != nil {
		return nil, err
	}

	return medico, nil
}

func (mr *MedicoRepository) GetMedicoByID(cpf string) (*model.Medico, error) {
	query, err := mr.connection.Prepare("SELECT * FROM medico WHERE cpf = $1")
	if err != nil {
		return nil, err
	}

	var medico model.Medico

	err = query.QueryRow(cpf).Scan(
		&medico.ID,
		&medico.IdUbs,
		&medico.CRM,
		&medico.Email,
		&medico.CPF,
		&medico.Senha,
		&medico.Nome,
	)

	defer query.Close()

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, err
	}

	return &medico, nil
}