import fs from 'fs';
import assert from 'assert';

import showDirectory from './index';

function Test_Directory_Path() {
    describe('Testing directory path', function() {
        var path = __dirname.toString().split('\\');
        path.pop();
        path = path.join('\\') + '\\sample_folder';
        it('should have the same path.', function() {
            console.log('Input path: ' + path);
            console.log('Current directory: ' + __dirname);
            assert.equal(path, __dirname);
        });
    });
}

function Testing_Directory_Contents() {
    describe('Testing sample_folder', function() {
        var path = __dirname.toString().split('\\');
        path.pop();
        path = path.join('\\') + '\\sample_folder';
        describe('Directory Path' + path, function() {
            it('should have the same directory.', function() {                
                fs.readFile('dist\/sample_folder_test_output.json', function(err, data) {
                    let directory = new showDirectory(path).toString();
                    let sample_folder = JSON.parse(data.toString()).showDirectory.toString();
                    assert.equal(directory, sample_folder);
                });
            });
        });
    });
}

Test_Directory_Path();
Testing_Directory_Contents();