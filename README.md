# Reactjs - side effects - useEffect - useCallback

## useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.
https://react.dev/reference/react/useEffect

```
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
	const [serverUrl, setServerUrl] = useState('https://localhost:1234');

	useEffect(() => {
		const connection = createConnection(serverUrl, roomId);
		connection.connect();
		return () => {
			connection.disconnect();
		};
	}, [serverUrl, roomId]);
	// ...
}
```

## useCallback

useCallback is a React Hook that lets you cache a function definition between re-renders.

https://react.dev/reference/react/useCallback

```
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
	const handleSubmit = useCallback((orderDetails) => {
		post('/product/' + productId + '/buy', {
			referrer,
			orderDetails,
		});
	}, [productId, referrer]);
});
```

https://react.dev/learn/synchronizing-with-effects
