import IPoint2D from './class/IPoint2D'

// Distance between 2 2D points.
const distance = (p1:IPoint2D, p2:IPoint2D) => Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2)

export {distance};