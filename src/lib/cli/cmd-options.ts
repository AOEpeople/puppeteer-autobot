export function cmdOptions() {
    return [
        {name: 'job', type: String},

        {name: 'agent', type: String},


        {name: 'width', type: Number},
        {name: 'height', type: Number},

        {name: 'wait', type: Number},

        {name: 'slowmo', type: Number},
        {name: 'debug', type: Boolean},

        {name: 'output', type: String},

        {name: 'trust', type: Boolean},
        {name: 'attached', type: Boolean},
        {name: 'help', type: Boolean},
    ];
}