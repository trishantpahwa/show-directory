import fs from 'fs';
import assert from 'assert';

import showDirectory from './index';

function Testing_Directory_Contents() {
    describe('Testing sample_folder', function() {
        var path = __dirname.toString()
        path.pop();
        console.log(path);
        path = path.join('\\') + '\\dist\\sample_folder';
        console.log(path);
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

Testing_Directory_Contents();