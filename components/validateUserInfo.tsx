interface UserData {
  username?: string;
  email?: string;
  password?: string;
}

interface ValidationErrors {
  username: string;
  email: string;
  password: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

export const validateUserData = (userData: UserData): ValidationResult => {
  let errors: ValidationErrors = {username: '', email: '', password: ''};
  let isValid = true;

  if (userData?.username && !userData.username.trim()) {
    errors.username = 'username is required.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.email || !emailRegex.test(userData.email)) {
    errors.email = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!userData.password || userData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  return {isValid, errors};
};
