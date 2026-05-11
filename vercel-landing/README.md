# Vercel Landing — CycleRace Pro

Mini landing en React (Vite) para desplegar individualmente en Vercel.

Rápido:

```bash
# instalar dependencias
npm install

# desarrollar localmente
npm run dev

# generar build
npm run build

# previsualizar build
npm run preview
```

Instrucciones de despliegue en Vercel:

1. Empuja tu repositorio a GitHub/GitLab/Bitbucket.
2. En Vercel elige "Import Project" y selecciona tu repositorio.
3. En "Root Directory" especifica `vercel-landing`.
4. Build command: `npm run build` — Output directory: `dist`.
5. Despliega.

Notas:

- Este paquete usa Vite + React para un build estático en `dist`.
- Si quieres, puedo añadir `vercel.json` o ayudarte a conectar el repo.