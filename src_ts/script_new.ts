import { gs } from '@servicenow/glide'
import { GlideRecord } from '@servicenow/glide/dist/imports/GlideRecord'

export function showStateUpdateNew(current: GlideRecord, previous: GlideRecord) {
	const currentState: string = current.getDisplayValue('state')
	const previousState: string = previous.getDisplayValue('state')
	printMsg(currentState, previousState)
}

const printMsg = (currentState: string, previousState: string) => {
	gs.addInfoMessage(`currentState: ${currentState}; previousState: ${previousState}`)
}

// "allowJs": true,
