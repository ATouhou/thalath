#!/bin/bash

if [ $# -ne 2 ]; then
  echo "USAGE: $0 <input-words> <aspell-out>"
  exit 1
fi

#paste $2 $1 | grep -e '^\(*\|+\)' | cut -f2
paste $2 $1 | grep -e '^*' | cut -f2
