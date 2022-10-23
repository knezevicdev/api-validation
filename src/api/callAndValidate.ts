import axios, { AxiosRequestConfig } from 'axios';
import { BaseSchema } from 'yup';

const callAndValidate = async <TSchema extends BaseSchema>(
  axiosConfig: AxiosRequestConfig,
  schema: TSchema
): Promise<TSchema['__outputType']> => {
  const { data } = await axios(axiosConfig);

  return schema.validateSync(data);
};

export default callAndValidate;
