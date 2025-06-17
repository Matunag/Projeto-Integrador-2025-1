package main

import (
	"back/controller"
	"back/db"
	"back/repository"
	"back/useCase"

	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	dbConnection, err := db.ConnectDB()
	if err != nil {
		panic(err)
	}

	EnderecoRepository := repository.NewEnderecoRepository(dbConnection)

	UbsRepository := repository.NewUbsRepository(dbConnection)
	UbsUseCase := useCase.NewUbsUseCase(UbsRepository, EnderecoRepository)
	UbsController := controller.NewUbsController(UbsUseCase)

	server.GET("/ubs/:ubsId", UbsController.GetUbsByID)

	MedicoRepository := repository.NewMedicoRepository(dbConnection)
	MedicoUseCase := useCase.NewMedicoUseCase(MedicoRepository, UbsRepository)
	MedicoController := controller.NewMedicoController(MedicoUseCase)
	
	server.GET("/medico/:medicoCpf", MedicoController.GetMedicoByCpf)
	
	server.POST("/medico", MedicoController.CreateMedico)

	server.Run(":8000")
}
