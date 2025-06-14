package useCase

import (
	"back/model"
	"back/repository"
)

type MedicoUseCase struct {
	repository repository.MedicoRepository
	ubsRepository repository.UbsRepository
}

func NewMedicoUseCase(repo repository.MedicoRepository, ubsRepo repository.UbsRepository) MedicoUseCase {
	return MedicoUseCase{
		repository: repo,
		ubsRepository: ubsRepo,
	}
}

func (mu *MedicoUseCase) CreateMedico(medico *model.Medico) (*model.Medico, error) {
	createdMedico, err := mu.repository.CreateMedico(medico)
	if err != nil {
		return nil, err
	}

	createdMedico.UBS, err = mu.ubsRepository.GetUbsByID(*createdMedico.IdUbs)
	if err != nil {
		return nil, err
	}

	return createdMedico, nil
}

func (mu *MedicoUseCase) GetMedicoByID(cpf string) (*model.Medico, error) {
	medico, err := mu.repository.GetMedicoByID(cpf)
	if err != nil {
		return nil, err
	}

	medico.UBS, err = mu.ubsRepository.GetUbsByID(*medico.IdUbs)
	if err != nil {
		return nil, err
	}

	return medico, nil
}