import React from 'react'
//@ts-ignore
const ClientAboutPage = React.lazy(() => import("client/ClientAboutPage"))
import appController from '../context/Controller';
import { Button } from 'antd';
import { CheckElement } from '../components/CheckElement';

function AboutPage() {
  const controller = appController()
  return (
    <>
      <div>
        <small>Admin AboutPage</small>
        <p> Conuter: {controller.counter} </p>
        <Button type='primary' onClick={() => controller.setCounter(controller.counter + 1)} >UP</Button>
      </div>

      <CheckElement>
        <React.Suspense fallback={() => <div>Loading</div>}>
          <ClientAboutPage parrent={"admin"} />
        </React.Suspense>
      </CheckElement>
    </>
  )
}

export default AboutPage