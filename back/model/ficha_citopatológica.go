package model

import "time"

type FichaCitopatológica struct {
	ID                        *int                           `json:"id"`
	PacienteID                *int                           `json:"paciente_id"`
	DataCriacao               *time.Time                     `json:"data_criacao"`
	NumeroProtocolo           *string                        `json:"numero_protocolo"`
	DadosAnamnese             *DadosAnamnese                 `json:"dados_anamnese"`
	ExameClinico              *ExameClinico                  `json:"exame_clinico"`
	IdentificacaoLaboratorio  *IdentificacaoLaboratorio      `json:"identificacao_laboratorio"`
	Resultado                 *ResultadoExameCitopatológico  `json:"resultado"`
}
