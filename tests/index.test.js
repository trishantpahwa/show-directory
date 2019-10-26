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
                let directory = new showDirectory(path).toString();
                fs.readFile('dist\/sample_folder_test_output.json', function(err, data) {
                    let sample_folder = JSON.parse(data.toString()).showDirectory.toString();
                    assert(directory, sample_folder);
                });
            });
        });
    });
}

test1();