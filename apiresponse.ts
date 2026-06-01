interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(`/api/users/${id}`);
  return await response.json();
}

// Usage
const result = await fetchUser(1);
console.log(result.data.name); // TypeScript knows this is a User!