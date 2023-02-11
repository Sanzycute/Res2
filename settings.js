const fs = require('fs')

global.creator = 'Sanzy' 
global.apikey = ["SanzyBot", "SanzyYT", "Sanzy"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
