function filterName(name) {
    if (!name) {
        return 'N/A'
    }
    return name.trim();
}

module.exports = filterName