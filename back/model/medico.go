package model

type Medico struct {
	ID    *int    `json:"id"`
	IdUbs *int    `json:"id_ubs"`
	UBS   *Ubs    `json:"ubs"`
	CRM   *string `json:"crm"`
	Email *string `json:"email"`
	CPF   *string `json:"cpf"`
	Senha *string `json:"senha"`
	Nome  *string `json:"nome"`
}
