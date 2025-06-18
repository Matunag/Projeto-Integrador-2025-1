package repository

import (
	"back/model"
	"database/sql"
	"fmt"
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

func (er *ExameClinicoRepository) DeleteExameClinicoByID (id *int) error {
	query, err := er.connection.Prepare("DELETE FROM exame_clinico WHERE id = $1")
	if err != nil {
		return err
	}
	defer query.Close()

	result, err := query.Exec(id)

	if err != nil {
		return err 
	}

	rowsAffected, err := result.RowsAffected()

	if err != nil {
		return err
	}

	if rowsAffected == 0 {
		return fmt.Errorf("O exame clínico com o id %v não foi encontrado", id )
	}

	return nil
}