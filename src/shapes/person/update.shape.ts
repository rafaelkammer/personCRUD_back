import * as yup from "yup";

const updatePersonShape = yup.object().shape({
  name: yup.string(),
  cpf: yup.string(),
  nickname: yup.string(),
  gender: yup.string(),
  phone: yup.string(),
  adress: yup.string(),
  comments: yup.string(),
  profile_picture: yup.string(),
});

export default updatePersonShape;
