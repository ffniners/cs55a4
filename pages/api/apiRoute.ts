import type { NextApiRequest, NextApiResponse } from 'next'; 
import fs from 'fs';
import path from 'path';


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}




