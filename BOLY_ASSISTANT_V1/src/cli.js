#!/usr/bin/env node
import { answerQuestion, getKnowledgeBaseSummary } from './boly-core.js';

const input = process.argv.slice(2).join(' ').trim();

if (!input || input === '--help') {
  console.log(`Boly™ Assistant V1\n\nUso:\n  npm run ask -- "Boly, mi masa quedó pegajosa"\n  node src/cli.js "¿Por qué mi bolillo no abre?"\n  node src/cli.js --summary\n`);
  process.exit(0);
}

if (input === '--summary') {
  console.log(JSON.stringify(getKnowledgeBaseSummary(), null, 2));
  process.exit(0);
}

console.log(answerQuestion(input));
