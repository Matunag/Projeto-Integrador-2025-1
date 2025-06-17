package model

import "time"

type DadosAnamnese struct {
    ID                   *int       `json:"id"`
    FichaID              *int       `json:"ficha_id"`
    MotivoExame          *int       `json:"motivo_exame"`
    DataExamePreventivo  *int       `json:"data_exame_preventivo"`
    Diu                  *bool      `json:"diu"`
    Gravida              *bool      `json:"gravida"`
    Anticoncepcional     *bool      `json:"anticoncepcional"`
    HormonioMenopausa    *bool      `json:"hormonio_menopausa"`
    FezRadioterapia      *bool      `json:"fez_radioterapia"`
    UltimaMenstruacao    *time.Time `json:"ultima_menstruacao"`
    SangramentoRelacoes  *bool      `json:"sangramento_relacoes"`
    SangramentoMenopausa *bool      `json:"sangramento_menopausa"`
}