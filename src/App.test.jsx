import { render, screen } from '@testing-library/react'
import App from './App'

test('muestra el título de la app', () => {
  render(<App />)
  const titulo = screen.getByRole('heading', {
    level: 1,
    name: /aplicación devops/i
  })
  expect(titulo).toBeInTheDocument()
})

test('muestra el mensaje de despliegue', () => {
  render(<App />)
  const mensaje = screen.getByText(/Desplegado con GitHub Actions/i)
  expect(mensaje).toBeInTheDocument()
})

test('el título principal es un h1', () => {
  render(<App />)
  const h1 = screen.getByRole('heading', { level: 1 })
  expect(h1).toBeInTheDocument()
})