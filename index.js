module.exports = {
    /**
     * Inject size id to image url
     * @param {String} url
     * @param {String} sizeId
     * @returns {string} resized url
     */
    resize : function(url, sizeId){
        if(!url)
            return url;
        var path = url.split('/'),
            image = path.pop();
        path.push(sizeId, image);
        return path.join('/');
    },

    /**
     * @deprecated
     */
    getResizedUrl : this.resize
};
