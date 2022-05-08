import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import appController from '../context/Controller'

function ClientAboutPage() {
  const controller = appController()
  return (
    <div>
      <h3>ClientAboutPage</h3>
      <p> Conuter: {controller.counter} </p>
      <Button onClick={() => controller.setCounter(controller.counter + 1)} >UP</Button>
      <br />
      <Link to={"/"}>Home</Link> <br />
    </div>
  )
}

export default ClientAboutPage