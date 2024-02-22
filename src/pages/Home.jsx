{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
 POPUP
    </div> */}
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"
import Island from "../models/island2"

const Home = () => {
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -10.5, -23];
        let roration = [0, 0, 0]

        if(window.innerHeight < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenScale, screenPosition, roration]
    }
    const [islandScale, islandPosition, islandRoration] =  adjustIslandForScreenSize()
  return (
    <section className="w-full h-screen relative">
        <Canvas className="w-full h-screen bg-transparent"
        camera={ {near: 0.1, far: 1000}}>
            <Suspense fallback={<Loader/>}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight position={[1,0,0]} intensity={70}/>
                <Island
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRoration}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home