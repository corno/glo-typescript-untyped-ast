import * as pd from 'pareto-core-data'

import {
    string,
    number,
    types,
    group,
    member,
    array,
    type,
    glossaryParameter,
    computed,
    dictionary,
    taggedUnion,
    ref,
    typeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'types': d({
        "UntypedNode": type(group({
            "kind": member(string()),
            "annotation": member(glossaryParameter("Annotation")),
            "children": member(array(ref(typeReference("UntypedNode")))),
            "flags": member(computed(dictionary(computed(taggedUnion({
                "string": string(),
                "number": number(),
            }))))),
        })),
    }),
    'type': ['asynchronous', {
        'interfaces': d({}),
        'functions': d<g_glossary.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation>>({}),
    }],
}