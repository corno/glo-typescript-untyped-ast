import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "glossary that contains the types for an untyped typescript abstract syntax tree",
    'license': "TBD",

    'dependencies': d({}),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({}),
    }],
}