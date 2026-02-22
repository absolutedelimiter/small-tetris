import Tetris from "./Tetris.jsx";

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>small-tetris</div>
        <div style={styles.subtitle}>Canvas • Touch • GitHub Pages ready</div>
      </header>

      <main style={styles.main}>
        <Tetris />
      </main>

      <footer style={styles.footer}>
        <span>Keyboard: ← → ↓ (soft drop) • ↑ / X rotate • Space hard drop • C hold • P pause</span>
      </footer>
    </div>
  );
}

const styles = {
  page: { minHeight: "100%", display: "flex", flexDirection: "column" },
  header: { padding: "18px 18px 10px", display: "flex", alignItems: "baseline", gap: 14 },
  brand: { fontSize: 18, fontWeight: 800, letterSpacing: 0.6 },
  subtitle: { opacity: 0.7, fontSize: 13 },
  main: { flex: 1, display: "grid", placeItems: "center", padding: 18 },
  footer: { padding: "10px 18px 18px", opacity: 0.6, fontSize: 12, textAlign: "center" },
};