export const formValidators = (formValues: any, fieldsToValidate: string[] = []): string[] => {
  const errors: string[] = [];

  // Validate User Name
  if (fieldsToValidate.includes('userName') || fieldsToValidate.length === 0) {
    if (!formValues.userName || formValues.userName.trim().length === 0) {
      errors.push('User Name should not be empty.');
    } else if (formValues.userName.length < 6) {
      errors.push('User Name must be at least 6 characters long.');
    }
  }

  // Validate Password
  if (fieldsToValidate.includes('password') || fieldsToValidate.length === 0) {
    if (!formValues.password || formValues.password.trim().length === 0) {
      errors.push('Password should not be empty.');
    } else if (formValues.password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }
  }

  // Validate Business Name (only for registration)
  if (fieldsToValidate.includes('businessName')) {
    if (!formValues.businessName || formValues.businessName.trim().length === 0) {
      errors.push('Business Name should not be empty.');
    } else if (formValues.businessName.length < 6) {
      errors.push('Business Name must be at least 6 characters long.');
    }
  }

  // Validate Full Name (only for registration)
  if (fieldsToValidate.includes('fullName')) {
    if (!formValues.fullName || formValues.fullName.trim().length === 0) {
      errors.push('Full Name should not be empty.');
    } else if (formValues.fullName.length < 6) {
      errors.push('Full Name must be at least 6 characters long.');
    }
  }

  return errors;
};