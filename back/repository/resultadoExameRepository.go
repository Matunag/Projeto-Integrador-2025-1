package repository

import (
	"back/model"
	"database/sql"
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
