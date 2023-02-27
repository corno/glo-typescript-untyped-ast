import * as pd from 'pareto-core-data'

import {
    string,
    number,
    types,
    group,
    member,
    reference,
    array,
    type,
    glossaryParameter,
    computed,
    dictionary,
    taggedUnion,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({}),
    'parameters': d({
        "Annotation": {},
    }),
    'types': d({
        "UntypedNode": type(group({
            "kind": member(string()),
            "annotation": member(glossaryParameter("Annotation")),
            "children": member(array(reference("UntypedNode"))),
            "flags": member(computed(dictionary(computed(taggedUnion({
                "string": string(),
                "number": number(),
            })))))
        })),
    }),
    'interfaces': d({}),
    'functions': d({}),
}