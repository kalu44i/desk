Kolya, when you get to know the basic commands, clean up the readme file and add appropriate descrtiption.

CHECKOUT TO dev BRANCH !!!!!!!!!!!!!!!!!!!!!!!!! everything is done in dev branch !!!!!!!!!!!!!!


important commands

Kolya, in order to clone the remote repository use 
git clone https://github.com/RusKovv/desk.git

to get repo up to date state use 
git pull 

git reset --hard - reset changes in local repo
git reset commit_hash

git branch -r  -list remote branches 
git branch -a  -list remote and local branches 

git add file - compose a commit to the local repo 
git commit -a -m "message" - commit changes to the local repo

git branch branchname - create branch
git branch -d branchname - delete branch
git checkout branch - change a branch 

git branch - shows branche

git status - status of the local repo 

git log - commits histrory 
git log --oneline - compact commits history

git push origin branch_name - push local changes in local repo to the remote origin 


The desk project has two branches now, master and dev. All development takes place in the dev branch, the master branch uses for releases. Additional features should be developed in feature branches, lets set a name convention of fetaure branches to "feature-name_of_feature", further when feature development finished, it must be merged with dev branch.


