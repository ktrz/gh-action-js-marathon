import { getInput } from "@actions/core"

const inputName = getInput("name")

greet(inputName)

function greet(name: string) {
    console.log(`'Hello ${name}!'`)
}


