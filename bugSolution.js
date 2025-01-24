```javascript
import { useRouter } from 'next/router';
import { ErrorBoundary } from 'react-error-boundary';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/nonexistent-page');
  };

  return (
    <ErrorBoundary fallback={<div>Error! Page Not Found.</div>}>
      <button onClick={handleClick}>Go to Nonexistent Page</button>
    </ErrorBoundary>
  );
}

export default MyComponent;
```