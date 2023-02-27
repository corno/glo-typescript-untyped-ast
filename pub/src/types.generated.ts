import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace UntypedNode {
        
        export type annotation<GPAnnotation> = GPAnnotation
        
        export namespace children {
            
            export type A<GPAnnotation> = T.UntypedNode<GPAnnotation>
        }
        
        export type children<GPAnnotation> = pt.Array<T.UntypedNode<GPAnnotation>>
        
        export namespace flags {
            
            export namespace C {
                
                export namespace D {
                    
                    export namespace C {
                        
                        export type _lnumber<GPAnnotation> = number
                        
                        export type _lstring<GPAnnotation> = string
                    }
                    
                    export type C<GPAnnotation> = 
                        | ['number', number]
                        | ['string', string]
                }
                
                export type D<GPAnnotation> = () => 
                    | ['number', number]
                    | ['string', string]
            }
            
            export type C<GPAnnotation> = pt.Dictionary<() => 
                | ['number', number]
                | ['string', string]
            >
        }
        
        export type flags<GPAnnotation> = () => pt.Dictionary<() => 
            | ['number', number]
            | ['string', string]
        >
        
        export type kindName<GPAnnotation> = string
        
        export type value<GPAnnotation> = string
    }
    
    export type UntypedNode<GPAnnotation> = {
        readonly 'annotation': GPAnnotation
        readonly 'children': pt.Array<T.UntypedNode<GPAnnotation>>
        readonly 'flags': () => pt.Dictionary<() => 
            | ['number', number]
            | ['string', string]
        >
        readonly 'kindName': string
        readonly 'value': string
    }
}