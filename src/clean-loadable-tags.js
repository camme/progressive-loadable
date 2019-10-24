const cleanLoadableTags = (tags, stats, original) => {
    let parsed = original;
    tags.forEach(tag => {

        let chunk = stats.namedChunkGroups[tag];

        chunk.assets.forEach(asset => {
            var re = new RegExp(`<script.*?${asset}.*?$`, 'mg');
            parsed = parsed.replace(re, '');
        });

        chunk.chunks.forEach(chunkName => {
            chunkName = typeof chunkName === 'string' ? '"' + chunkName + '"' : chunkName;
            let re = new RegExp(`,${chunkName},`, 'mg');
            parsed = parsed.replace(re, '');
            re = new RegExp(`,${chunkName}\\]`, 'mg');
            parsed = parsed.replace(re, ']');
            re = new RegExp(`\\[${chunkName},`, 'mg');
            parsed = parsed.replace(re, '[');
            re = new RegExp(`\\[${chunkName}\\]`, 'mg');
            parsed = parsed.replace(re, '[]');
        });

    });
    return parsed;
};

export default cleanLoadableTags;

