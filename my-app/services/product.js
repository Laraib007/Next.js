import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), "db", "Db.json");

export default function getAll(){
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}
export function getById(id){
    const data = getAll()
   return data.find(p => p.id === Number(id))
}
export function save(name, project, projectDetail){
    const data = getAll()
    data.push({
        id: data.length + 1,
        name, project, projectDetail
    })
    fs.writeFileSync(filePath, JSON.stringify(data))
}