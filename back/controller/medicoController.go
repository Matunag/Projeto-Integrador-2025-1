package controller

import (
	"back/model"
	"back/useCase"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

type MedicoController struct {
	useCase useCase.MedicoUseCase
}

func NewMedicoController(useCase useCase.MedicoUseCase) MedicoController {
	return MedicoController{
		useCase: useCase,
	}
}

func (mc *MedicoController) CreateMedico(ctx *gin.Context) {
	var medico model.Medico
	err := ctx.BindJSON(&medico)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	createdMedico, err := mc.useCase.CreateMedico(&medico)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, createdMedico)
}

func (mc *MedicoController) GetMedicoByCpf(ctx *gin.Context) {
	medicoCpf := ctx.Param("medicoCpf")
	if strings.TrimSpace(medicoCpf) == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "Id não pode ser nulo",
		})
		return
	}

	medico, err := mc.useCase.GetMedicoByCpf(medicoCpf)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	if medico == nil {
		ctx.JSON(http.StatusNotFound, gin.H{
			"message": "Item não encontrado na base de dados",
		})
		return
	}

	ctx.JSON(http.StatusOK, medico)
}