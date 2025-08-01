import React, { useEffect, useState } from 'react'

function Scanner() {
  const [result, setResult] = useState('')

  const handleScan = async () => {
    try {
      const res = await fetch('/api/scan') // Call backend route
      const data = await res.json()
      setResult(data.message)
    } catch (err) {
      setResult('Failed to scan.')
    }
  }

  return (
    <div>
      <button onClick={handleScan}>Scan Barcode</button>
      <p>{result}</p>
    </div>
  )
}

export default Scanner
