package model

type Exames struct {
	ID          *int   `json:"id"`
	PacienteID  *int   `json:"paciente_id"`
	ImagemExame []byte `json:"imagem_exame"`
}