GITHUB

Link: https://learngitbranching.js.org/?locale=vi

DOCUMENT

UNDO commit local repository
  - git reset --soft HEAD~[number]
    destroy any change from local repo
  - git reset --hard HEAD~[number]
    keep your file and stage all change back

UNDO commit push to remote
  - git revert HEAD
  - git revert "hash commit"
