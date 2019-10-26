import fs from 'fs';
import assert from 'assert';

import showDirectory from './index';

function test1() {
    describe('Testing sample_folder', function() {
        var path = __dirname.toString().split('\\');
        path.pop();
        path = path.join('\\') + '\\sample_folder';
        describe('Directory Path' + path, function() {
            it('should have the same directory.', function() {                
                fs.readFile('dist\/sample_folder_test_output.json', function(err, data) {
                    let directory = new showDirectory(path).toString();
                    let sample_folder = JSON.parse(data.toString()).showDirectory.toString();
                    console.log('Input path: ' + path);
                    console.log('Current directory: ' + __dirname);
                    assert(directory, sample_folder);
                });
            });
        });
    });
}

test1();