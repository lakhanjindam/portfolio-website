import styles from './CreativeTextAnimation.module.css'

export default function CreativeTextAnimation() {
  return (
    <div className={styles.creativeText}>
      A,
      <span style={{ animationDelay: 'calc(-3s * 0)' }} data-text="Techie">Techie</span>
      <span style={{ animationDelay: 'calc(-3s * 1)' }} data-text="Developer">Developer</span>
      <span style={{ animationDelay: 'calc(-3s * 2)' }} data-text="Tinkerer">Tinkerer</span>
    </div>
  )
}

