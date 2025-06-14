package model

import "time"

type Consultas struct {
	ID         *int       `json:"id"`
	PacienteID *int       `json:"paciente_id"`
	Data       *time.Time `json:"data"`
	UbsID      *int       `json:"ubs_id"`
}