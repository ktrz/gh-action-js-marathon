import { getInput } from "@actions/core";
import { context } from "@actions/github";

type GithubContext = typeof context

const inputName = getInput("name");

greet(inputName, getRepoUrl(context));


console.log('--- Action Info ---')
console.log('eventName:', context.eventName)
console.log('sha:', context.sha)
console.log('ref:', context.ref)
console.log('workflow:', context.workflow)
console.log('action:', context.action)
console.log('actor:', context.actor)
console.log('job:', context.job)
console.log('runNumber:', context.runNumber)
console.log('runId:', context.runId)
console.log('apiUrl:', context.apiUrl)
console.log('serverUrl:', context.serverUrl)
console.log('graphqlUrl:', context.graphqlUrl)
console.log('-------------------')

console.log('--- Payload ---')
console.log(JSON.stringify(context.payload, undefined, 2))
console.log('---------------')

function greet(name: string, repoUrl: string) {
  console.log(`'Hello ${name}! You are running a GH Action in ${repoUrl}'`);
}

function getRepoUrl({repo, serverUrl}: GithubContext): string {
    return `${serverUrl}/${repo.owner}/${repo.repo}`
}
