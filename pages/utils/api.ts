// Helper functions for API requests
export const signUpApi = async ({ email, password }: { email: string; password: string }) => {
  // Use fetch or your preferred HTTP library to make a POST request to the given API for sign-up
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Sign-up failed');
  }

  // You might want to handle response data or return something specific
  // In this example, we assume the API returns JSON
  const data = await response.json();
  return data;
};
