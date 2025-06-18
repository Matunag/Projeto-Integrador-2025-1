package repository

import (
	"back/model"
	"database/sql"
	"fmt"
)

type ResultadoRepository struct {
	connection *sql.DB
}

func NewResultadoRepository(conn *sql.DB) ResultadoRepository {
	return ResultadoRepository{connection: conn}
}

func (rr *ResultadoRepository) GetResultadoByFichaID(fichaID int) (*model.ResultadoExameCitopatologico, error) {
	query, err := rr.connection.Prepare(`SELECT id, ficha_id, amostra_rejeitada, epitelios, adequabilidade, normalidade,
		alteracoes_calulares, microbiologia, celulas_atipicas, atipia_escamosa,
		atipia_glandular, neoplasias_malignas, celulas_endometriais,
		observacoes_gerais, screening_citotecnico, responsavel, data_resultado
		FROM resultado_exame_citopatologico WHERE ficha_id = $1`)
	if err != nil {
		return nil, err
	}

	var res model.ResultadoExameCitopatologico

	err = query.QueryRow(fichaID).Scan(
		&res.ID, &res.FichaID, &res.AmostraRejeitada, &res.Epitelios, &res.Adequabilidade,
		&res.Normalidade, &res.AlteracoesCalulares, &res.MicroBiologia, &res.CelulasAtipicas,
		&res.AtipiaEscamosa, &res.AtipiaGlandular, &res.NeoplasiasMalignas, &res.CelulasEndometriais,
		&res.ObservacoesGerais, &res.ScreeningCitotecnico, &res.Responsavel, &res.DataResultado,
	)
	if err != nil {
		return nil, err
	}
	
	return &res, nil
}

func (ur *ResultadoRepository) DeleteResultadoExameByID (id int) error {
	query, err := ur.connection.Prepare("DELETE FROM resultado_exame_citopatologico WHERE id = $1")
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
		return fmt.Errorf("Nenhum resultado de exame foi encontrado com o id %v", id)
	}

	return nil
}
