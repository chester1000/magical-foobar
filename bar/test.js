#!/usr/bin/env node

function testValue(val) {
  if (val !== 'foobar')
    throw new Error('invalid return');

  console.log('ok');
}

require('./main.js')(testValue, '');
