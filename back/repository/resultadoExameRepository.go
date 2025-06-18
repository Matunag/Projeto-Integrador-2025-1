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
	query, err := rr.connection.Prepare(`SELECT id, ficha_id, amostra_rejeitada_por, epitelios, adequabilidade, normalidade,
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

func (rr *ResultadoRepository) CreateResultado(resultado *model.ResultadoExameCitopatologico) (*model.ResultadoExameCitopatologico, error) {
	query := `
		INSERT INTO resultado_exame_citopatologico (
			ficha_id, amostra_rejeitada_por, epitelios, adequabilidade, normalidade,
			alteracoes_calulares, microbiologia, celulas_atipicas, atipia_escamosa,
			atipia_glandular, neoplasias_malignas, celulas_endometriais,
			observacoes_gerais, screening_citotecnico, responsavel, data_resultado
		) VALUES (
			$1, $2, $3, $4, $5,
			$6, $7, $8, $9,
			$10, $11, $12,
			$13, $14, $15, $16
		) RETURNING id`

	err := rr.connection.QueryRow(
		query,
		resultado.FichaID,
		resultado.AmostraRejeitada,
		resultado.Epitelios,
		resultado.Adequabilidade,
		resultado.Normalidade,
		resultado.AlteracoesCalulares,
		resultado.MicroBiologia,
		resultado.CelulasAtipicas,
		resultado.AtipiaEscamosa,
		resultado.AtipiaGlandular,
		resultado.NeoplasiasMalignas,
		resultado.CelulasEndometriais,
		resultado.ObservacoesGerais,
		resultado.ScreeningCitotecnico,
		resultado.Responsavel,
		resultado.DataResultado,
	).Scan(&resultado.ID)

	if err != nil {
		return nil, err
	}

	return resultado, nil
}
