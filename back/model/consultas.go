package model 

import "time"

type consultas struct {
	ID				*int
	PacienteID 		*int
	data			*time.Time
	UbsID 			*int
}
-- Tabela: consultas
CREATE TABLE consultas (
    id SERIAL PRIMARY KEY,
    paciente_id INT REFERENCES paciente(id),
    data TIMESTAMP,
    ubs_id INT REFERENCES ubs(id)
);