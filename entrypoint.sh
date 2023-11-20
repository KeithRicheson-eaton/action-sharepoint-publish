#!/bin/sh -l

# if the FILE_PATH exists then we will just be uploading the file
if [[ -z $FILE_PATH ]]
then
    const sha = process.env.GITHUB_SHA.substring(0, 7)

    const trimSlashes = (string) => {
        return string.replace(new RegExp('/', 'g'), '_')
    }
    const fileName = `${trimSlashes(process.env.GITHUB_REPOSITORY)}_${sha}_.zip`,

    export FILE_PATH="/out/${fileName}"
    mkdir /out
    cd "$GITHUB_WORKSPACE"
    echo "Creating archive";
    zip -r "$FILE_PATH" ./* -x .git/*
fi

# run the script to send to sharepoint
node /app/index.js
[ $? -eq 0 ]  || exit 1

