package repository

import (
	"back/model"
	"database/sql"
)

type PacienteRepository struct {
	connection *sql.DB
}

func NewPacienteRepository(conn *sql.DB) PacienteRepository {
	return PacienteRepository{
		connection: conn,
	}
}

func (pr *PacienteRepository) CreatePaciente(paciente *model.Paciente) (*model.Paciente, error) {
	query, err := pr.connection.Prepare("INSERT INTO paciente (endereco_id, id_ubs, cartao_sus, nome, nome_mae, apelido, cpf, nacionalidade, data_nascimento, cor, telefone, escolaridade) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id")
	if err != nil {
		return nil, err
	}

	defer query.Close()

	err = query.QueryRow(paciente.EnderecoID, paciente.IdUbs, paciente.CartaoSUS, paciente.Nome, paciente.NomeMae, paciente.Apelido, paciente.CPF, paciente.Nacionalidade, paciente.DataNascimento, paciente.Cor, paciente.Telefone, paciente.Nacionalidade).Scan(
		&paciente.ID,
	)
	if err != nil {
		return nil, err
	}

	return paciente, nil
}

func (pr *PacienteRepository) GetPacienteByCpf(cpf string) (*model.Paciente, error) {
	query, err := pr.connection.Prepare("SELECT * FROM paciente WHERE cpf = $1")
	if err != nil {
		return nil, err
	}

	defer query.Close()

	var paciente model.Paciente

	err = query.QueryRow(cpf).Scan(
		&paciente.ID,
		&paciente.EnderecoID,
		&paciente.IdUbs,
		&paciente.CartaoSUS,
		&paciente.Nome,
		&paciente.NomeMae,
		&paciente.Apelido,
		&paciente.CPF,
		&paciente.Nacionalidade,
		&paciente.DataNascimento,
		&paciente.Cor,
		&paciente.Telefone,
		&paciente.Escolaridade,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, err
	}

	return &paciente, nil
}