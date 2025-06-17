package useCase

import (
	"back/model"
	"back/repository"
)

type EnfermeiroUseCase struct{
	repository repository.EnfermeiroRepository
	ubsRepository repository.UbsRepository
}

func NewEnfermeiroUseCase (repo repository.EnfermeiroRepository, ubsRepo repository.UbsRepository) EnfermeiroUseCase{
	return EnfermeiroUseCase{
		repository: repo,
		ubsRepository: ubsRepo,
	}
}

func (fu *EnfermeiroUseCase) CreateEnfermeiro(enfermeiro *model.Enfermeiro) (*model.Enfermeiro, error){
	createdEnfermeiro, err := fu.repository.CreateEnfermeiro(enfermeiro)

	if err!= nil{
		return nil, err
	}

	createdEnfermeiro.UBS, err = fu.ubsRepository.GetUbsByID(*createdEnfermeiro.IdUbs)
	if err != nil {
		return nil, err
	}

	return createdEnfermeiro, nil
}

func (fu *EnfermeiroUseCase) GetEnfermeiroByID(cpf string) (*model.Enfermeiro, error){
	enfermeiro, err := fu.repository.GetEnfermeiroByID(cpf)

	if err != nil {
		return nil, err
	}

	enfermeiro.UBS, err = fu.ubsRepository.GetUbsByID(*enfermeiro.IdUbs)
	if err != nil{
		return nil, err
	}

	return enfermeiro, nil
}