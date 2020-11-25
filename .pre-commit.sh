if [ "$(head -c 3 ./.git/COMMIT_EDITMSG)" != "WIP" ]
then
  echo
  echo -e "\033[0;33m****** RUNNING HTC PRE-COMMIT CHECKS ******\033[0m"
  echo -e "\033[1;36m(disable by starting commit msg with \"WIP\")\033[0m"
  npx fldev ci
else
  true
fi
