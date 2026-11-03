#!/bin/bash

string=$(openssl rand -hex 10)

while ((1 > 0)); do
    echo $(date +%F' '%T): $string
    sleep 5
done
