import React, { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { ErrorsContainer } from './style'

const ErrorDisplay = ({ name, hideErrors }) => {
  const [error, setError] = useState({})

  const { errors } = useFormContext()

  const currentError = useMemo(() => (error ? error.message : ''), [error])

  const renderError = useMemo(() => {
    if (hideErrors) return null

    return <ErrorsContainer>{currentError}</ErrorsContainer>
  }, [currentError, hideErrors])

  useEffect(() => {
    const nested = name.split('.')

    const error = nested.reduce((error, field) => {
      if (!error) return {}

      return error[field]
    }, errors)

    setError(error)
  }, [errors, name])

  return renderError
}

export default ErrorDisplay
