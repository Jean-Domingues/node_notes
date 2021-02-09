const fs = require('fs').promises
const path = require('path');

async function readDir(rootDir){
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir)
  walk(files, rootDir)
}

async function walk(files, dirName){
  for(let file of files){
    const fullPath = path.resolve(dirName, file)
    const stats = await fs.stat(fullPath)

    if(/\.git/g.test(fullPath)) continue
    if(/node_modules/g.test(fullPath)) continue

    if(stats.isDirectory()){
      readDir(fullPath)
      continue
    }

    if(!/\.css/g.test(fullPath)) continue
    console.log(fullPath)
  }
}

readDir(process.argv.slice(2).toString())