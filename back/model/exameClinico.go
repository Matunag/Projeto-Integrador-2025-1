package model

import "time"

type ExameClinico struct {
    ID           *int       `json:"id"`
    FichaID      *int       `json:"ficha_id"`
    InspecaoColo *string    `json:"inspecao_colo"`
    SinaisDST    *bool      `json:"sinais_dst"`
    DataColeta   *time.Time `json:"data_coleta"`
    Responsavel  *string    `json:"responsavel"`
}