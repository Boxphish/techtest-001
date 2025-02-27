import { UsersInput } from "../interfaces/UsersInput";
import { UsersOutput } from "../interfaces/UsersOutput";
import missingPasswordAlert from "./utils/missingPasswordAlert";
import splitRealName from "./utils/splitRealName";

export default function transformData(user: UsersInput): UsersOutput {
  //use the name splitter util to transform names
  const fullName = splitRealName(user.real_name);
  // const validEmail = validateEmail(user.email_address);
  const checkedPassword = missingPasswordAlert(
    user.password,
    user.email_address,
    user.user_name
  );

  return {
    breach_id_record: user.user_id,
    username: user.user_name,
    first_name: fullName.firstName,
    family_name: fullName.familyName,
    password: checkedPassword,
    hash: user.password_hash,
    salt: "salt", //somefunction(user.password_hash)
    email: user.email_address, //validationFunction(user.email_address)
    gender: user.gender, //genderFunction(user),
    dob: user.birthdate, //formatDate(user.birthdate)
    address: user.location,
    ip: user.member_ip, //formatIP(user.ip_address)
    secret_question_one: user.secret_question,
    secret_answer_one: user.secret_answer,
    secret_question_two: user.secret_question_two || undefined,
    secret_answer_two: user.secret_answer_two || undefined,
    secret_question_three: user.secret_question_three || undefined,
    secret_answer_three: user.secret_answer_three || undefined,
  };
}
