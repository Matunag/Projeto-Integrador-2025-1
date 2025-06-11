package model

type Endereco struct {
	ID          *int    `json:"id"`
	Logradouro  *string `json:"logradouro"`
	Numero      *string `json:"numero"`
	Complemento *string `json:"complemento"`
	Bairro      *string `json:"bairro"`
	Cidade      *string `json:"cidade"`
	Uf          *string `json:"uf"`
	CEP         *string `json:"cep"`
	Referencia  *string `json:"referencia"`
}
