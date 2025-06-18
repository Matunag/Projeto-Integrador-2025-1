package repository

import (
	"back/model"
	"database/sql"
)

type IdentificacaoLabRepository struct {
	connection *sql.DB
}

func NewIdentificacaoLabRepository(conn *sql.DB) IdentificacaoLabRepository {
	return IdentificacaoLabRepository{connection: conn}
}

func (ir *IdentificacaoLabRepository) GetIdentificacaoLabByFichaID(fichaID int) (*model.IdentificacaoLaboratorio, error) {
	query, err := ir.connection.Prepare(`SELECT id, ficha_id, cnes_laboratorio, nome, numero_exame, recebido_em FROM identificacao_laboratorio WHERE ficha_id = $1`)
	if err != nil {
		return nil, err
	}

	var res model.IdentificacaoLaboratorio

	err = query.QueryRow(fichaID).Scan(&res.ID, &res.FichaID, &res.CnesLaboratorio, &res.Nome, &res.NumeroExame, &res.RecebidoEm)
	if err != nil {
		return nil, err
	}
	
	return &res, nil
}

func (ir *IdentificacaoLabRepository) CreateIdentificacaoLab(ident *model.IdentificacaoLaboratorio) (*model.IdentificacaoLaboratorio, error) {
	query := `
		INSERT INTO identificacao_laboratorio (
			ficha_id, cnes_laboratorio, nome, numero_exame, recebido_em
		) VALUES ($1, $2, $3, $4, $5) RETURNING id`

	err := ir.connection.QueryRow(
		query,
		ident.FichaID,
		ident.CnesLaboratorio,
		ident.Nome,
		ident.NumeroExame,
		ident.RecebidoEm,
	).Scan(&ident.ID)

	if err != nil {
		return nil, err
	}

	return ident, nil
}
