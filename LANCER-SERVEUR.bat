@echo off
title JAYPEE — Serveur Local
echo.
echo  ╔══════════════════════════════════════╗
echo  ║     JAYPEE — Serveur Local           ║
echo  ╚══════════════════════════════════════╝
echo.

:: Essayer Python 3
python --version >nul 2>&1
if %errorlevel%==0 (
    echo  Serveur demarré sur : http://localhost:8080
    echo  Ouvrez votre navigateur sur cette adresse.
    echo  Appuyez sur CTRL+C pour arrêter.
    echo.
    python -m http.server 8080
    goto :end
)

:: Essayer Python via py launcher
py --version >nul 2>&1
if %errorlevel%==0 (
    echo  Serveur demarré sur : http://localhost:8080
    echo  Ouvrez votre navigateur sur cette adresse.
    echo  Appuyez sur CTRL+C pour arrêter.
    echo.
    py -m http.server 8080
    goto :end
)

:: Essayer Node.js
node --version >nul 2>&1
if %errorlevel%==0 (
    echo  Serveur Node.js demarré sur : http://localhost:8080
    echo  Ouvrez votre navigateur sur cette adresse.
    echo  Appuyez sur CTRL+C pour arrêter.
    echo.
    npx --yes http-server . -p 8080 -c-1
    goto :end
)

echo  ERREUR : Python et Node.js sont introuvables.
echo.
echo  Installez l'un d'eux :
echo  - Python : https://www.python.org/downloads/
echo  - Node.js : https://nodejs.org/
echo.
pause
:end
