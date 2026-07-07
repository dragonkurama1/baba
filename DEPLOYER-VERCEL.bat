@echo off
title JAYPEE — Déploiement Vercel
cd /d "%~dp0"
echo.
echo  ╔══════════════════════════════════════════╗
echo  ║     JAYPEE — Mise à jour Vercel          ║
echo  ╚══════════════════════════════════════════╝
echo.
echo  Ajout de tous les fichiers...
git add -A
echo.
echo  Création du commit...
git commit -m "Mise à jour : images produits + corrections JS/CSS"
echo.
echo  Envoi vers GitHub/Vercel...
git push
echo.
echo  ════════════════════════════════════════════
echo  ✓ Terminé ! Vercel va redéployer en 1-2 min.
echo  Vérifiez : https://jaypee-39gf5tvt9-abdonaim2006-8743s-projects.vercel.app
echo  ════════════════════════════════════════════
echo.
pause
