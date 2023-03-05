import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace UntypedNode {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export namespace children {
            
            export type A<GAnnotation> = T.UntypedNode<GAnnotation>
        }
        
        export type children<GAnnotation> = pt.Array<T.UntypedNode<GAnnotation>>
        
        export namespace flags {
            
            export namespace C {
                
                export namespace D {
                    
                    export namespace C {
                        
                        export type _lnumber<GAnnotation> = number
                        
                        export type _lstring<GAnnotation> = string
                    }
                    
                    export type C<GAnnotation> = 
                        | ['number', number]
                        | ['string', string]
                }
                
                export type D<GAnnotation> = () => 
                    | ['number', number]
                    | ['string', string]
            }
            
            export type C<GAnnotation> = pt.Dictionary<() => 
                | ['number', number]
                | ['string', string]
            >
        }
        
        export type flags<GAnnotation> = () => pt.Dictionary<() => 
            | ['number', number]
            | ['string', string]
        >
        
        export type kind<GAnnotation> = string
    }
    
    export type UntypedNode<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'children': pt.Array<T.UntypedNode<GAnnotation>>
        readonly 'flags': () => pt.Dictionary<() => 
            | ['number', number]
            | ['string', string]
        >
        readonly 'kind': string
    }
}