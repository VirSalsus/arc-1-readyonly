/**
 * READ-ONLY FORK: Die .env wird immer aus dem Installationsordner geladen
 * (Elternordner von dist/), unabhaengig vom Arbeitsverzeichnis des Aufrufers.
 * Bereits gesetzte Umgebungsvariablen (z. B. aus dem env-Block der MCP-
 * Registrierung) werden von dotenv nicht ueberschrieben.
 */
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';

export function loadInstallEnv(): void {
  const envPath = fileURLToPath(new URL('../.env', import.meta.url));
  config({ path: envPath, quiet: true });
}
