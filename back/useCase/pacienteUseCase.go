package useCase

import (
	"back/repository"
)

type PacienteUseCase struct {
	repository repository.PacienteRepository
	fichaRepository repository.FichaRepository
}

