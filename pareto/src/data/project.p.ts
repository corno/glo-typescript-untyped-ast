import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.p"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "glossary that contains the types for an untyped typescript abstract syntax tree",
    'license': "ISC",

    'pubdependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}