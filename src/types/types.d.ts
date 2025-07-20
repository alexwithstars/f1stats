import { SessionV2 } from '../schemas/f1v2.ts'

export type SVG = React.FC<React.SVGProps<SVGSVGElement>>

export interface ISession extends SessionV2 {
  type: string
}
