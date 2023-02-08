import ThreeCanvas from "@/component/threeCanvas"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Cube with few animation </h1>
      <div className = {styles.canvasContainer}>
        <ThreeCanvas />
      </div>
    </main>
  )
}
