import assert from 'assert';
import fs from 'fs';

import showDirectory from './index';

function test1() {
    describe('Testing sample_folder', function() {
        var path = __dirname.toString().split('\\');
        path.pop();
        path = path.join('\\') + '\\sample_folder';
        describe('Directory Path', function() {
            it('should have the same directory path', function() {
                let directory = new showDirectory(path);
                fs.readFile('dist\/sample_folder_test_output.json', function(err, data) {
                    let sample_folder = JSON.parse(data.toString());
                    
                });
            });
        });
    });
}

//export default test1;

test1();