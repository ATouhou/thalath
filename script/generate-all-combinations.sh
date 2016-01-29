#!/bin/bash

letters=(ض ص ث ق ف غ ع ه خ ح ج د ش س ي ب ل ا ت ن م ك ط ئ ء ؤ ر ى ة و ز ظ إ أ آ)
for a in ${letters[@]}; do
  for b in ${letters[@]}; do
    for c in ${letters[@]}; do
      echo $a$b$c
    done
  done
done
