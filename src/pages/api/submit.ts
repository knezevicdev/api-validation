// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next';
import * as yup from 'yup';
import withValidation, { ApiRequest } from '../../middlewares/withValidation';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
  dateOfBirth: yup.date().required(),
  subscribe: yup.boolean().required(),
});

type Data = {
  name: string;
};

function handler(
  req: ApiRequest<typeof schema['__outputType']>,
  res: NextApiResponse<Data>
) {
  console.log(req.data);
  const name = `${req.data.firstName} ${req.data.lastName}`;

  res.status(200).json({ name });
}

export default withValidation(handler, schema);
