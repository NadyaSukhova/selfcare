import { readFileSync } from 'fs';

export function getHistory() {
    var history = readFileSync(`./src/app/mocks/oldnotes.json`, 'utf8');
    return (JSON.parse(history));
}