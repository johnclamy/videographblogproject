import ArrowBack from "./icons/ArrowBack"
import Camera from "./icons/Camera"

const ShortsCardHeader = () => {
  return (
    <header className="d-fles justify-content-between">
      <ArrowBack />
      <h1 className="h4 text-center text-capitalize">shorts</h1>
      <Camera />
    </header>
  )
}

export default ShortsCardHeader