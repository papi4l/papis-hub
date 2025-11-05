// pages/_error.js
function MyError({ statusCode }) {
  return (
    <div style={{ padding: 40, fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Something went wrong</h1>
      <p style={{ color: '#666' }}>
        {statusCode
          ? `An error ${statusCode} occurred on server.`
          : 'An unexpected error occurred.'}
      </p>
    </div>
  )
}

MyError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default MyError
