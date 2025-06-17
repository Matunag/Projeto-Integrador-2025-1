package controller

import (
	"back/model"
	"back/useCase"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

type EnfermeiroController struct{
	useCase useCase.EnfermeiroUseCase
}

func NewEnfermeiroController (useCase useCase.EnfermeiroUseCase) EnfermeiroController{
	return EnfermeiroController{
		useCase: useCase,
	}
}

func (ec *EnfermeiroController) CreateEnfermeiro(ctx *gin.Context){
	var enfermeiro model.Enfermeiro
	err := ctx.BindJSON(&enfermeiro)

	if err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message":err.Error(),
		})
		return
	}

	createdEnfermeiro, err := ec.useCase.CreateEnfermeiro(&enfermeiro)
	if err!= nil{
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"message":err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, createdEnfermeiro)
} 

func (ec *EnfermeiroController) GetEnfermeiroByID(ctx *gin.Context){
	enfermeiroCpf := ctx.Param("enfermeiroCpf")
	if strings.TrimSpace(enfermeiroCpf) == ""{
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message":"Id não pode ser nulo",
		})
		return
	}

	enfermeiro, err := ec.useCase.GetEnfermeiroByID(enfermeiroCpf)
	if err != nil{
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	if enfermeiro == nil{
		ctx.JSON(http.StatusNotFound, gin.H{
			"message":"Item não encontrado na base de dados",
		})
		return
	}

	ctx.JSON(http.StatusOK, enfermeiro)
}