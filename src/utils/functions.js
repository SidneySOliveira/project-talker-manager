const fs = require('fs').promises;
const path = require('path');

const TALKER_ROUTER_FILE = '../talker.json';

async function getTalkers() {
    try {
        const date = await fs.readFile(path.resolve(__dirname, TALKER_ROUTER_FILE), 'utf-8');
        const talkers = await JSON.parse(date);
        return talkers;
    } catch (error) {
        console.error('Erro na leitura do arquivo');
    }
}

async function writeTalker(talker) {
    try {
        const talkers = await getTalkers();
        const id = talkers.length + 1;
        const newTalker = { id, ...talker };
        talkers.push(newTalker);
        await fs.writeFile(path.resolve(__dirname, TALKER_ROUTER_FILE), JSON.stringify(talkers));
        return newTalker;
    } catch (error) {
        console.error('Erro no update do arquivo talker.json');
    }
}

async function upTalker(updatedDatesTalker) {
    try {
        const talkers = await getTalkers();
        const index = talkers.findIndex((talker) => talker.id === updatedDatesTalker.id);
        talkers.splice(index, 1, updatedDatesTalker);
        await fs.writeFile(path.resolve(__dirname, TALKER_ROUTER_FILE), JSON.stringify(talkers));
        return updatedDatesTalker;
    } catch (error) {
        console.error('Erro no update do arquivo talker.json');
    }
}

async function delTalker(id) {
    try {
        const talkers = await getTalkers();
        const arrayPosition = talkers.findIndex((t) => t.id === id);
        talkers.splice(arrayPosition, 1);
        await fs.writeFile(path.resolve(__dirname, TALKER_ROUTER_FILE), JSON.stringify(talkers));
    } catch (error) {
        console.error('Erro no update do arquivo talker.json');
    }
}

async function filterTalker(q) {
    try {
        const talkers = await getTalkers();
        if (q) {
        const filteredTalker = talkers.filter((t) => t.name.includes(q));
        return filteredTalker;
        }
        return talkers;
    } catch (error) {
        console.error('Erro ao filtrar o arquivo talker.json');
    }
}

module.exports = {
    getTalkers,
    writeTalker,
    upTalker,
    delTalker,
    filterTalker,
};