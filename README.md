# show-directory
A node package to list files and folders in a current directory.

![GitHub](https://img.shields.io/github/license/trishantpahwa/show-directory?style=plastic)

#### This is an ECMAScript 2016 (ES6) class. It can be used to find the contents of a directory.

## Usage
```
    import showDirectory from 'show-directory';

    let folderName = 'sample_folder';
    let path = __dirname + '\/' + folder_name;

    let directory = new showDirectory(path).showDirectory;
    console.log(directory);  // Displays directory obj.
    console.log(directory.contents);  // Displays contents of a directory with a file/folder label
    console.log(directory.dore)
```