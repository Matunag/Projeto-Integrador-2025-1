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

func (er *ExameClinicoRepository) GetByFichaID(fichaID int) (*model.ExameClinico, error) {
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