// pages/404.js
export default function Custom404() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      background: '#fafafa'
    }}>
      <h1 style={{ fontSize: 48, color: '#111' }}>404</h1>
      <p style={{ color: '#555' }}>Sorry, the page you’re looking for doesn’t exist.</p>
    </div>
  )
}
