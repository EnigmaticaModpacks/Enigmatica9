#!/bin/sh

ARGUMENTS_SETUP="-SettingsPath:automation -LogsPath:automation/CDL-Logs -DefaultSettings:false -Mode:CF-Instance"
ARGUMENTS_LAUNCH="-SettingsPath:automation"

cd ..
echo "#!/bin/sh" > .git/hooks/post-merge
echo "java -jar automation/Cat-Downloader-Legacy.jar ${ARGUMENTS_LAUNCH}" >> .git/hooks/post-merge
chmod +x .git/hooks/post-merge

echo Git Hooks have been set up! Running Cat-Downloader-Legacy...

if [ -f "automation/Cat-Downloader-Legacy-Settings.json5" ]; then  
    java -jar automation/Cat-Downloader-Legacy.jar ${ARGUMENTS_LAUNCH}
else  
    java -jar automation/Cat-Downloader-Legacy.jar ${ARGUMENTS_SETUP}
fi  
