package repository

import (
	"back/model"
	"database/sql"
)

type FichaRepository struct {
	connection *sql.DB
}

func NewFichaRepository(conn *sql.DB) FichaRepository {
	return FichaRepository{
		connection: conn,
	}
}

func (fr *FichaRepository) CreateFicha(ficha *model.FichaCitopatologica) (*model.FichaCitopatologica, error) {
	query, err := fr.connection.Prepare("INSERT INTO ficha_citopatologica (paciente_id, numero_protocolo) VALUES ($1, $2) RETURNING id, data_criacao")
	if err != nil {
		return nil, err
	}

	defer query.Close()

	err = query.QueryRow(ficha.PacienteID, ficha.NumeroProtocolo).Scan(
		&ficha.ID,
		&ficha.DataCriacao,
	)
	if err != nil {
		return nil, err
	}

	return ficha, nil
}

func (fr *FichaRepository) GetFichasByPaciente(idPaciente int) ([]model.FichaCitopatologica, error) {
	query, err := fr.connection.Prepare("SELECT * FROM ficha_citopatologica WHERE paciente_id = $1")
	if err != nil {
		return []model.FichaCitopatologica{}, err
	}

	defer query.Close()

	rows, err := query.Query(idPaciente)
	if err != nil {
		return []model.FichaCitopatologica{}, err
	}

	var fichaList []model.FichaCitopatologica
	var fichaObj model.FichaCitopatologica

	for rows.Next() {
		err = rows.Scan(
			&fichaObj.ID,
			&fichaObj.PacienteID,
			&fichaObj.DataCriacao,
			&fichaObj.NumeroProtocolo,
		)

		if err != nil {
			return []model.FichaCitopatologica{}, err
		}

		fichaList = append(fichaList, fichaObj)
	}

	return fichaList, nil
}
