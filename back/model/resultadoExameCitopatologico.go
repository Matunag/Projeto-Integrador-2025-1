package model

type ResultadoExameCitopatologico struct {
	ID                   *int      `json:"id"`
	FichaID              *int      `json:"ficha_id"`
	AmostraRejeitada     *string   `json:"amostra_rejeitada"`
	Epitelios            *string   `json:"epitelios"`
	Adequabilidade       *string   `json:"adequabilidade"`
	Normalidade          *bool     `json:"normalidade"`
	AlteracoesCalulares  *string   `json:"alteracoes_calulares"`
	MicroBiologia        *string   `json:"microbiologia"`
	CelulasAtipicas      *string   `json:"celulas_atipicas"`
	AtipiaEscamosa       *string   `json:"atipia_escamosa"`
	AtipiaGlandular      *string   `json:"atipia_glandular"`
	NeoplasiasMalignas   *string   `json:"neoplasias_malignas"`
	CelulasEndometriais  *bool     `json:"celulas_endometriais"`
	ObservacoesGerais    *string   `json:"observacoes_gerais"`
	ScreeningCitotecnico *string   `json:"screening_citotecnico"`
	Responsavel          *string   `json:"responsavel"`
	DataResultado        *DateOnly `json:"data_resultado"`
}
