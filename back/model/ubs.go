package model

type Ubs struct {
	ID         *int          `json:"id"`
	EnderecoID *int          `json:"endereco_id"`
	Endereco   *Endereco     `json:"endereco"`
	Nome       *string       `json:"nome"`
	CNES       *string       `json:"cnes"`
	Prontuario *string       `json:"prontuario"`
	Paciente   []Paciente   `json:"paciente"`
	Medico     []Medico     `json:"medico"`
	Enfermeiro []Enfermeiro `json:"enfermeiro"`
	Consultas  []Consultas  `json:"consultas"`
}
