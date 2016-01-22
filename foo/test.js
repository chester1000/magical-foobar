#!/usr/bin/env node

function testValue(val) {
  if (val !== 'foo')
    throw new Error('invalid return');

  console.log('ok');
}

require('./main.js')(testValue, '');
