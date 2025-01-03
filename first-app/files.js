const fileSystem = require('fs')

/**  Read files */

const read = () => {

    fileSystem.readFile('./documents/text.txt', (error, data) => {

        if (error) console.log(error)
        
            console.log(data.toString())
    
    })
    
    console.log('last line')

}



/** Write Files */

const write = () => {

    fileSystem.writeFile('./documents/text1.txt', 'Hola!', () => {

        console.log('Data updated')
    
    })
    

}

/** Directories */

const deleteAndcreateDirs = () => {

    if (!fileSystem.existsSync('./assets')) {

        fileSystem.mkdir('./assets', (error) => {
            if (error) console.log(error)
    
            console.log('Folder created')
        })
    
    } else {
    
        fileSystem.rmdir('./assets', (error) => {
    
            if(error) console.log(error)
            console.log('Folder deleted')
    
        })
    
    }

}

/** Delete files */

const deleteFiles = () => {

    if (fileSystem.existsSync('./documents/text1.txt')) {

        fileSystem.unlink('./documents/text1.txt', (error) => {
    
            if(error) console.log(error)
    
            console.log('File deleted')
    
        })
    
    }
    
}
