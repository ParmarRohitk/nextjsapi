// Helper functions for API requests
export const signUpApi = async ({ email, password }: { email: string; password: string }) => {
  // Use fetch or your preferred HTTP library to make a POST request to the given API for sign-up
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  console.log(response);

  if (!response.ok) {
    throw new Error('Sign-up failed');
  }

  // You might want to handle response data or return something specific
  // In this example, we assume the API returns JSON
  const data = await response.json();
  return data;
};
// Helper functions for API requests

export const signInApi = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  console.log('hello',response);


  if (!response.ok) {
    throw new Error('Sign-in failed');
  }

  const data = await response.json();
  return data;
};

export const logoutApi = async () => {
  const response = await fetch('https://reqres.in/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }

  const data = await response.json();
  return data;
};
