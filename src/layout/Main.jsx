import React, { useEffect, useState } from 'react'
import Article from '../components/Article'
import Aside from '../components/Aside'
import axios from 'axios'

function Main() {

  const [aleatorioAside,setAleatorioAside]=useState("2")
  const [personajes,setPersonajes]=useState([])
  const [personajesAside,setPersonajesAside]=useState([])
  const [aleatorio,setAleatorio]=useState("")
  const [rango,setRango]=useState(0)
  const [aleatorioHumanos,setAleatorioHumanos]=useState("")
  const [aleatorioExtraterrestres,setAleatorioExtraterrestres]=useState("")
  const [aleatorioVivos,setAleatorioVivos]=useState("")
  const [aleatorioNoVivos,setAleatorioNoVivos]=useState("")

  useEffect(()=>{
    apiCharacters()
    apiAside()
  },[])

  const apiCharacters = async() =>{
      return await axios.get(`https://rickandmortyapi.com/api/character?page=${aleatorio}`).then((respuesta)=>{
        setPersonajes(respuesta.data.results)})
    }

  const apiAside = async() =>{
    return await axios.get(`https://rickandmortyapi.com/api/character?page=${aleatorioAside}`).then((respuesta)=>{
      setPersonajesAside(respuesta.data.results)})
    }

  const apiHumanos = async() =>{
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=${aleatorioHumanos}&species=Human`).then((respuesta)=>{
      setPersonajes(respuesta.data.results)})
    }

  const apiExtraterrestres = async() =>{
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=${aleatorioExtraterrestres}&species=Alien`).then((respuesta)=>{
      setPersonajes(respuesta.data.results)})
     }
        
  const apiVivos = async() =>{
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=${aleatorioVivos}&status=Alive`).then((respuesta)=>{
      console.log(respuesta)
      setPersonajes(respuesta.data.results)})
    }

  const apiNoVivos = async() =>{
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=${aleatorioNoVivos}&status=Dead`).then((respuesta)=>{
      setPersonajes(respuesta.data.results)})
    }

  const random = () =>{
    setAleatorioAside(String(parseInt(Math.random() * (41- 1) + 1)))
    setAleatorio(String(parseInt(Math.random() * (41- 1) + 1)))
    apiCharacters()
    range()
    apiAside()
    }

  const range = () =>{
    setRango(parseInt(Math.random()*(14-1)+1))
  }

  const randomHumanos = () =>{
    setAleatorioAside(String(parseInt(Math.random() * (41- 1) + 1)))
    setAleatorioHumanos(String(parseInt(Math.random() * (22- 1) + 1)))
    setRango(parseInt(Math.random()*(14-1)+1))
    apiHumanos()
    apiAside()
  }

  const randomExtraterrestres = () =>{
    setAleatorioAside(String(parseInt(Math.random() * (41- 1) + 1)))
    setAleatorioExtraterrestres(String(parseInt(Math.random() * (11- 1) + 1)))
    setRango(parseInt(Math.random()*(14-1)+1))
    apiExtraterrestres()
    apiAside()
  }

  const randomVivos = () =>{
    setAleatorioAside(String(parseInt(Math.random() * (41- 1) + 1)))
    setAleatorioVivos(String(parseInt(Math.random() * (22- 1) + 1)))
    setRango(parseInt(Math.random()*(14-1)+1))
    apiVivos()
    apiAside()
  }

  const randomNoVivos = () =>{
    setAleatorioAside(String(parseInt(Math.random() * (41- 1) + 1)))
    setAleatorioNoVivos(String(parseInt(Math.random() * (15- 1) + 1)))
    setRango(parseInt(Math.random()*(14-1)+1))
    apiNoVivos()
    apiAside()
  }

  let characters5 = personajes.slice(rango,rango+6)
  let charactersAside = personajesAside.slice(rango,rango+6)
 
console.log(rango)
  return (
    <>
    <nav id="navegationBar">
        <ul>
          <li onClick={()=>random()} className='inline-block mt-[2px] mr-[5px] font-bold cursor-pointer hover:text-green-500'>Aleatorio</li>
          <li onClick={()=>randomHumanos()} className='inline-block mt-[2px] mr-[5px] font-bold cursor-pointer hover:text-green-500'>Humanoides</li>
          <li onClick={()=>randomExtraterrestres()} className='inline-block mt-[2px] mr-[5px] font-bold cursor-pointer hover:text-green-500'>Extraterrestres</li>
          <li onClick={()=>randomVivos()} className='inline-block mt-[2px] mr-[5px] font-bold cursor-pointer hover:text-green-500'>Personajes vivos</li>
          <li onClick={()=>randomNoVivos()} className='inline-block mt-[2px] mr-[5px] font-bold cursor-pointer hover:text-green-500'>Personajes muertos</li>
        </ul>
      </nav>
    <div className="flex w-full h-[900px] px-[5px]">
        <section className="border-[1px] border-solid border-black flex justify-evenly flex-wrap ">
        {
          characters5.map((character)=>{
            return(
            <Article personaje={character}/>
            )
          })
        }
        </section>
        <Aside className="mr-2" characters={charactersAside}/> 
    </div>
    </>
  )
}

export default Main
// axius-libreria    fetch-nativa
// hooks  useState y useEffect
// useQuery useSignall