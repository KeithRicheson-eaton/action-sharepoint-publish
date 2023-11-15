const spsave = require("spsave").spsave;
const fs = require("fs");

const filePath = 'test.md'
//const fileExtensionArr = filePath.split('.')
//const fileExtension = `.${fileExtensionArr[fileExtensionArr.length - 1]}`
//const sha = process.env.GITHUB_SHA.substring(0, 7)
//
//const trimSlashes = (string) => {
//    return string.replace(new RegExp('/', 'g'), '_')
//}

let creds = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
}

let coreOptions = {
    siteUrl: 'https://eaton.sharepoint.com/sites/ERG_SoftwarePlaybook',
}

let fileOptions = {
    folder: 'Shared Documents',
    fileName: 'kdr_test.md',
    fileContent: fs.readFileSync(filePath),
}

spsave(coreOptions, creds, fileOptions)
    .then(() => {
        console.log('Success')
    })
    .catch((_) => {
        process.exit(1)
    })
