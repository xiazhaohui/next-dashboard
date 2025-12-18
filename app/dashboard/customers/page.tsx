'use client';

import { Button } from '@/app/ui/button';
import { useState } from 'react';

const Page = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Customers Page</p>
      <div>
        <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
        <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
      </div>
      <div>Count: {count}</div>
    </div>
  );
};

export default Page;
