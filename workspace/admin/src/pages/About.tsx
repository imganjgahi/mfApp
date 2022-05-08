import React from 'react'
//@ts-ignore
import ClientAboutPage from "client/ClientAboutPage";
import appController from '../context/Controller';
import { Button } from 'antd';

function AboutPage() {
  const controller = appController()
  return (
    <>
      <div>
        <small>Admin AboutPage</small>
        <p> Conuter: {controller.counter} </p>
        <Button type='primary' onClick={() => controller.setCounter(controller.counter + 1)} >UP</Button>
      </div>
      <ClientAboutPage />
    </>
  )
}

export default AboutPage