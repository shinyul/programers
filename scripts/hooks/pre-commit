# /usr/bin/env bash

BRANCH=`git rev-parse --abbrev-ref HEAD`

if [[ "$BRANCH" == "master" ]]; then
  echo -e "You are on \e[31m\e[1m[ $BRANCH ]\e[0m branch . You can not directly commit on \e[31m\e[1m[ $BRANCH ] \e[0mbranch"
  echo -e "Please checkout the other branch and commit"
  exit 1
fi

exit 0
