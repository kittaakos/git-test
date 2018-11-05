import * as fs from 'fs';
import { join, basename } from 'path';
import { GitProcess } from 'dugite';
import { track } from 'temp';
import { expect } from 'chai';

const workspaceRoot = track();

describe('git', () => {

    it('should not fail when cloning a public repository', async function () {
        const path = join(workspaceRoot.mkdirSync('public-repository'), 'git-test');
        const url = 'https://github.com/kittaakos/git-test';
        await GitProcess.exec(['clone', url, path], __dirname);
        expect(fs.existsSync(join(path, 'src', basename(__filename)))).to.be.true;
    });

    after(() => {
        workspaceRoot.cleanupSync();
    });

});
