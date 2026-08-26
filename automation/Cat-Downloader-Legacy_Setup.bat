@echo off

REM You set your arguments here
set arguments_setup=-SettingsPath:automation -LogsPath:automation/CDL-Logs -DefaultSettings:false -Mode:CF-Instance
set arguments_launch=-SettingsPath:automation

cd ..
type NUL > .git/hooks/post-merge
echo #!/bin/sh > .git/hooks/post-merge
echo java -jar automation/Cat-Downloader-Legacy.jar %arguments_launch% >> .git/hooks/post-merge

echo Git Hooks have been set up! Running Cat-Downloader-Legacy...

IF EXIST "automation/Cat-Downloader-Legacy-Settings.json5" (java -jar automation/Cat-Downloader-Legacy.jar %arguments_launch%) ELSE (java -jar automation/Cat-Downloader-Legacy.jar %arguments_setup%)

pause