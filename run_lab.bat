@echo off
TITLE Antigravity Lab - Local Server
echo Starting Antigravity Lab Development Server...
echo.
echo [1/2] Checking dependencies...
if not exist node_modules (
    echo node_modules not found. Installing...
    call npm install
)

echo [2/2] Launching Vite...
echo.
echo Web akan terbuka otomatis di browser (biasanya http://localhost:5173)
echo Tekan CTRL+C untuk mematikan server.
echo.

:: Menjalankan npm run dev dan mencoba membuka browser
start http://localhost:5173
call npm run dev

pause
