import * as yup from "yup";

const createPersonShape = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required(),
  nickname: yup.string().required(),
  gender: yup.string().required(),
  phone: yup.string().required(),
  adress: yup.string().required(),
  comments: yup.string().required(),
  profile_picture: yup.string(),
});

export default createPersonShape;
