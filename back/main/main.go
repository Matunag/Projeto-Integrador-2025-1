package main

import (
	"back/db"

	"github.com/gin-gonic/gin"
)

func main()  {
	server := gin.Default()

	_, err := db.ConnectDB()
	if err != nil {
		panic(err)
	}

	server.Run(":8000")
}