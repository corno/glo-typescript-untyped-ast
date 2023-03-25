import * as pd from 'pareto-core-data'

import {
    array, computed,
    dictionary, glossaryParameter, group,
    member, number, ref, string,
    taggedUnion, type, typeReference
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
            "annotation": member(ref(glossaryParameter("Annotation"))),
            "children": member(array(ref(typeReference("UntypedNode")))),
            "flags": member(computed(dictionary(computed(taggedUnion({
                "string": string(),
                "number": number(),
            }))))),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}