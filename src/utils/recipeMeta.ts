const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

function hashId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0
  }
  return hash
}

export function getRecipeMeta(idMeal: string) {
  const hash = hashId(idMeal)
  const minutes = 20 + (hash % 7) * 5
  const difficulty = DIFFICULTIES[hash % DIFFICULTIES.length]
  const serves = 2 + (hash % 5)
  return { minutes, difficulty, serves }
}

export function getShortDescription(instructions: string, maxLength = 130): string {
  const clean = instructions.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim()
  if (clean.length <= maxLength) return clean
  const truncated = clean.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`
}
