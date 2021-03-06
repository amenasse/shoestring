
parse_qs = function (qs) {
    var data = {};
    qs.replace(/^\?/, '').split('&').forEach(function(term) {
        term = term.split('=', 2);
        (term[0] in data) || (data[term[0]] = []);
        data[term[0]].push(unescape(term[1]));
    });
    return data;
}
