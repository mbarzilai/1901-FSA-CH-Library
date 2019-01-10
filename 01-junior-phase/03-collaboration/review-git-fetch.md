# How and When to Fetch/Pull from a Git Remote

`git fetch` and `git pull` are two commands for getting changes from a remote repository into your local repository.

* `git fetch` fetches any changes from a remote branch and applies them locally to what is known as a *tracking branch*. A tracking branch is simply a local copy of the remote branch. You will never work directly on a tracking branch. Tracking branches are named in the format [remote name]/[branch name]. For example, the branch `origin/master` would track the `master` branch from the remote called `origin`

* `git pull` is actually a combination of `git fetch` and `git merge`. It fetches the changes to your local tracking branch, then merges those changes from the tracking (eg. `origin/master`) branch into the working branch (`master`).

In practice, you will probably use `pull` much more frequently than `fetch`. You could use `fetch` followed by `git diff` to inspect the changes from the remote before merging them in. However, the nature of Git means you can always undo those changes after a pull if you don't like them for some reason.


If you have cloned your local repository from a remote, that remote will already be set up as your origin, and the master branch should be set to track the remote master. If you have created your local before creating your remote, you will have to setup the origin and tracking branches manually. Github will give you some guidance on this when you create a new repo, but generally the steps are:

```
# Add remote to local repository, named origin
git remote add origin <url of remote>

# Set up current branch (master) to track remote branch
# the -u flag is short for --set-upstream
git push -u origin master

# To see all branches, including remote tracking branches,
# use this the -a flag with git branch
git branch -a
```

Now, to get the latest changes from your remote, run

```
git pull origin master
```

Or, if you want to inspect the changes before merging them in

```
git fetch origin master
git diff origin/master
```

Notice that there is no slash between origin and master in the `git fetch` command, but there is a slash in `git diff`.

Why, you ask?

The `fetch` command takes to arguments: the name of the remote, and the name of the branch. These are `origin` and `master`, respectively

The `diff` command is taking a single argument: the branch to which we will compare the current working branch. That branch is called `origin/master`, because it is a tracking branch. We could just as easily compare to a different, non-tracking branch such as `git diff featureA`.
