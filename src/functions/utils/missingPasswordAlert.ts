export default function missingPasswordAlert(
  password: string,
  email: string,
  username: string
): string | undefined {
  if (password) password;

  try {
    //send out an alert to the user asking them to enter their password.
    //just log to the console for now
    console.log(
      `User ${username} has a missing password, rerteival email sent to ${email}`
    );
  } catch (error) {
    console.error("Error password retrieval", error);
  }
  return undefined;
}
