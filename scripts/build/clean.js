const del = require('del');
 
(async () => {
    const deletedPaths = await del(['dist/']);
    console.log('Deleted dist files:\n', deletedPaths.join('\n'));
})();