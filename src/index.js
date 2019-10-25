import fs from 'fs';
import path from 'path';

export default class showDirectory { 

    contents = { };
    directory = { files: [], folders: [] };

    constructor(pathName) {
        pathName = this.checkPath(pathName);
        this.contents = this.readDirectory(pathName);
        let files = [];
        let folders = [];
        Object.keys(this.contents).forEach((content) => {
            if(this.contents[content] == 'File') {
                files.push(content);
            }
            if(this.contents[content] == 'Folder') {
                folders.push(content);
            }
        });
        this.directory.files = files;
        this.directory.folders = folders;        
    }

    checkPath(pathName) {
        if(pathName == null) {
            pathName = __dirname;
        }
        if(path.isAbsolute(pathName)) {
            return pathName;
        } else {
            return null;
        }
    }

    readDirectory(pathName) {
        let contents = { };
        let directoryContents = fs.readdirSync(pathName);
        let directoryContentPaths = [];
        directoryContents.forEach((directoryContent) => {
            directoryContent = pathName + '\\' + directoryContent;
            directoryContentPaths.push(directoryContent);
        });
        directoryContentPaths.forEach((directoryContentPath) => {
            if(fs.statSync(directoryContentPath).isFile()) {
                contents[directoryContentPath] = 'File';
            } else if(fs.statSync(directoryContentPath).isDirectory()) {
                contents[directoryContentPath] = 'Folder';
                let innerContents = this.readDirectory(directoryContentPath);
                Object.keys(innerContents).forEach((innerContentPath) => {
                    contents[innerContentPath] = innerContents[innerContentPath];
                });
            }
        });
        return contents;
    }
}
