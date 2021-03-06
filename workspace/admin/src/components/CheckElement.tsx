import React from 'react'
export class CheckElement  extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {    
        // Update state so the next render will show the fallback UI.    
        return { hasError: true }; 
     }
    componentDidCatch() {  }

    render() {
      if (this.state.hasError) {      // You can render any custom fallback UI      
        return <h1>Something went wrong.</h1>
    }
      return <>{this.props.children}</>; 
    }
  }