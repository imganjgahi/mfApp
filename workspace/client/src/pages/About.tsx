import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import appController from '../context/Controller'
import '../styles/index.css'
function ClientAboutPage({parrent}) {
  const controller = appController()
  return (
    <div>
      <small className='slPage'>Client AboutPage in {parrent} app</small>
      <p> Conuter: {controller.counter} </p>
      <Button type='primary' onClick={() => controller.setCounter(controller.counter + 1)} >Go Up</Button>
      <br />
      <Link to={"/"}>Home</Link> <br />
    </div>
  )
}

export default ClientAboutPage