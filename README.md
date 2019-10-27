# show-directory
A node package to list files and folders in a current directory.

![Travis (.org)](https://img.shields.io/travis/trishantpahwa/show-directory?style=plastic)
![GitHub](https://img.shields.io/github/license/trishantpahwa/show-directory?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/trishantpahwa/show-directory?style=plastic)
![Coveralls github](https://img.shields.io/coveralls/github/trishantpahwa/show-directory?style=flat-square)
![npm](https://img.shields.io/npm/dw/show-directory?style=plastic)

#### This is an ECMAScript 2016 (ES6) class. It can be used to find the contents of a directory.

## Usage
```
    import showDirectory from 'show-directory';

    let folderName = 'sample_folder';
    let path = __dirname + '\/' + folder_name;

    let directory = new showDirectory(path).showDirectory;
    console.log(directory);  // Displays directory obj.
    console.log(directory.contents);  // Displays contents of a directory with a file/folder label
    console.log(directory.folders);  // Displays folders within the directory.
    console.log(directory.files);  // Displays files within the directory.
```