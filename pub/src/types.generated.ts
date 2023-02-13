import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace Details {
        
        export type location = T.Location
    }
    
    export type Details = {
        readonly 'location': T.Location
    }
    
    export namespace Location {
        
        export type column = number
        
        export type line = number
    }
    
    export type Location = {
        readonly 'column': number
        readonly 'line': number
    }
    
    export namespace UntypedNode {
        
        export namespace children {
            
            export type A = T.UntypedNode
        }
        
        export type children = pt.Array<T.UntypedNode>
        
        export type details = T.Details
        
        export type kindName = string
        
        export type value = string
    }
    
    export type UntypedNode = {
        readonly 'children': pt.Array<T.UntypedNode>
        readonly 'details': T.Details
        readonly 'kindName': string
        readonly 'value': string
    }
}