//script principal

const {sleep} = require('./utils');
const {Musica} = require('./musica');

const myHero = new Musica('My Hero', 'Foo Fighters');

myHero.addParte(
    new Parte('Too alarmin\'now to talk about \n Take your pictures down and shake it out \n Truth or consequence, say it aloud \n Use that evidence, race it around',
    11000, 'estrofe1') );

async function play() {
    try {    
    console.log(myHero.nome + ' por ' +myHero.artista);
    await sleep(34000); //introdução
        //estrofe1
        console.log('Parte: ' + myHero.partes[0].tag);
        console.log(myHero.partes[0].letra);
        await sleep(myHero.partes[0].tempoEspera)
    } catch (error) {

    }
}

play();