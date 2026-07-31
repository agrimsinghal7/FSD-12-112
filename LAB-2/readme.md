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

## All  functions are promise so it must be called with await keyword
