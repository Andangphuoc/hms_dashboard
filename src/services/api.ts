export const logMeal = async (meal: { name: string; calories: number }) => {
  // Placeholder for API call
  console.log('Sending meal to backend:', meal);
  return { success: true, data: meal };
};

export const fetchUserData = async (userId: string) => {
  // Placeholder for API call
  console.log('Fetching user data for ID:', userId);
  return { id: userId, name: 'John Doe', email: 'john@example.com' };
};