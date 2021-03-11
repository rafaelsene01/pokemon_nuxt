export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

// Metodo de exemplo para ser testado.
export const name = (name: string): string | undefined => {
  if (!name) {
    return
  }

  return name
}
