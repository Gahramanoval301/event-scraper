import { lazy } from "react";

const WebRouting = lazy(() => import("./routing"));

function App() {

  return (
    <WebRouting />
  )
}

export default App
