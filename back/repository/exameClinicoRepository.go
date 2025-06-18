package repository

import (
	"back/model"
	"database/sql"
)

type ExameClinicoRepository struct {
	connection *sql.DB
}

func NewExameClinicoRepository(conn *sql.DB) ExameClinicoRepository {
	return ExameClinicoRepository{connection: conn}
}

func (er *ExameClinicoRepository) GetExameClinicoByFichaID(fichaID int) (*model.ExameClinico, error) {
	query, err := er.connection.Prepare(`SELECT id, ficha_id, inspecao_colo, sinais_dst, data_coleta, responsavel FROM exame_clinico WHERE ficha_id = $1`)
	if err != nil {
		return nil, err
	}

	var res model.ExameClinico

	err = query.QueryRow(fichaID).Scan(&res.ID, &res.FichaID, &res.InspecaoColo, &res.SinaisDST, &res.DataColeta, &res.Responsavel)
	if err != nil {
		return nil, err
	}

	return &res, nil
}

func (er *ExameClinicoRepository) CreateExameClinico(exame *model.ExameClinico) (*model.ExameClinico, error) {
	query := `
		INSERT INTO exame_clinico (
			ficha_id, inspecao_colo, sinais_dst, data_coleta, responsavel
		) VALUES ($1, $2, $3, $4, $5) RETURNING id`

	err := er.connection.QueryRow(
		query,
		exame.FichaID,
		exame.InspecaoColo,
		exame.SinaisDST,
		exame.DataColeta,
		exame.Responsavel,
	).Scan(&exame.ID)

	if err != nil {
		return nil, err
	}

	return exame, nil
}