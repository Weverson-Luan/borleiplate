# Comandos

## Listar devices (emuladores)

````
 1 -> emulator -list-avds
 2 -> adb devices 
````

## Para gear build para o E2E realizar o teste

````
 1 -> LINUX : detox build --configuration android.emu.debug
 2 -> WINDOWS : detox build --configuration android.emu.debug | detox test --configuration android.emu.debug
````
