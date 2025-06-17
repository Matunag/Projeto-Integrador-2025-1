package model

import "time"

type IdentificacaoLaboratorio struct {
	ID              *int       `json:"id"`
	FichaID         *int       `json:"ficha_id"`
	CnesLaboratorio *string    `json:"cnes_laboratorio"`
	Nome            *string    `json:"nome"`
	NumeroExame     *string    `json:"numero_exame"`
	RecebidoEm      *time.Time `json:"recebido_em"`
}
