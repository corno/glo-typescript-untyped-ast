import * as pr from 'pareto-core-raw'

import {
    string,
    number,
    types,
    group,
    member,
    reference,
    array,
    type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.T.Glossary<string> = {
    'imports': d({}),
    'parameters': d({}),
    'types': d({
        "Location": type(group({
            "line": member(number()),
            "column": member(number()),
        })),
        "UntypedNode": type(group({
            "kindName": member(string()),
            "value": member(string()),
            "details": member(group({
                "location": member(reference("Location")),
            })),
            "children": member(array(reference("UntypedNode")))
        })),
    }),
    'interfaces': d({}),
    'functions': d({}),
}