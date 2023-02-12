import * as pt from 'pareto-core-types'


export namespace T {
    
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
        
        export namespace details {
            
            export type location = T.Location
        }
        
        export type details = {
            readonly 'location': T.Location
        }
        
        export type kindName = string
        
        export type value = string
    }
    
    export type UntypedNode = {
        readonly 'children': pt.Array<T.UntypedNode>
        readonly 'details': {
            readonly 'location': T.Location
        }
        readonly 'kindName': string
        readonly 'value': string
    }
}