import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "glossary that contains the types for an untyped typescript abstract syntax tree",
    'license': "ISC",

    'dependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}