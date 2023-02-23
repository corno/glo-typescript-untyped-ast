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
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({}),
    'parameters': d({}),
    'types': d({
        "Details": type(group({
            "location": member(reference("Location")),
        })),
        "Location": type(group({
            "line": member(number()),
            "column": member(number()),
        })),
        "UntypedNode": type(group({
            "kindName": member(string()),
            "value": member(string()),
            "details": member(reference("Details")),
            "children": member(array(reference("UntypedNode")))
        })),
    }),
    'interfaces': d({}),
    'functions': d({}),
}