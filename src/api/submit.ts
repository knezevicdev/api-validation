import * as yup from 'yup';
import callAndValidate from './callAndValidate';

const schema = yup.object({
  name: yup.string().required(),
});

const submit = async (payload: Record<string, unknown>) => {
  const response = await callAndValidate(
    {
      url: '/api/submit',
      method: 'POST',
      data: payload,
    },
    schema
  );

  return response;
};

export default submit;
