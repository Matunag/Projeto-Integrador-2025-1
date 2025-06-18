package model

import (
	"database/sql/driver"
	"fmt"
	"strings"
	"time"
)

type DateOnly struct {
	time.Time
}

// Formato JSON (serialização)
func (d *DateOnly) MarshalJSON() ([]byte, error) {
	formatted := fmt.Sprintf("\"%s\"", d.Time.Format("2006-01-02"))
	return []byte(formatted), nil
}

// Formato JSON (desserialização)
func (d *DateOnly) UnmarshalJSON(b []byte) error {
	str := strings.Trim(string(b), "\"")
	t, err := time.Parse("2006-01-02", str)
	if err != nil {
		return err
	}
	d.Time = t
	return nil
}

// Suporte ao Scan do banco de dados (leitura)
func (d *DateOnly) Scan(value interface{}) error {
	t, ok := value.(time.Time)
	if !ok {
		return fmt.Errorf("cannot scan type %T into DateOnly", value)
	}
	d.Time = t
	return nil
}

// Suporte ao Value do banco de dados (escrita)
func (d DateOnly) Value() (driver.Value, error) {
	return d.Time, nil
}
