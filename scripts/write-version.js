// Menulis public/version.json saat build agar aplikasi bisa mendeteksi versi baru.
// Versi = git short SHA dari commit yang di-build (berubah tiap push).
import { execSync } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'

let version = ''
try {
  version = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
} catch {
  version = String(Date.now())
}

mkdirSync(new URL('../public', import.meta.url), { recursive: true })
writeFileSync(
  new URL('../public/version.json', import.meta.url),
  JSON.stringify({ version }) + '\n',
)
console.log(`version.json -> ${version}`)
