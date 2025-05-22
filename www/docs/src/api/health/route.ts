import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa"

export const GET = (req: MedusaRequest, res: MedusaResponse) => {
  res.status(200).json({ status: "OK" })
}
