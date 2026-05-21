#!/usr/bin/env bash

SAVE_DIR=""
SERVERSTARTER_URL="https://github.com/EnigmaticaModpacks/ServerStarter/releases/download/v2.4.0/serverstarter-2.4.0.jar"

ramdisk() {
    if [ -z $SAVE_DIR ]; then 
        echo "SAVE_DIR is empty"
        exit 1
    fi 
    
    case $1 in 
        create)
            echo "Creating ramdisk"
            mv "$SAVE_DIR" "${SAVE_DIR}_backup"
            mkdir "$SAVE_DIR"
            sudo mount -t tmpfs -o size=2G tmpfs "$SAVE_DIR"
        ;;
        remove)
            echo "Removing ramdisk"
            sudo umount "$SAVE_DIR"
            rm -rf "$SAVE_DIR"
            mv "${SAVE_DIR}_backup" "$SAVE_DIR"
            ;;
        *)
            echo "Unknown argument '$1'"
            exit 1
            ;;
    esac
}

if [[
    -f "server-setup-config.yaml" && 
    -f "server.properties" && 
    $(cat server-setup-config.yaml | grep 'ramDisk:' | awk 'BEGIN {FS=":"}{print $2}') =~ "yes"
]]; then
    SAVE_DIR=$(cat server.properties | grep 'level-name' | awk 'BEGIN {FS="="}{print $2}')
    ramdisk "create"
fi

if [ ! -f serverstarter-2.4.0.jar ]; then 
    if command -v wget >> /dev/null; then 
        wget -O serverstarter-2.4.0.jar $SERVERSTARTER_URL
    elif command -v curl >>/dev/null; then
        curl -L -o serverstarter-2.4.0.jar $SERVERSTARTER_URL
    else
        echo "Neither wget or curl were found on your system. Please install one and try again."
    fi
else
    echo "Skipping serverstarter-2.4.0.jar download cause file already exists."
fi

if [ -f serverstarter-2.4.0.jar ]; then
    java -jar serverstarter-2.4.0.jar
fi

if [[  -r "${SAVE_DIR}" && -r "${SAVE_DIR}_backup"  ]]; then 
    ramdisk "remove"
fi