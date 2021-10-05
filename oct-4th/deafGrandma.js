let prompt = require('prompt');
prompt.start();

let goodbye = 0
console.log('HEY KID!')

function deafGrandma () {
    prompt.get('askGrandma', function (err, result) {
        let input = result.askGrandma
        if (input === 'GOODBYE!' && goodbye === 1) {
            console.log('LATER, SKATER!')
            return
        }
        if (input === 'GOODBYE!') {
            console.log('LEAVING SO SOON?')
            goodbye++
        }
        if (/[a-z]/.test(input)) {
            console.log('SPEAK UP, KID!')
        }
        if (input === '') {
            console.log('WHAT?!')
        }
        if (input === input.toUpperCase() && input !== 'GOODBYE!' && input !== '') {
            console.log('NO, NOT SINCE 1946!')
        }
        deafGrandma();
    })
}

deafGrandma();