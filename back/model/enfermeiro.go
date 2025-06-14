package model

type Enfermeiro struct {
	ID    *int    `json:"id"`
	IdUbs *int    `json:"id_ubs"`
	COREN *string `json:"coren"`
	Email *string `json:"email"`
	CPF   *string `json:"cpf"`
	Senha *string `json:"senha"`
	Nome  *string `json:"nome"`
}