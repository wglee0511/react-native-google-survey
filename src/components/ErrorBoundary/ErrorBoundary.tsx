import React, { ReactNode } from "react";

import { reloadAppAsync } from "expo";

interface Props extends React.PropsWithChildren {
  fallback?: ReactNode;
  boundary?: string;
}

interface State {
  hasError: boolean;
  boundary?: string;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      boundary: props.boundary
    };
  }

  public static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { boundary } = this.state;
    console.log(`${boundary} boundary error:`, error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }
      reloadAppAsync();
    }

    return children;
  }
}

export default ErrorBoundary;
