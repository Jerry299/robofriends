import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, sethasError] = useState(false);
  return hasError ? <h1> OOOOPs That's not Good.</h1> : children;
};

export default ErrorBoundary;
