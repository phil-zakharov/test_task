import React from 'react';

export class ErrorBoundaryProvider extends React.Component<
  React.PropsWithChildren<{ fallback: React.ReactNode }>
> {
  state: Readonly<{ hasError: boolean }>;

  constructor(props: React.PropsWithChildren<{ fallback: React.ReactNode }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(' error:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.log(' info:', info);
    console.log(' error:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}