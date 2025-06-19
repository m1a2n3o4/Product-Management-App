export const formValidators = (formValues: any, fieldsToValidate: string[] = []): string[] => {
  const errors: string[] = [];


  if (fieldsToValidate.includes('email') || fieldsToValidate.length === 0) {
    if (!formValues.email || formValues.email.trim().length === 0) {
      errors.push('email should not be empty.');
    } else if (formValues.email.length < 6) {
      errors.push('email be at least 6 characters long.');
    }
  }

 
  if (fieldsToValidate.includes('password') || fieldsToValidate.length === 0) {
    if (!formValues.password || formValues.password.trim().length === 0) {
      errors.push('Password should not be empty.');
    } else if (formValues.password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }
  }

  // Validate Business Name (only for registration)
  if (fieldsToValidate.includes('companyName')) {
    if (!formValues.companyName || formValues.companyName.trim().length === 0) {
      errors.push('Business Name should not be empty.');
    } else if (formValues.companyName.length < 6) {
      errors.push('Business Name must be at least 6 characters long.');
    }
  }

  // Validate Full Name (only for registration)
  if (fieldsToValidate.includes('name')) {
    if (!formValues.name || formValues.name.trim().length === 0) {
      errors.push('Full Name should not be empty.');
    } else if (formValues.name.length < 6) {
      errors.push('Full Name must be at least 6 characters long.');
    }
  }

  // Validate for product forms. 
  // if (fieldsToValidate.includes('name')) {
  //   if (!formValues.name || formValues.name.trim().length === 0) {
  //     errors.push('Product Name should not be empty.');
  //   } else if (formValues.name.length < 4) {
  //     errors.push('Full Name must be at least 4 characters long.');
  //   }
  // }
  // Validate product description
  if (fieldsToValidate.includes('description')) {
    if (!formValues.description || formValues.description.trim().length === 0) {
      errors.push('Product Description should not be empty.');
    } else if (formValues.description.length < 4) {
      errors.push('Full Description must be at least 4 characters long.');
    }
  }

    // Validate product price
    if (fieldsToValidate.includes('price')) {
      if (!formValues.price) {
        errors.push('Product price should not be empty.');
      }
    }


  return errors;
};