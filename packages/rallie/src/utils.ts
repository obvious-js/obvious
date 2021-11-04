export const constant = {
  privateBus: (appName: string) => `$${appName}:bus`,
  publicStateNamespace: '$public',
  privateStateNamespace: '$private'
}

export const errors = {
  stateNotInitialized: (appName: string, isPrivate: boolean) => `[rallie] the app ${appName} hasn't initialized ${isPrivate ? 'private' : 'public'} state`
}