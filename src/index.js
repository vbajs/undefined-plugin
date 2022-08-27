import { findByProps } from '@cumcord/modules/webpack';
import { addCommand } from '@cumcord/commands';

const openModalLazy = findByProps('openModalLazy');

const removeCommand = addCommand({
    name: 'undefined',
    description: 'Crash your discord client',
    args: [
        {
            name: 'undefined',
            type: 'string',
            required: false
        }
    ],
    handler: () => {
        openModalLazy.openModal(()=>{throw new Error()})
    }
})

export default {
    onUnload() {
        removeCommand()
    }
}