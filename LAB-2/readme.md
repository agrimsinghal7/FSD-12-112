# File System (FS Module)

- FS Module directly communicate with operating system rather than browser
- The Common operation on the file or folder are :-
  1. File
  - writeFile
  - readFile
  - appendFile
  2. Folder
  - MKdir/Md
  - rmdir/rm
  - readdir
  3. File metadata
  - stat
  - lstat
  - rstat
  4. Watch
  - watch
  - unwatch
  5. Stream
  - readstream()
  - writestream()

## All functions are promise so it must be called with await keyword

## CRUD Project (Create,Retrieve,Update,Delete)

assume we are making a cart related project :-

- user can add any product(id,name,price,qty) into cart
- user can see all the items of cart
- user can remove item from cart
- user can also update quantity of product
- all the items should be stored after termination of project
