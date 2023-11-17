function isStrongPassword(password) {
  if (password.length < 8) return false;
  if (password.indexOf("password") !== -1) return false;
  if (
    !(() => {
      for (let i = 0; i < password.length; i++) {
        let ascii = password.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) return true;
      }
      return false;
    })()
  )
    return false;

  return true;
}
