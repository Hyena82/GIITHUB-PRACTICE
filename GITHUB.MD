GITHUB

Link: https://learngitbranching.js.org/?locale=vi

DOCUMENT

UNDO commit local repository
  - git reset --soft HEAD~[number]
    Destroy any change from local repo
  - git reset --hard HEAD~[number]
    Keep your file and stage all change back
  - git reset
    Unstage all file

UNDO commit push to remote
  - git revert HEAD
  - git revert "hash commit"
