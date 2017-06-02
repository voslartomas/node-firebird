module.exports = {
    GDSError: GDSError
};

function GDSError(gdsObject) {
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
    }

    this.message = gdsObject && gdsObject.message || '';
    this.code = gdsObject && gdsObject.status && gdsObject.status.length > 0 && gdsObject.status[0].gdscode || -1;
}

GDSError.prototype = Object.create(Error.prototype);
GDSError.prototype.name = 'GDSError';