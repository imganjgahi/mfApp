import React from 'react'
//@ts-ignore
const ClientHomePage = React.lazy(() => import("client/ClientHomePage"))
import { CheckElement } from '../components/CheckElement';
export function AdminHomePage() {
  return (
    <div>
      <h1 className='adPage'>Admin Home Page is Active!</h1>

      <CheckElement>
        <React.Suspense fallback={() => <div>Loading</div>}>
          <ClientHomePage />
        </React.Suspense>
      </CheckElement>
    </div>
  )
}