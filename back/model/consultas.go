package model 

import "time"

type consultas struct {
	ID				*int
	PacienteID 		*int
	data			*time.Time
	UbsID 			*int
}
