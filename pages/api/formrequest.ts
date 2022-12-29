// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormDataType } from '../../models/form.model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FormDataType>
) {
    // const dataObj = req.
    console.log(req.body)
  res.status(200).json(req.body)
}
