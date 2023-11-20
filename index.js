const spsave = require("spsave").spsave;

console.log('Starting index')

let creds = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
}

let coreOptions = {
    siteUrl: process.env.SITE_URL,
}

let fileOptions = {
    folder: process.env.LIB_FOLDER,
    glob: [ process.env.FILE_PATH ],
    base: process.env.BASE_PATH
}

console.log(fileOptions)
console.log('calling spsave')

spsave(coreOptions, creds, fileOptions)
    .then(() => {
        console.log('Success')
    })
    .catch((_) => {
        process.exit(1)
    })
