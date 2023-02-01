import * as pt from 'pareto-core-types'


export namespace GLocation {}
export type GLocation = {
    readonly 'column': number
    readonly 'line': number
}
export type ULocation = GLocation

export namespace GUntypedNode {
    
    export namespace Pchildren {}
    export type Pchildren = pt.Array<UUntypedNode>
    
    export namespace Pdetails {}
    export type Pdetails = {
        readonly 'location': ULocation
    }
}
export type GUntypedNode = {
    readonly 'children': GUntypedNode.Pchildren
    readonly 'details': GUntypedNode.Pdetails
    readonly 'kindName': string
    readonly 'value': string
}
export type UUntypedNode = GUntypedNode