import {Suspense} from 'react'
import App from './App.tsx'
import './index.css'
import {render} from 'react-dom'

//** 👇 De-comment this to add studio mode **//
//**   and go to App.tsx for the next step **//

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

// studio.extend(extension);
// studio.initialize();

render(
  <Suspense fallback={null}>
    <App/>
  </Suspense>,
  document.getElementById('root')
)