import { Button, ConfigProvider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import appController from '../context/Controller'

export function ClientHomePage() {

  const controller = appController()
  const colors = {
    light: {
      fontColor: "#444444",
      primaryFontColor: "#444444",
      backgroundColor: "#ffffff",
      primaryColor: '#41a940',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#41a940',
    },
    dark: {
        fontColor: "#eeeeee",
        primaryFontColor: "#444444",
        backgroundColor: "#444444",
        primaryColor: '#f08080',
        errorColor: '#ff4d4f',
        warningColor: '#faad14',
        successColor: '#52c41a',
        infoColor: '#f08080',
    },
  }

  
  function changeTheme(theme) {
    console.log("Change app Theme")
    ConfigProvider.config({
      theme,
    });
    document.documentElement.style.setProperty(`--fontColor`, theme.fontColor)
    document.documentElement.style.setProperty(`--background`, theme.backgroundColor)
    document.documentElement.style.setProperty(`--primaryFontColor`, theme.primaryFontColor)
  }
  return (
    <div className='homePage'>
      <h1>Home Page is Active!</h1>
      <p> Conuter: {controller.counter} </p>
      <Button onClick={() => controller.setCounter(controller.counter + 1)} >UP</Button>
      <br />
      <Link to={"/about"}>About</Link> <br />
      <Button type="primary" onClick={() => changeTheme(colors.light)}>Light</Button>
      <Button type="primary" onClick={() => changeTheme(colors.dark)}>Dark</Button>
    </div>
  )
}