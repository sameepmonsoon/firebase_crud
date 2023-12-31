// signup form regex validation
const validateUserForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "User name is required";
  } else {
    if (values.username.trim().length === 0) {
      errors.username = "Username contain be empty.";
    }
    let userRegEx = /^[a-zA-Z0-9_.-]*$/;
    if (!userRegEx.test(values?.username)) {
      errors.username = "Invalid Username";
    }
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else {
    let emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,5}$/i;
    if (!emailRegEx.test(values.email)) {
      errors.email = "Email is not valid";
    }
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }
  if (values?.password?.trim().length === 0) {
    errors.password = "Password can't contain empty space";
  } else {
    let passwordRegEx = /^(?=.{2,}\d)(?=.{2,}[a-zA-Z])(?=.*[\W]).{6,10}$/;
    if (!passwordRegEx.test(values?.password)) {
      errors.password =
        "Password must contain (6-10) characters, one uppercase, one lowercase, one special-character and one number ";
    }
  }
  if (!values.roles) {
    errors.roles = "Roles Cannot be empty.";
  } else {
    let rolesRegEx = /^[a-zA-Z0-9]{4,10}$/;

    if (!rolesRegEx.test(values.roles)) {
      errors.roles = "Roles must be string ";
    }
  }
  return errors;
};

// function for faq post
const validateFAQPost = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "FAQ title is required";
  } else if (values.title.trim().length === 0) {
    errors.title = "FAQ title can't contain empty space";
  } else if (values.title.trim().length < 10) {
    errors.title = "FAQ title must contain atleast 10 characters.";
  } else {
    let userRegEx = /^[a-zA-Z\s.?a-zA-z]+\.?\??$/;
    if (!userRegEx.test(values?.title)) {
      errors.title = "Title can't contain number.";
    }
  }

  // if (!isQuillEmpty(values?.body)) {
  //   errors.body = "FAQ content is required";
  // }
  // else if (values?.body?.trim().length === 0) {
  //   errors.body = "FAQ content can't contain empty space";
  // } else if (values?.body?.trim().length < 20) {
  //   errors.body = "FAQ content must contain atleast 20 characters.";
  // }

  return errors;
};

// function to check if the react quill value is empty
function isQuillEmpty(value) {
  if (
    value.replace(/<(.|\n)*?>/g, "").trim().length === 0 &&
    !value.includes("<img")
  ) {
    return true;
  }
  return false;
}

export { validateUserForm, validateFAQPost, isQuillEmpty };
