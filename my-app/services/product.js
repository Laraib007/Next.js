import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), "db", "Db.json");

export default function getAll(){
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}