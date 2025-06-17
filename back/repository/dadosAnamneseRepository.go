package repository

import (
	"back/model"
	"database/sql"
)

type DadosAnamneseRepository struct {
	connection *sql.DB
}

func NewDadosAnamneseRepository(conn *sql.DB) DadosAnamneseRepository {
	return DadosAnamneseRepository{
		connection: conn,
	}
}

func (dr *DadosAnamneseRepository) GetDadosAnamneseByFichaID(fichaID int) (*model.DadosAnamnese, error) {
	query, err := dr.connection.Prepare(`SELECT id, ficha_id, motivo_exame, data_exame_preventivo, diu, gravida, anticoncepcional, hormonio_menopausa,
		fez_radioterapia, ultima_menstruacao, sangramento_relacoes, sangramento_menopausa
		FROM dados_anamnese WHERE ficha_id = $1`)
	if err != nil {
		return nil, err
	}

	var res model.DadosAnamnese

	err = query.QueryRow(fichaID).Scan(
		&res.ID, &res.FichaID, &res.MotivoExame, &res.DataExamePreventivo, &res.Diu, &res.Gravida,
		&res.Anticoncepcional, &res.HormonioMenopausa, &res.FezRadioterapia,
		&res.UltimaMenstruacao, &res.SangramentoRelacoes, &res.SangramentoMenopausa,
	)
	if err != nil {
		return nil, err
	}
	
	return &res, nil
}