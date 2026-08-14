# Sync Music 🎵

App de música con reproducción en segundo plano (Capacitor + Android).

## Cómo obtener el APK (sin PC)

1. Ve a la pestaña **Actions** de este repositorio
2. Selecciona el workflow **Build Android APK**
3. Cuando termine (unos 3-6 minutos), entra al run
4. En **Artifacts** descarga `sync-music-apk`
5. Descomprime el zip e instala el `.apk` en tu Android

> Activa "Fuentes desconocidas" o "Instalar apps desconocidas" si te lo pide.

## Backend

Usa el backend: `https://backend-1-k2na.onrender.com`

## Notas

- El primer build puede tardar un poco más.
- Cada vez que subas cambios a `main`, se generará un nuevo APK automáticamente.
- También puedes lanzar el build manualmente desde la pestaña Actions → "Run workflow".

Hecho para funcionar sin computadora usando GitHub Actions.
