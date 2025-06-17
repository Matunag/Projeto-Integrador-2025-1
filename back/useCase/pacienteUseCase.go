package useCase

import (
	"back/model"
	"back/repository"
)

type PacienteUseCase struct {
	repository repository.PacienteRepository
	enderecoRepository repository.EnderecoRepository
	fichaRepository repository.FichaRepository
	anamneseRepository repository.DadosAnamneseRepository
	exameClinicoRepository repository.ExameClinicoRepository
	identificacaoLabRepository repository.IdentificacaoLabRepository
	resultadoRepository repository.ResultadoRepository
}

func NewPacienteUseCase(
	repo repository.PacienteRepository,
	enderecoRepo repository.EnderecoRepository,
	fichaRepo repository.FichaRepository,
	anamnseRepo repository.DadosAnamneseRepository,
	exameClinicoRepo repository.ExameClinicoRepository,
	identificacaoRepo repository.IdentificacaoLabRepository,
	resultadoRepo repository.ResultadoRepository,
) PacienteUseCase {
	return PacienteUseCase{
		repository: repo,
		enderecoRepository: enderecoRepo,
		fichaRepository: fichaRepo,
		anamneseRepository: anamnseRepo,
		exameClinicoRepository: exameClinicoRepo,
		identificacaoLabRepository: identificacaoRepo,
		resultadoRepository: resultadoRepo,
	}
}

func (pu *PacienteUseCase) CreatePaciente(paciente *model.Paciente) (*model.Paciente, error) {
	endereco, err := pu.enderecoRepository.CreateEndereco(paciente.Endereco)
	if err != nil {
		return nil, err
	}

	paciente.EnderecoID = endereco.ID

	createdPaciente, err := pu.repository.CreatePaciente(paciente)
	if err != nil {
		return nil, err
	}

	return createdPaciente, nil
}

func (pu *PacienteUseCase) GetPacienteByCpf(cpf string) (*model.Paciente, error) {
	paciente, err := pu.repository.GetPacienteByCpf(cpf)
	if err != nil {
		return nil, err
	}

	paciente.Endereco, err = pu.enderecoRepository.GetEnderecoByID(*paciente.EnderecoID)
	if err != nil {
		return nil, err
	}

	fichas, err := pu.fichaRepository.GetFichasByPaciente(*paciente.ID)
	if err != nil {
		return nil, err
	}

	for _, fichaObj := range fichas {
		fichaObj.DadosAnamnese, err = pu.anamneseRepository.GetDadosAnamneseByFichaID(*fichaObj.ID)
		if err != nil {
			return nil, err
		}

		fichaObj.ExameClinico, err = pu.exameClinicoRepository.GetByFichaID(*fichaObj.ID)
		if err != nil {
			return nil, err
		}

		fichaObj.IdentificacaoLaboratorio, err = pu.identificacaoLabRepository.GetByFichaID(*fichaObj.ID)
		if err != nil {
			return nil, err
		}

		fichaObj.Resultado, err = pu.resultadoRepository.GetResultadoByFichaID(*fichaObj.ID)
		if err != nil {
			return nil, err
		}
	}

	paciente.Fichas = &fichas
	return paciente, nil
}