package useCase

import (
	"back/repository"
)

type PacienteUseCase struct {
	repository repository.PacienteRepository
	fichaRepository repository.FichaRepository
}

func NewPacienteUseCase(repo repository.PacienteRepository, fichaRepo repository.FichaRepository) PacienteUseCase {
	return PacienteUseCase{
		repository: repo,
		fichaRepository: fichaRepo,
	}
}

