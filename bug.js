```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to a page that doesn't exist
    router.push('/nonexistent-page'); 
  };

  return (
    <button onClick={handleClick}>Go to Nonexistent Page</button>
  );
}

export default MyComponent;
```