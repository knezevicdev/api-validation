import { NextApiHandler } from 'next';
import { BaseSchema } from 'yup';
import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';

export type ApiRequest<TOutput> = NextApiRequest & { data: TOutput };
type ApiHandler<TOutput> = (
  req: ApiRequest<TOutput>,
  res: NextApiResponse
) => unknown | Promise<unknown>;

const withValidation =
  <TSchema extends BaseSchema>(
    handler: ApiHandler<TSchema['__outputType']>,
    schema: TSchema
  ): NextApiHandler =>
  (req, res) => {
    try {
      (req as any).data = schema.validateSync(req.body);
    } catch (e) {
      console.log(e);
      res.status(500).end();
      return;
    }

    handler(req as any, res);
  };

export default withValidation;
