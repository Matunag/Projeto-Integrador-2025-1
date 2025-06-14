package model

import "time"

type Paciente struct {
	ID             *int                      `json:"id"`
	IdUbs          *int                      `json:"id_ubs"`
	EnderecoID     *int                      `json:"endereco_id"`
	CartaoSUS      *string                   `json:"cartao_sus"`
	Nome           *string                   `json:"nome"`
	NomeMae        *string                   `json:"nome_mae"`
	Apelido        *string                   `json:"apelido"`
	CPF            *string                   `json:"cpf"`
	Nacionalidade  *string                   `json:"nacionalidade"`
	DataNascimento *time.Time               `json:"data_nascimento"`
	Cor            *string                   `json:"cor"`
	Telefone       *string                   `json:"telefone"`
	Escolaridade   *string                   `json:"escolaridade"`
	Fichas         *[]FichaCitopatológica    `json:"fichas"`
}


