const fs = require('fs')

const readStream = fs.createReadStream('./documents/big.txt', { encoding: 'utf8' })
const writeSteam = fs.createWriteStream('./documents/tes1t.txt')

// readStream.on('data', (chunk) => {

//     console.log('------- NEW CHUNK ---------')
//     console.log(chunk)

//     writeSteam.write('\nNEW CHUNK\n')
//     writeSteam.write(chunk)

// })

// piping

readStream.pipe(writeSteam)
