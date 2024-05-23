import {envs} from './config/env.js'
import {startServer} from './server/server.js'
const main=()=>{
  startServer({
    port: envs.PORT,
    public_path:envs.PUBLIC_PATH
  })
}

//funcion agnostica autoconvocada
//agnostica por que no tiene nombre
// autoconvocada por que la ejecutamos con los parentesis
(async ()=>{
  main()
})()