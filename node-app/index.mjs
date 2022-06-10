import fs from 'fs'

fs.appendFile('my-file.txt', 'Файл сощдан Node.js', (err) => {
    if (err) throw err
    console.log('Файл сохранен!')
})

setTimeout(() => console.log('Конц'), 30000)